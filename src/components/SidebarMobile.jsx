import React from "react";
import { useColorContext } from "../context/ColorContext";
import { useRangeContext } from "../context/RangeContext";
import { ColorPicker, LegacyCard, RangeSlider } from "@shopify/polaris";

const SidebarMobile = () => {
  const { color, handleColorChange } = useColorContext();
  const { rangeValue, handleRangeChange } = useRangeContext();

  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <h1 className="mb-4 text-lg text-center font-semibold">Customize</h1>
        <div className="mb-4">
          <LegacyCard sectioned title="Border radius">
            <RangeSlider
              label="Border radius in px, please move the range value to change it."
              value={rangeValue}
              onChange={handleRangeChange}
              output
            />
          </LegacyCard>
        </div>
        <div>
          <b>Change color of button and text</b>
          <ColorPicker onChange={handleColorChange} color={color} />
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
