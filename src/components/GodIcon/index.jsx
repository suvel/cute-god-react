import React from "react";
import "./style.css";

const GodIcon = ({ god: godObject, size = "small" }) => {
  const { godImage } = godObject;
  return <img className={`god-icon size-${size}`} src={godImage} />;
};

export default GodIcon;
