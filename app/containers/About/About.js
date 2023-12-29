import style from "./about.module.scss";

const About = () => (
  <section className={style.about}>
    <div className={style.about__text}>
      <h1>Academia Británica de Ballet</h1>
      <div className={style.about__text__sub}>
        Formando bailarinas desde <span>1956</span>
      </div>
      <div className={style.about__text__sub2}>
        A 200m del Óvalo Higuereta - Santiago de Surco
      </div>
    </div>
  </section>
);

export default About;
