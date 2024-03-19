import React, { createContext, useState, useContext, useEffect } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const getSavedColorFromLocalStorage = () => {
    const savedColor = localStorage.getItem("selectedColor");
    return savedColor
      ? JSON.parse(savedColor)
      : { hue: 120, brightness: 1, saturation: 1 };
  };

  const [color, setColor] = useState(getSavedColorFromLocalStorage);

  const saveColorToLocalStorage = (newColor) => {
    localStorage.setItem("selectedColor", JSON.stringify(newColor));
  };

  useEffect(() => {
    saveColorToLocalStorage(color);
  }, [color]);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => useContext(ColorContext);
