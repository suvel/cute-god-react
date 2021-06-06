import React from "react";
import arrow_icon from "../../asset/icons/arrow_icon.svg";
import "./style.css";

const ArrowIcon = ({ arrowType = "up" }) => {
  return (
    <img className={`arrow-icon arrowType-${arrowType}`} src={arrow_icon} />
  );
};

export default ArrowIcon;
