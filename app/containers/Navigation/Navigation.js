'use client'

import { Header } from "@/components";
import Image from "next/image";
import cn from 'classnames';
import { Link as Slink } from 'react-scroll';
import { signal } from "@preact/signals";
import style from "./navigation.module.scss";

const Navigation = () => {
  const menu = signal({
    topMenu: false,
    midMenu: false,
    bottomMenu: false,
    showMenu: false
  })

  const showMobileNav = () => {
    menu.value = {
      topMenu: !menu.value.topMenu,
      midMenu: !menu.value.midMenu,
      bottomMenu: !menu.value.bottomMenu,
      fadeMenu: !menu.value.fadeMenu
    }
  };

  return (
    <Header>
      <div className={style.navigation}>
        <Slink to="id-home" className={style.navigation__logo} smooth="easeInOutCubic">
          <Image src='/logo.png' alt="Británica de ballet" width={166} height={339} />
        </Slink>
        <nav role="navigation">
          <ul className={cn(style.navigation__menu, { fadeMenu: menu.value.fadeMenu })}>
            <li>
              <Slink
                to="id-clases-en-linea"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={showMobileNav}
              >
                Clases en línea
              </Slink>
            </li>
            <li>
              <Slink
                to="id-clases-ballet"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={showMobileNav}
              >
                Ballet
              </Slink>
            </li>
            <li>
              <Slink
                to="id-clases-musica"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={showMobileNav}
              >
                Música
              </Slink>
            </li>
            <li>
              <Slink
                to="id-profesoras"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={showMobileNav}
              >
                Profesoras
              </Slink>
            </li>
            <li>
              <Slink
                to="id-contacto"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={showMobileNav}
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
                  onClick={showMobileNav}
                  width={166}
                  height={339}
                />
              </Slink>
            </div>
          </ul>
          <div onClick={showMobileNav} className={style.navigation__wrap} />
          <div className={style.navigation__action}>
            <a className={style.navigation__action__icon}>
              <div className={cn(style.menui, style['top-menu'], { 'top-animate': menu.value.topMenu })}
              />
              <div className={cn(style.menui, style['mid-menu'], { 'mid-animate': menu.value.midMenu })}
              />
              <div className={cn(style.menui, style['bottom-menu'], { 'bottom-animate': menu.value.bottomMenu })}
              />
            </a>
          </div>
        </nav>
      </div>
    </Header>)
}

export default Navigation;
