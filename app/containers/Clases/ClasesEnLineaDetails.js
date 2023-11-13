'use client'

import { Link as Slink } from 'react-scroll';

const ClasesEnLineaDetails = () => {
  return (<>
    Ofrecemos clases remotas grupales e individuales tanto de&nbsp;
    <Slink to="id-clases-ballet" smooth="easeInOutCubic" offset={-75}>
      ballet
    </Slink>
    ,&nbsp;
    <Slink to="id-clases-musica" smooth="easeInOutCubic" offset={-75}>
      música
    </Slink>{" "}
    e idiomas. Infórmate de nuestros horarios de clases grupales&nbsp;
    <Slink
      to="id-clases-ballet-horarios"
      smooth="easeInOutCubic"
      offset={-75}
    >
      acá.
    </Slink>{" "}
    Para una mejor interacción entre profesora & alumnas y asegurar la
    privacidad de nuestra comunidad, dictamos las clases usando{" "}
    <a href="https://zoom.us" target="_blank">
      zoom
    </a>
    . Somos miembros de la agencia de servicios online&nbsp;
    <a href="https://www.limalista.com" target="_blank">
      Lima Lista.
    </a>
  </>)
}

export default ClasesEnLineaDetails;