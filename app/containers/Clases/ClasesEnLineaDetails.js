'use client'

import AnchorLink from "@/app/components/AnchorLink/AnchorLink";

const ClasesEnLineaDetails = () => {
  return (<>
    Ofrecemos clases remotas grupales e individuales tanto de&nbsp;
    <AnchorLink targetKey="id-clases-ballet">
      ballet
    </AnchorLink>
    ,&nbsp;
    <AnchorLink targetKey="id-clases-musica">
      música
    </AnchorLink>{" "}
    e idiomas. Infórmate de nuestros horarios de clases grupales&nbsp;
    <AnchorLink targetKey="id-clases-ballet-horarios">
      acá.
    </AnchorLink>{" "}
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