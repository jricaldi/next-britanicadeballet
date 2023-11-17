import style from "./about.module.scss";

const About = () => (
  <section className={style.about}>
    <div className={style.about__text}>
      <h1>Academia Británica de Ballet</h1>
      <div className={style.about__text__sub}>
        <span>64 años</span> formando bailarinas
      </div>
    </div>
  </section>
);

export default About;
