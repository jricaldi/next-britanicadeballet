'use client'

import { useState } from 'react';
import { Header } from "@/components";
import Image from "next/image";
import cn from 'classnames';
import { Link as Slink } from 'react-scroll';
import style from "./navigation.module.scss";
import { useAnimate } from 'framer-motion';

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

  return (
    <Header>
      <div className={style.navigation}>
        <Slink to="id-home" className={style.navigation__logo} smooth="easeInOutCubic">
          <Image src='/logo.png' alt="Británica de ballet" width={166} height={339} />
        </Slink>
        <nav role="navigation">
          <ul ref={scope} className={cn(style.navigation__menu)} onClick={handleOpenMenu} >
            <li>
              <Slink
                to="id-clases-en-linea"
                offset={-75}
                smooth="easeInOutCubic"
              >
                Clases en línea
              </Slink>
            </li>
            <li>
              <Slink
                to="id-clases-ballet"
                offset={-75}
                smooth="easeInOutCubic"
              >
                Ballet
              </Slink>
            </li>
            <li>
              <Slink
                to="id-clases-musica"
                offset={-75}
                smooth="easeInOutCubic"
              >
                Música
              </Slink>
            </li>
            <li>
              <Slink
                to="id-profesoras"
                offset={-75}
                smooth="easeInOutCubic"
              >
                Profesoras
              </Slink>
            </li>
            <li>
              <Slink
                to="id-contacto"
                offset={-75}
                smooth="easeInOutCubic"
              >
                Contactos
              </Slink>
            </li>
            <div className={style.navigation__menu__logo}>
              <Slink
                to="id-home"
                smooth="easeInOutCubic"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src='/logo.png'
                  alt="Británica de ballet"
                  width={166}
                  height={339}
                />
              </Slink>
            </div>
          </ul>
          <div onClick={handleOpenMenu} className={style.navigation__wrap} />
          <div className={style.navigation__action}>
            <a className={style.navigation__action__icon}>
              <div className={cn(style.menui, style.topMenu, { [style.topAnimate]: menu.topMenu })}
              />
              <div className={cn(style.menui, style.midMenu, { [style.midAnimate]: menu.midMenu })}
              />
              <div className={cn(style.menui, style.bottomMenu, { [style.bottomAnimate]: menu.bottomMenu })}
              />
            </a>
          </div>
        </nav>
      </div>
    </Header>)
}

export default Navigation;
