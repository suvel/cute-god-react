import React from "react";
import info_icon from "../../asset/icons/info_icon.svg";
import "./style.css";
const InfoIcon = () => {
  return (
    <div className="info-icon-container ">
      <img className="info-icon" src={info_icon} />
    </div>
  );
};

export default InfoIcon;
