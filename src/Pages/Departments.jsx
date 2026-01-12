import DefaultPage from "../components/DefaultPage";
import { departments } from "../constants";

import Departmentsdesign from "../components/design/Department";

const Departments = () => {
    return (
      <div className="overflow-hidden">
        <DefaultPage nav={departments}>
          <Departmentsdesign/>
        </DefaultPage>
      </div>
    );
  };
  

export default Departments;