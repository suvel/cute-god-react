import React, { useState, useEffect } from "react";
import { usePalette } from "color-thief-react";
import AppBg from "./components/AppBg";
import AppName from "./components/AppName";
import InfoIcon from "./components/InfoIcon";
import GodList from "./components/GodList";
import godList from "./data/godList";
import GodDetail from "./components/GodDetail";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
  const [selectedGod, setSelectedGod] = useState(godList[1]);

  const { data, loading, error } = usePalette(selectedGod?.godImage, 4, "hex", {
    crossOrigin: "anonymous",
  });

  const handelGodSelection = (god) => {
    setSelectedGod(god);
  };

  // useEffect(() => {
  //   console.log({ data, loading, error });
  // }, [data, loading, error]);

  return (
    <div className="App">
      <AppBg bg={data?.[0]} selectedGod={selectedGod}>
        <CSSTransition appear={true} timeout={5000} classNames="fall">
          <AppName />
        </CSSTransition>
        <InfoIcon />
        <GodList
          gods={godList}
          selectedGod={selectedGod}
          onGodSelected={handelGodSelection}
        />
        <TransitionGroup>
          <CSSTransition
            appear={true}
            key={selectedGod.godId}
            timeout={500}
            classNames="slide"
          >
            <GodDetail god={selectedGod} godBg={data?.[3]} />
          </CSSTransition>
        </TransitionGroup>
      </AppBg>
    </div>
  );
}

export default App;
