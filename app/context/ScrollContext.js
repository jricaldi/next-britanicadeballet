'use client'

import React, { createContext, useRef, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const refs = useRef({}); // Objeto para almacenar múltiples refs

  const setRef = (key) => {
    if (!refs.current[key]) {
      refs.current[key] = React.createRef(); // Crear ref si no existe
    }
    return refs.current[key];
  };

  const scrollTo = (key) => {
    if (refs.current[key] && refs.current[key].current) {
      refs.current[key].current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ScrollContext.Provider value={{ setRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);