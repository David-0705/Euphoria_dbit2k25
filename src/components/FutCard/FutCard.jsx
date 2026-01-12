import React, { useState, useEffect, memo } from "react";
//import Logo from "../../assets/card/cardLogo.webp"; 
import "./futcard.css";
import { departments, capimg } from "../../constants";
import "../Card/card.css";
import Logo from "../../assets/hero/EuohoriaLogo.webp"

const FutPlayercard = ({ deptName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [captainName, setCaptainName] = useState("");
  const [DepartmentName, setDepartmentName] = useState("");
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");
  const [img, setImg] = useState("");
  const [deptlogo, setLogo] = useState(null); 

  useEffect(() => {
    const currDept = departments.find(
      (d) => d.department.replace(/\./g, "") === deptName
    );

    if (currDept) {
      setCaptainName(currDept.captain);
      setDepartmentName(currDept.department);
      setColor1(currDept.color1 || "#000000");
      setColor2(currDept.color2 || "#000000");
      setImg(capimg[currDept.id]); 
      setLogo(currDept.deptlogo); 
    }
  }, [deptName]);

  const handleClick = () => setIsHovered(!isHovered);

  return (
    <div className="flex justify-center items-center pb-2 -mt-10">
      <div className="deptcard glow-wrapper" style={{ "--glow-color": color1 }}>
        
        <button
          className="mail"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img className="logo" src={Logo} alt="card logo" />
        </button>

        <div
          style={{ border: `1px solid ${color1}`, willChange: "transform" }}
          className={`profile-pic ${isHovered ? "hover-effect spin" : ""}`}
        >
          <button className="mail" onClick={handleClick}>
            <img className="w-[40px] h-[60px]" src={Logo} alt="card logo" />
          </button>

          <img src={deptlogo} alt="Department logo" className="dept-logo"/>

          <img src={img} alt="Player" className="player-image"/>
        </div>

        <div style={{ background: color1 }} className="bottom">
          <div className="content">
            <p className="h6 text-black">{captainName}</p>
            <p className="h3 text-black">{DepartmentName}</p>
          </div>
          <div className="bottom-bottom text-black">
            <p className="text">Department Captain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FutPlayercard);
