import Image from "next/image";
import style from "./home.module.scss";

const Home = () => {
  return (
    <section id="id-home" className={style.home}>
      <div className={style.home__mainImage}>
        <Image
          className={style.home__mainImage__image}
          src='/fondo-inicio-2017.jpg'
          width={1500}
          height={1000}
          alt="Academia Británica de Ballet"
        />
      </div>
      <div className={style.home__caret}>
        <a className={style.home__caret__image}>
          <Image src='/caret.png' alt="caret" width={35} height={35}/>
        </a>
      </div>
    </section>
  );
}

export default Home;
