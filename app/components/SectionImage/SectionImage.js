'use client'

import { useRef } from "react";
import cn from "classnames";
import Image from "next/image";
import { useInView } from 'framer-motion';

const SectionImage = ({ info, backgroundSection }) => {
  const imageRef = useRef();
  const isInView = useInView(imageRef, { once: true });

  const nameAnimation = {
    transform: isInView ? 'none' : 'translateX(-200px)',
    opacity: isInView ? 1 : 0,
    transition: "all 0.7s ease-in-out"
  }

  return (
    <>
      <div ref={imageRef} className="max-h-150 overflow-hidden" style={{
        transform: isInView ? 'none' : 'translateY(150px)',
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s ease-in-out"
      }} >
        <Image src={info.image.name}
          className="w-full h-full"
          alt={info.name}
          width={info.image.width}
          height={info.image.height}/>
      </div>
      <div className={cn("-mt-6.25 lg:-mt-10 pl-[5%]", backgroundSection)}>
          <h2 className="block text-[40px] lg:text-6xl text-shadow text-primary" style={nameAnimation}>
          {info.name}
        </h2>
        {info.extraName && (
          <span className="block text-[40px] lg:text-6xl text-shadow" style={nameAnimation}>
            {info.extraName}
          </span>
        )}
      </div>
    </>
  )
}

export default SectionImage;