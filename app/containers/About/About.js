import style from "./about.module.scss";

const About = () => (
  <section className={style.about}>
    <div className={style.about__text}>
      <h1>Academia Británica de Ballet</h1>
      <h2>
        <span>64 años</span> formando bailarinas
      </h2>
    </div>
  </section>
);

export default About;
