// import React, { useState } from 'react';
// import { Upload, Send, Plus, Trash2, AlertCircle } from 'lucide-react';

// // CONFIGURATION OBJECT - Modify this to create different form versions
// const FORM_CONFIG = {
//   title: "Data Collection Form",
//   description: "Please fill out the form below. Files will be uploaded to Google Drive.",
  
//   // Google Apps Script Web App URL (you'll need to deploy your own)
//   scriptUrl: "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE",
  
//   // Form identifier - used to route to different sheets/folders
//   formId: "employee_onboarding", // Change this for each form type
  
//   // Define your form fields here
//   fields: [
//     {
//       id: "name",
//       label: "Full Name",
//       type: "text",
//       required: true,
//       placeholder: "Enter your full name"
//     },
//     {
//       id: "email",
//       label: "Email Address",
//       type: "email",
//       required: true,
//       placeholder: "your.email@example.com"
//     },
//     {
//       id: "phone",
//       label: "Phone Number",
//       type: "tel",
//       required: false,
//       placeholder: "+1 (555) 000-0000"
//     },
//     {
//       id: "department",
//       label: "Department",
//       type: "select",
//       required: true,
//       options: ["Sales", "Marketing", "Engineering", "HR", "Other"]
//     },
//     {
//       id: "message",
//       label: "Message",
//       type: "textarea",
//       required: false,
//       placeholder: "Enter your message here...",
//       rows: 4
//     },
//     {
//       id: "documents",
//       label: "Upload Documents",
//       type: "file",
//       required: false,
//       accept: ".pdf,.doc,.docx,.jpg,.png",
//       multiple: true,
//       maxSize: 10 // MB
//     }
//   ]
// };

// const GoogleFormsComponent = () => {
//   const [formData, setFormData] = useState({});
//   const [files, setFiles] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const handleInputChange = (fieldId, value) => {
//     setFormData(prev => ({ ...prev, [fieldId]: value }));
//   };

//   const handleFileChange = (fieldId, fileList) => {
//     const field = FORM_CONFIG.fields.find(f => f.id === fieldId);
//     const maxSize = (field.maxSize || 10) * 1024 * 1024; // Convert MB to bytes
    
//     const validFiles = Array.from(fileList).filter(file => {
//       if (file.size > maxSize) {
//         setMessage({
//           type: 'error',
//           text: `File ${file.name} exceeds ${field.maxSize}MB limit`
//         });
//         return false;
//       }
//       return true;
//     });

//     setFiles(prev => ({ ...prev, [fieldId]: validFiles }));
//   };

//   const fileToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result.split(',')[1]);
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   };

//   const validateForm = () => {
//     for (const field of FORM_CONFIG.fields) {
//       if (field.required) {
//         if (field.type === 'file') {
//           if (!files[field.id] || files[field.id].length === 0) {
//             setMessage({ type: 'error', text: `${field.label} is required` });
//             return false;
//           }
//         } else {
//           if (!formData[field.id] || formData[field.id].trim() === '') {
//             setMessage({ type: 'error', text: `${field.label} is required` });
//             return false;
//           }
//         }
//       }
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage({ type: '', text: '' });

//     if (!validateForm()) return;

//     if (FORM_CONFIG.scriptUrl === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
//       setMessage({
//         type: 'error',
//         text: 'Please configure your Google Apps Script URL first'
//       });
//       return;
//     }

//     setLoading(true);

//     try {
//       // Prepare file data
//       const fileData = {};
//       for (const [fieldId, fileList] of Object.entries(files)) {
//         if (fileList && fileList.length > 0) {
//           fileData[fieldId] = await Promise.all(
//             fileList.map(async (file) => ({
//               name: file.name,
//               mimeType: file.type,
//               data: await fileToBase64(file)
//             }))
//           );
//         }
//       }

//       // Send data to Google Apps Script
//       const response = await fetch(FORM_CONFIG.scriptUrl, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           formId: FORM_CONFIG.formId, // Include form identifier
//           formData,
//           files: fileData,
//           timestamp: new Date().toISOString()
//         })
//       });

//       setMessage({
//         type: 'success',
//         text: 'Form submitted successfully! Your data has been saved.'
//       });
      
//       // Reset form
//       setFormData({});
//       setFiles({});

