'use client'

import { useRef } from "react";
import cn from "classnames";
import Image from "next/image";
import { useInView } from 'framer-motion';
import style from './sectionImage.module.scss';

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
      <div ref={imageRef} className={style.sectionImage__image} style={{
        transform: isInView ? 'none' : 'translateY(150px)',
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s ease-in-out"
      }} >
        <Image src={info.image.name}
          alt={info.name}
          width={info.image.width}
          height={info.image.height}/>
      </div>
      <div className={cn(style.sectionImage__info, backgroundSection)}>
        <span className={style.sectionImage__info__name} style={nameAnimation}>
          {info.name}
        </span>
        {info.extraName && (
          <span className={style.sectionImage__info__surname} style={nameAnimation}>
            {info.extraName}
          </span>
        )}
      </div>
    </>
  )
}

export default SectionImage;