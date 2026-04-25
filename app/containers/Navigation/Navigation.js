'use client'

import { useState } from 'react';
import Header from "@/components/Header/Header";
import Image from "next/image";
import cn from 'classnames';
import { useAnimate } from 'framer-motion';
import { Link as Slink } from 'react-scroll';
import logo from '@/images/logo.png';

const menuOptions = {
  'id-clases-ballet': 'Ballet',
  'id-clases-musica': 'Música',
  'id-profesoras': 'Profesoras',
  'id-contacto': 'Contactos'
}

const Navigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scope, animate] = useAnimate();

  const handleOpenMenu = () => {
    const nextState = !isMenuOpen;

    if (nextState) {
      animate(scope.current, { opacity: 1, display: 'block' });
    } else {
      (async () => {
        await animate(scope.current, { opacity: 0 });
        animate(scope.current, { display: 'none' });
      })();
    }

    setIsMenuOpen(nextState);
  };

  const menuUIStyles = "bg-light absolute w-6 h-[2px] rounded-[10px] transition duration-[0.6s] ease-out";

  return (
    <Header>
      <div className="flex items-center justify-between bg-dark opacity-90 fixed h-[75px] w-screen py-2 z-[998]">
        <Slink to="id-home" className="h-full pl-[10vw] cursor-pointer" href='#'>
          <Image
            className="h-full w-auto"
            src={logo}
            priority
            alt="Británica de ballet"/>
        </Slink>
        <nav role="navigation">
          <ul ref={scope} className="top-0 left-0 fixed w-full bg-dark m-0 p-0 pt-[50px] h-full opacity-0 hidden">
            { Object.keys(menuOptions).map((option) => (
              <li key={option} className='text-center p-2 first:mt-12'>
                <Slink
                  className='cursor-pointer text-[150%] text-light font-bold w-full'
                  to={option}
                  smooth="easeInOutCubic"
                  offset={-75}
                  onClick={handleOpenMenu}
                  href='#'
                >
                  {menuOptions[option] }
                </Slink>
              </li>
            )) }
            <Slink
              to="id-home"
              href="#"
              onClick={handleOpenMenu}
              className='flex justify-center items-center min-h-[200px] mt-10'
            >
              <Image
                className='h-20 w-auto cursor-pointer'
                src={logo}
                alt="Británica de ballet"/>
            </Slink>
          </ul>
          <div className="absolute top-5 right-[15vw] z-[999]">
            <button
              onClick={handleOpenMenu}
              aria-label="Menú desplegable"
              className="focus:outline-none relative w-6 h-[21px] cursor-pointer bg-transparent border-none p-0"
            >
              <div className={cn(menuUIStyles, { "top-[13px] rotate-45": isMenuOpen, "top-[5px]": !isMenuOpen })} />
              <div className={cn(menuUIStyles, "top-[13px]", { "opacity-0": isMenuOpen })} />
              <div className={cn(menuUIStyles, { "top-[13px] rotate-[-225deg]": isMenuOpen, "top-[21px]": !isMenuOpen })} />
            </button>
          </div>
        </nav>
      </div>
    </Header>)
}

export default Navigation;
