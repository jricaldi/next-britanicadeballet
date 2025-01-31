'use client'

import Image from "next/image";
import { useScroll, motion, useTransform } from 'framer-motion';

const Home = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, latest => 1 - latest / 600);

  return (
    <motion.section id="id-home" className="min-h-screen" style={{ opacity }}>
      <div className="min-h-screen fixed flex justify-center items-center w-screen">
        <Image
          className="h-auto w-full lg:h-screen lg:w-auto bg-center bg-no-repeat bg-cover"
          src='/fondo-inicio-2017.jpg'
          width={1500}
          height={1000}
          quality={60}
          priority={true}
          alt="Academia Británica de Ballet"
          />
      </div>
      <div className="min-h-screen flex justify-center items-end pb-[75px]">
        <a className="flex justify-center items-center h-[53px] w-[53px] border-[3px]
          border-color3 rounded-[50%] z-[1] animation-bounce hover:cursor-pointer
          scale-100 hover:scale-90 ease-in-out duration-300"
          >
          <Image src='/caret.png' alt="caret" width={35} height={35}/>
        </a>
      </div>
    </motion.section>
  );
}

export default Home;
