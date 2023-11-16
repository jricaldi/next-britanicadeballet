'use client'

import Image from "next/image";
import style from "./home.module.scss";
import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion';

const Home = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, latest => 1 - latest / 600);

  return (
    <motion.section id="id-home" className={style.home} style={{ opacity }}>
      <div className={style.home__mainImage}>
        <Image
          className={style.home__mainImage__image}
          src='/fondo-inicio-2017.jpg'
          width={1500}
          height={1000}
          alt="Academia Británica de Ballet"
        />
      </div>
      <div className={style.home__caret}>
        <a className={style.home__caret__image}>
          <Image src='/caret.png' alt="caret" width={35} height={35}/>
        </a>
      </div>
    </motion.section>
  );
}

export default Home;
