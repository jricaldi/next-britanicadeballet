import TargetSection from "@/app/components/TargetSection/TargetSection";

const Contacto = () => {
  const anchorStyle = "block text-color3 border-[2px] border-color3 text-xs p-3 text-center capitalize letter-[2px] tracking-[2px] font-semibold cursor-pointer mt-10 rounded-sm w-full lg:w-32 first:mt-0 hover:border-color2";
  return (
    <TargetSection targetKey="id-contacto">
      <section className='pb-24'>
        <div className="flex justify-center flex-wrap m-0 p-[40px_5%_0_5%] lg:flex-nowrap lg:mx-[5%] lg:p-[100px_13%_0_13%]">
          <div className="w-full lg:w-[30%]">
            <a className={anchorStyle}
              href="https://www.facebook.com/britanicadeballet"
              target="_blank"
              rel="noopener noreferrer"
              >
              facebook
            </a>
            <a className={anchorStyle}
              href="https://www.instagram.com/britanicadeballet/"
              target="_blank"
              rel="noopener noreferrer"
              >
              instagram
            </a>
            <a className={anchorStyle}
              href="https://www.youtube.com/c/Britanicadeballet"
              target="_blank"
              rel="noopener noreferrer"
              >
              youtube
            </a>
            <a className={anchorStyle} href="mailto:britanicaballet@gmail.com?Subject=Consulta%20de%20horarios-clases%20privadas">
              Correo
            </a>
          </div>
          <div className="w-full lg:w-[70%] p-0 lg:px-[100px]">
            <div className="text-color3 text-center lg:text-left">
              {/*
                <p>
                <b>
                Nuestra academia se encuentra cerrada por vacaciones de fin de
                año.
                <br />
                <br />
                Atención presencial desde el jueves 02 de enero 2020.
                </b>
                </p> */}
              <br />
              <br />
              <a href="tel:+5114481113">+51 1 448-1113</a>
              <p className="py-4">Av. Alfredo Franco 200, Urb. Chama, Surco - Lima</p>
              <p>
                <a href="mailto:britanicaballet@gmail.com?Subject=Consulta%20de%20horarios-clases%20privadas">
                  britanicaballet@gmail.com
                </a>
              </p>
              {
                <p>
                  <br />
                  <br />
                  Atención telefónica:
                  <br />
                  <br />
                  Miércoles, Viernes y Sábados 10am - 6pm
                </p>
              }
            </div>
            <div className="mt-10 w-full">
              <iframe className="border-none w-full h-[300px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7176653663755!2d-77.00035304905748!3d-12.131459991368802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8087d4a59a9%3A0x4a3ecbdc4a007ceb!2sAcademia+Brit%C3%A1nica+de+Ballet!5e0!3m2!1ses-419!2sus!4v1498017371971"
                allowFullScreen
                />
            </div>
          </div>
        </div>
      </section>
    </TargetSection>
  );
};

export default Contacto;
