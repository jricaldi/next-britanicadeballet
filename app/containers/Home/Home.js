'use client'

import Image from "next/image";
import { useEffect, useState } from 'react';
import caret from '@/images/caret.png';
import { Link as Slink } from 'react-scroll';
import fondoInicio2017 from '@/images/fondo-inicio-2017.jpg';

const Home = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setOpacity(Math.max(0, 1 - y / 600));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="id-home" className="min-h-screen" style={{ opacity, transition: 'opacity 0.15s ease-out' }}>
      <h1 className="sr-only">Academia Británica de Ballet - Clases de Ballet en Lima, Surco</h1>
      <div className="min-h-screen fixed flex justify-center items-center w-screen">
        <Image
          fill
          className="h-auto w-full lg:h-screen lg:w-auto bg-center bg-no-repeat bg-cover object-contain"
          src={fondoInicio2017}
          priority
          sizes="84.41vw"
          alt="Academia Británica de Ballet"
          />
      </div>
      <div className="min-h-screen flex justify-center items-end pb-18.75">
        <Slink className="flex justify-center items-center h-13.25 w-13.25 border-[3px] border-light rounded-[50%] z-1 animation-bounce hover:cursor-pointer scale-100 hover:scale-90 ease-in-out duration-300"
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
    </section>
  );
}

export default Home;
