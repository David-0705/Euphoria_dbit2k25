
import SelectDept from "../Department/SelectDept";
import { Gradient } from "./Services";
import { GradientLight } from "./Benefits";
import { Diamonds } from "./Hero";
import bg from "../CoordiCard/pngegg-Photoroom.png";
import bg1 from "../CoordiCard/bg1.png";

const Departmentsdesign = () => {
    return (
      <div>
          {/* Place the Diamonds component behind everything else */}
          <div className="absolute -top-20 left-[20%] w-[300px] h-[300px] z-10">
            <Diamonds w="50vw" h="50vw" />
          </div>
  
          {/* Other elements, with higher z-index to appear on top */}
          <div className="relative bottom-[400px] right-72">
            <GradientLight />
          </div>
          <div className="relative bottom-36 right-52">
            
          </div>
  
     
          <div className="relative z-30">
            <SelectDept />
          </div>

      </div>
    );
  };
  

export default Departmentsdesign;