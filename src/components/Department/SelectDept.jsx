import React, { useState } from "react";
import PixelCanvas from "./Pixel";
import Section from "../Section";
import { departments } from "../../constants";
import Heading from "../Heading";
import GlowingText from "../design/Glowingtext";
import FutPlayercard from "../FutCard/FutCard";
import "./dept.css"

const SelectDept = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section
      className="pt-0 pb-20 px-15"
      crosses
      crossesOffset="lg:translate-y-[0rem]"
      customPaddings
    >
      {/* Center the GlowingText horizontally */}
      <div className="flex relative top-10 justify-center mb-10">
        <GlowingText text="Departments" fs="48px" />
      </div>

      <div className="relative scroll-pt-96 px-4 lg:pl-64 lg:pr-[1.5625rem] xl:pl-[35px] xl:pr-[35px]">
        <div className="cards">
          {/*"grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-7"*/}
          {departments.map((department) => (
            <FutPlayercard 
              key={department.id}
              deptName={department.department.replace(/\./g, "")}
              />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SelectDept;
