// registrationForms.js

export const REGISTRATION_FORMS = {
  solo_regional: {
    title: "Solo Singing (Regional)",
    description: "Register for regional solo singing",
    scriptUrl: "https://script.google.com/macros/s/AKfycbxdC_BQuElc4z_gtIwyKvswj4v_yV08zaBf5W9b1BwMSuxEBM_Pk-QHCi1F2Zgeur9x/exec",
    formId: "solo_regional",
    fields: [
      { id: "name", label: "Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
      { id: "phone", label: "Phone Number", type: "tel", required: true },
      {
        id: "collegeName",
        label: "College Name",
        type: "text",
        required: true,
      },
      { id: "year", label: "Year", type: "text", required: true },
      { id: "course", label: "Course", type: "text", required: true },
      { id: "photo", label: "Photo of ID", type: "file", required: true },
    ],
  },

  solo_western: {
    title: "Solo Singing (Western)",
    description: "Register for western solo singing",
    scriptUrl: "https://script.google.com/macros/s/AKfycbxdC_BQuElc4z_gtIwyKvswj4v_yV08zaBf5W9b1BwMSuxEBM_Pk-QHCi1F2Zgeur9x/exec",
    formId: "solo_western",
    fields: [
      { id: "name", label: "Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
      { id: "phone", label: "Phone Number", type: "tel", required: true },
      {
        id: "collegeName",
        label: "College Name",
        type: "text",
        required: true,
      },
      { id: "year", label: "Year", type: "text", required: true },
      { id: "course", label: "Course", type: "text", required: true },
      { id: "photo", label: "Photo of ID", type: "file", required: true },
    ],
  },

  group_dance: {
    title: "Group Dance",
    description: "Register your dance group",
    scriptUrl: "https://script.google.com/macros/s/AKfycbwPlH2mGmF6ensAD9F1PN4tmWzZENxnLD4i-2n5qQZF6ob-o6h-oFJiqLVabxtToffA/exec",
    formId: "group_dance",
    fields: [
      { id: "group_name", label: "Group Name", type: "text", required: true },
    ],
  },

  sports: {
    title: "Sports Registration",
    description: "Register for sports events",
    scriptUrl: "https://script.google.com/macros/s/AKfycbwPlH2mGmF6ensAD9F1PN4tmWzZENxnLD4i-2n5qQZF6ob-o6h-oFJiqLVabxtToffA/exec",
    formId: "sports",
    fields: [
      { id: "player_name", label: "Player Name", type: "text", required: true },
    ],
  },
};
