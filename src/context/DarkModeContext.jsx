import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setisDarkMode] = useLocalStorage("isDarkMode",true );



  const toggleDarkMode = () => setisDarkMode((prev) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context == undefined)
    throw new Error("DarkMode context used out of darkemode provider");
  return context;
}
