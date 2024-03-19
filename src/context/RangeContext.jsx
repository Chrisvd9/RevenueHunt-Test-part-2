import React, { createContext, useContext, useState } from "react";

const RangeContext = createContext();

export const useRangeContext = () => useContext(RangeContext);

export const RangeProvider = ({ children }) => {
  const initialValue = localStorage.getItem("rangeValue") || 16;
  const [rangeValue, setRangeValue] = useState(initialValue);

  const handleRangeChange = (value) => {
    setRangeValue(value);
    localStorage.setItem("rangeValue", value);
  };

  return (
    <RangeContext.Provider value={{ rangeValue, handleRangeChange }}>
      {children}
    </RangeContext.Provider>
  );
};
