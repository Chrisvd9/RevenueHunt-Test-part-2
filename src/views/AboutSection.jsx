import React, { useState } from "react";
import { Novatrix, Velustro, Tranquiluxe, Opulento } from "uvcanvas";

const AboutSection = () => {
  const backgrounds = [
    <Novatrix />,
    <Velustro />,
    <Tranquiluxe />,
    <Opulento />,
  ];
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const changeBackground = () => {
    setCurrentBackgroundIndex(
      (prevIndex) => (prevIndex + 1) % backgrounds.length
    );
  };

  return (
    <div className="hero min-h-screen">
      {backgrounds[currentBackgroundIndex]}
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Click the button!</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary" onClick={changeBackground}>
            Change Background
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
