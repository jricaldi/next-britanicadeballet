'use client'

import { useState } from 'react';
import Header from "@/components/Header/Header";
import Image from "next/image";
import cn from 'classnames';
import { useAnimate } from 'framer-motion';
import { Link as Slink } from 'react-scroll';
import logo from '@/images/logo.png';

const menuOptions = {
  /* 'id-clases-en-linea': 'Clases en línea', */
  'id-clases-ballet': 'Ballet',
  'id-clases-musica': 'Música',
  'id-profesoras': 'Profesoras',
  'id-contacto': 'Contactos'
}

const Navigation = () => {

  const [menu, setMenu] = useState({
    topMenu: false,
    midMenu: false,
    bottomMenu: false
  })
  const [scope, animate] = useAnimate();

  const handleOpenMenu = () => {
    setMenu((prev) => {
      const animationMenu = async () => {
        if (prev.topMenu) {
          await animate(scope.current, { opacity: 0 });
          await animate(scope.current, { display: 'none' });
        } else {
          animate(scope.current, { opacity: 1, display: 'block' });
        }
      }

      animationMenu();

      return {
        topMenu: !prev.topMenu,
        midMenu: !prev.midMenu,
        bottomMenu: !prev.bottomMenu,
      }
    });
  };

  const menuUIStyles = "bg-color3 mt-[30px] absolute w-6 h-[2px] rounded-[10px] transition duration-[0.6s] ease-out";

  return (
    <Header>
      <div className="flex items-center justify-between bg-color1 opacity-90 fixed h-[75px] w-screen py-2 z-[998]">
        <Slink to="id-home" className="h-full pl-[10vw] cursor-pointer" href='#'>
          <Image
            className="h-full w-auto"
            src={logo}
            priority
            alt="Británica de ballet"/>
        </Slink>
        <nav role="navigation">
          <ul ref={scope} className="top-0 left-0 fixed w-full bg-color1 m-0 p-0 pt-[50px] h-full opacity-0 hidden">
            { Object.keys(menuOptions).map((option) => (
              <li key={option} className='text-center p-2 first:mt-12'>
                <Slink
                  className='cursor-pointer text-[150%] text-color3 font-bold w-full'
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
              className='flex justify-center items-center mh-[200px] mt-10'
            >
              <Image
                className='h-20 w-auto cursor-pointer'
                src={logo}
                href='#'
                alt="Británica de ballet"/>
            </Slink>
          </ul>
          <div onClick={handleOpenMenu} className="absolute top-5 h-[50px] w-[50px] opacity-0 z-[999] cursor-pointer" />
          <div className='top-[30px] pr-[15vw]'>
            <a href='#' aria-label='menu despegable'>
              <div className={cn(menuUIStyles, { "top-[13px] rotate-45": menu.topMenu, "top-[5px]": !menu.topMenu })}
              />
              <div className={cn(menuUIStyles, "top-[13px]", { "opacity-0": menu.midMenu })}
              />
              <div className={cn(menuUIStyles, { "top-[13px] rotate-[-225deg]": menu.bottomMenu, "top-[21px]": !menu.bottomMenu })}
              />
            </a>
          </div>
        </nav>
      </div>
    </Header>)
}

export default Navigation;
