import React from "react";
import "./style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AppBg = ({ bg = "transparent", selectedGod, children }) => {
  const { godImage } = selectedGod;
  return (
    <TransitionGroup style={{ background: bg }} className="app-bg">
      <CSSTransition
        appear={true}
        key={selectedGod.godId}
        timeout={500}
        classNames="hello"
      >
        <div className="big_img-container">
          <img className="bg-img" src={godImage} />
        </div>
      </CSSTransition>
      {children}
    </TransitionGroup>
  );
};

export default AppBg;
