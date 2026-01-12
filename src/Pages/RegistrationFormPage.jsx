import { useParams, Navigate } from "react-router-dom";
import GoogleForm from "../components/Registration_Forms/Forms";
import {REGISTRATION_FORMS} from "../components/Registration_Forms/registrationForms";
import DefaultPage from "../components/DefaultPage";
import { departments } from "../constants";


const RegistrationFormPage = () => {
  const { formKey } = useParams();

  const config = REGISTRATION_FORMS[formKey];

  // safety check (invalid URL)
  if (!config) {
    return <Navigate to="/404" replace />;
  }

  return <DefaultPage  nav={departments} ><GoogleForm config={config} /></DefaultPage>;
};

export default RegistrationFormPage;
