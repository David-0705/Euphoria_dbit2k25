import DefaultPage from "../DefaultPage";
import Deptinfo from "./Departmentinfo";
import { useLocation } from 'react-router-dom';
import { departments ,dptpg } from "../../constants";

const DisplayDept = () => {
  const location = useLocation(); // Get the current location object
  const params = new URLSearchParams(location.search); // Parse query string
  let departmentName = params.get('department')?.toLowerCase(); // Get the value of the 'department' query parameter

  if (!departmentName) {
    return <p>No department selected!</p>; // Handle missing query parameter
  }
  

  return (
    <DefaultPage nav={dptpg} >
      <Deptinfo departmentName={departmentName} />
    </DefaultPage>
  );
};


export default DisplayDept;