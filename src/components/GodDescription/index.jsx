import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";
const GodDescription = ({ description, expand }) => {
  const descRef = useRef();
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (!descRef?.current) return;
    const div = descRef.current;
    const hasVerticalScrollbar = div.scrollHeight > div.clientHeight;
    console.log({ noScroll: !!hasVerticalScrollbar });
  }, [descRef]);

  return (
    <>
      {/* <CSSTransition timeout={5000} classNames="fall"> */}
      <div ref={descRef} className={`god-description expand-${readMore}`}>
        {description}
      </div>
      {/* </CSSTransition> */}
      <div className={"readmore-btn"} onClick={() => setReadMore((v) => !v)}>
        {readMore ? "Read Less" : "Read More"}
      </div>
    </>
  );
};

export default GodDescription;
