import React from "react";
import { useColorContext } from "../context/ColorContext";
import { useRangeContext } from "../context/RangeContext";

const HeroSection = () => {
  const { color } = useColorContext();
  const { rangeValue } = useRangeContext();

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div
            style={{
              color: `hsl(${color.hue}, ${color.saturation * 100}%, ${
                color.brightness * 100
              }%)`,
            }}
          >
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className="p-5 text-black"
              style={{
                backgroundColor: `hsl(${color.hue}, ${
                  color.saturation * 100
                }%, ${color.brightness * 100}%)`,
                borderRadius: `${rangeValue}px`,
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* <div className="hero min-h-screen">
        <div className="hero-content text-center text-neutral-content">
          <div
            className="max-w-md"
            style={{
              color: `hsl(${color.hue}, ${color.saturation * 100}%, ${
                color.brightness * 100
              }%)`,
            }}
          >
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className="p-5 text-black"
              style={{
                backgroundColor: `hsl(${color.hue}, ${
                  color.saturation * 100
                }%, ${color.brightness * 100}%)`,
                borderRadius: `${rangeValue}px`,
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
