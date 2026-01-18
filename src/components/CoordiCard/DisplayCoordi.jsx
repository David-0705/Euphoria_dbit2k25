import React from "react";
import template from "../../assets/coordi/template_new.png";
import template1 from "../../assets/coordi/template1.png";
import "./DisplayCoordi.css"


const DisplayCoordi = ({ name, position, image }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${template1})` }}>
      <div className="photo-placeholder">
        <img src={image} alt={name} className="card-photo" />
      </div>

      <div className="card-text-block">
        <div className="card-name">{name}</div>
        <div className="card-role">{position}</div>
      </div>
    </div>
  );
};

export default DisplayCoordi;
