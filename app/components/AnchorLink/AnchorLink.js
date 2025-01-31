'use client'

import  { useScroll } from "@/context/ScrollContext";

const AnchorLink = ({ targetKey, children, className, onClick }) => {
  const { scrollTo } = useScroll();

  const handleClick = (e) => {
    e.preventDefault();
    scrollTo(targetKey); // Desplázate al targetKey correspondiente
    onClick?.();
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export default AnchorLink;