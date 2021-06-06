import React from "react";
import ArrowIcon from "../ArrowIcon";
import GodIcon from "../GodIcon";
import "./style.css";

const GodList = ({ gods, selectedGod, onGodSelected }) => {
  const handelChangeGod = (god, type) => {
    let nxtGod = undefined;
    if (type == "select") nxtGod = god;
    else {
      const godIndex = gods.findIndex((currentGod) => {
        return currentGod.godId == selectedGod.godId;
      });
      const minIndex = 0;
      const maxIndex = gods.length-1;
      let nxtGodIndex = undefined;
      if (type == "prv") nxtGodIndex = godIndex - 1;
      if (type == "nxt") nxtGodIndex = godIndex + 1;
      debugger;
      if (nxtGodIndex < minIndex) nxtGodIndex = maxIndex;
      if (nxtGodIndex > maxIndex) nxtGodIndex = minIndex;

      nxtGod = gods[nxtGodIndex];
    }

    onGodSelected(nxtGod);
  };

  return (
    <div className="god-list-container">
      <button
        className="no-style-button"
        onClick={() => handelChangeGod(selectedGod, "prv")}
      >
        <ArrowIcon />
      </button>
      <div className="gods-container">
        {gods.map((god) => {
          const isSelected = god.godId == selectedGod.godId;
          return (
            <div className={`god-select-${isSelected}`}>
              <button
                className="no-style-button"
                onClick={() => handelChangeGod(god, "select")}
              >
                <GodIcon god={god} />
              </button>
            </div>
          );
        })}
      </div>
      <button
        className="no-style-button"
        onClick={() => handelChangeGod(selectedGod, "nxt")}
      >
        <ArrowIcon arrowType={"down"} />
      </button>
    </div>
  );
};

export default GodList;
