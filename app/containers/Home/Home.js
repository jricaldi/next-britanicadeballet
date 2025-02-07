'use client'

import Image from "next/image";
import { useScroll, motion, useTransform } from 'framer-motion';
import caret from '@/images/caret.png';
import { Link as Slink } from 'react-scroll';
import fondoInicio2017 from '@/images/fondo-inicio-2017.jpg';

const Home = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, latest => 1 - latest / 600);

  return (
    <motion.section id="id-home" className="h-dvh" style={{ opacity }}>
      <div className="min-h-screen fixed flex justify-center items-center w-screen">
        <Image
          fill
          className="h-auto w-full lg:h-screen lg:w-auto bg-center bg-no-repeat bg-cover object-contain"
          src={fondoInicio2017}
          priority
          fetchPriority="high"
          sizes="84.41vw"
          alt="Academia Británica de Ballet"
          />
      </div>
      <div className="min-h-screen flex justify-center items-end pb-[75px]">
        <Slink className="flex justify-center items-center h-[53px] w-[53px] border-[3px]
          border-color3 rounded-[50%] z-[1] animation-bounce hover:cursor-pointer
          scale-100 hover:scale-90 ease-in-out duration-300"
          to="id-about"
          smooth="easeInOutCubic"
          href="#"
          >
          <Image
            src={caret}
            className="object-contain"
            alt="caret"
            priority />
        </Slink>
      </div>
    </motion.section>
  );
}

export default Home;
