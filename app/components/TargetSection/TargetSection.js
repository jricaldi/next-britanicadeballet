'use client'

import React from 'react';
import { useScroll } from "@/context/ScrollContext";

const TargetSection = ({ targetKey, children }) => {
  const { setRef } = useScroll();

  // Asegúrate de que `children` sea un único elemento válido antes de clonarlo
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref: setRef(targetKey), // Añade el ref al único hijo
      'data-target': targetKey
    });
  }

  // Si `children` no es un único elemento, lanza un error o devuelve algo significativo
  console.error("TargetSection requiere un único hijo React válido.");
  return null;
}

export default TargetSection;