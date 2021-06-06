import React from "react";
import GodIcon from "../GodIcon";
import GodName from "../GodName";
import GodDescription from "../GodDescription";
import "./style.css";

const GodDetail = ({ god, godBg }) => {
  return (
    <div className="god-detail-container">
      <div className="god-bg-container">
        <div className="god-bg" style={{ background: godBg }} />
        <GodIcon god={god} size="medium" />
      </div>
      <GodName name={god?.godName} />
      <GodDescription description={god?.godDescription} expand={true} />
    </div>
  );
};

export default GodDetail;