//     } catch (error) {
//       setMessage({
//         type: 'error',
//         text: 'Error submitting form. Please try again.'
//       });
//       console.error('Submission error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderField = (field) => {
//     const baseClasses = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

//     switch (field.type) {
//       case 'textarea':
//         return (
//           <textarea
//             id={field.id}
//             value={formData[field.id] || ''}
//             onChange={(e) => handleInputChange(field.id, e.target.value)}
//             placeholder={field.placeholder}
//             rows={field.rows || 3}
//             required={field.required}
//             className={baseClasses}
//           />
//         );

//       case 'select':
//         return (
//           <select
//             id={field.id}
//             value={formData[field.id] || ''}
//             onChange={(e) => handleInputChange(field.id, e.target.value)}
//             required={field.required}
//             className={baseClasses}
//           >
//             <option value="">Select an option</option>
//             {field.options.map(option => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
//         );

//       case 'file':
//         return (
//           <div>
//             <label className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-all bg-gray-50 hover:bg-blue-50">
//               <div className="text-center">
//                 <Upload className="mx-auto mb-2 text-gray-400" size={32} />
//                 <span className="text-sm text-gray-600">
//                   Click to upload or drag and drop
//                 </span>
//                 <span className="block text-xs text-gray-500 mt-1">
//                   {field.accept || 'All files'} (Max {field.maxSize || 10}MB)
//                 </span>
//               </div>
//               <input
//                 type="file"
//                 id={field.id}
//                 onChange={(e) => handleFileChange(field.id, e.target.files)}
//                 accept={field.accept}
//                 multiple={field.multiple}
//                 required={field.required}
//                 className="hidden"
//               />
//             </label>
//             {files[field.id] && files[field.id].length > 0 && (
//               <div className="mt-2 space-y-1">
//                 {files[field.id].map((file, idx) => (
//                   <div key={idx} className="text-sm text-gray-600 flex items-center gap-2">
//                     <span className="truncate">📄 {file.name}</span>
//                     <span className="text-xs text-gray-400">
//                       ({(file.size / 1024).toFixed(1)} KB)
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         );

//       default:
//         return (
//           <input
//             type={field.type}
//             id={field.id}
//             value={formData[field.id] || ''}
//             onChange={(e) => handleInputChange(field.id, e.target.value)}
//             placeholder={field.placeholder}
//             required={field.required}
//             className={baseClasses}
//           />
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//               {FORM_CONFIG.title}
//             </h1>
//             <p className="text-gray-600">{FORM_CONFIG.description}</p>
//           </div>

//           {/* Message Display */}
//           {message.text && (
//             <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
//               message.type === 'success' 
//                 ? 'bg-green-50 text-green-800 border border-green-200' 
//                 : 'bg-red-50 text-red-800 border border-red-200'
//             }`}>
//               <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
//               <span>{message.text}</span>
//             </div>
//           )}

//           {/* Form Fields */}
//           <div className="space-y-6">
//             {FORM_CONFIG.fields.map(field => (
//               <div key={field.id}>
//                 <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
//                   {field.label}
//                   {field.required && <span className="text-red-500 ml-1">*</span>}
//                 </label>
//                 {renderField(field)}
//               </div>
//             ))}

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                   Submitting...
//                 </>
//               ) : (
//                 <>
//                   <Send size={20} />
//                   Submit Form
//                 </>
//               )}
//             </button>
//           </div>

//           {/* Setup Instructions */}
//           <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//             <h3 className="font-semibold text-yellow-900 mb-2">📝 Setup Required</h3>
//             <p className="text-sm text-yellow-800">
//               To connect this form to Google Sheets and Drive:
//             </p>
//             <ol className="list-decimal ml-5 mt-2 space-y-1 text-sm text-yellow-800">
//               <li>Create ONE Google Apps Script web app (handles all forms)</li>
//               <li>Update FORM_CONFIG.scriptUrl with your deployment URL</li>
//               <li>Set a unique formId for each form type</li>
//               <li>Customize the fields array to match your needs</li>
//             </ol>
//             <p className="text-xs text-yellow-700 mt-3 italic">
//               Current Form ID: <span className="font-mono font-semibold">{FORM_CONFIG.formId}</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoogleFormsComponent;