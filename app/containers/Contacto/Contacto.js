import GoogleMap from '@/components/GoogleMap/GoogleMap';

const Contacto = () => {
  const anchorStyle = "block text-light border-[2px] border-light text-xs p-3 text-center capitalize tracking-[2px] font-semibold cursor-pointer mt-10 rounded-xs w-full lg:w-32 first:mt-0 hover:border-primary";

  return (
    <section id="id-contacto" className='pb-24'>
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
        <div className="w-full lg:w-[70%] p-0 lg:px-25">
          <div className="text-light text-center lg:text-left">
            <br />
            <br />
            <a href="tel:+5114481113">+51 1 448-1113</a>
            <p className="py-4">Av. Alfredo Franco 200, Urb. Chama, Surco - Lima</p>
            <p>
              <a href="mailto:britanicaballet@gmail.com?Subject=Consulta%20de%20horarios-clases%20privadas">
                britanicaballet@gmail.com
              </a>
            </p>
            <p>
              <br />
              <br />
              Atención telefónica:
              <br />
              <br />
              Miércoles, Viernes y Sábados 10am - 6pm
            </p>
          </div>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
