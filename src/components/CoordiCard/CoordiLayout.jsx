import React from "react";
import DisplayCoordi from "./DisplayCoordi";
import { members } from "../../constants";
import "./coordi.css";

function CoordiLayout ()  {
  const lead = members.slice(0, 4);
  const senior = members.slice(4,10);
  const junior = members.slice(10,16);

  return (
    <div className="page-wrapper">
      <h1 className="tag-name lead" style={{ paddingBottom: 50 }}> LEAD CO-ORDINATORS </h1>
      <div className="grid grid-two">
        {lead.map((item) => (
          <DisplayCoordi
            key={item.id}
            name={item.name}
            position={item.position}
            image={item.image}
          />
        ))}
      </div>
      <h1 className="tag-name" style={{ paddingTop: 50 }}>
        SENIOR CO-ORDINATORS
      </h1>
      <div className="grid grid-three">
        {senior.map((item) => (
          <DisplayCoordi
            key={item.id}
            name={item.name}
            position={item.position}
            image={item.image}
          />
        ))}
      </div>
      <h1 className="tag-name" style={{ paddingTop: 50 }}>
        JUNIOR CO-ORDINATORS
      </h1>
      <div className="grid grid-three">
        {junior.map((item) => (
          <DisplayCoordi
            key={item.id}
            name={item.name}
            position={item.position}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CoordiLayout;
