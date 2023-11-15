import Image from "next/image";
import cn from "classnames";
import parseHTML from 'html-react-parser';

import style from "./section.module.scss";
const renderTime = (time) => {
  if (typeof time === "string") {
    return <div>{time}</div>;
  }
  return time.map((t, index) => <div key={index}>{t}</div>);
};

const renderData = (details) => {
  if (typeof details === "string") {
    return parseHTML(details);
  }
  return details();
};

const Section = ({ info, isClassSection }) => {
  const backgroundSection = isClassSection ? style.classSection : style.classTeachers;
  return (
    <article className={style.section} id={info.scrollId}>
      <div className={style.section__image}>
        <Image src={info.image.name} alt={info.name} width={info.image.width} height={info.image.height} data-aos="fade-up" />
      </div>
      <div className={cn(style.section__info, backgroundSection)}>
        <span className={style.section__info__name} data-aos="zoom-out-right">
          {info.name}
        </span>
        {info.extraName && (
          <span className={style.section__info__surname} data-aos="zoom-out-right">
            {info.extraName}
          </span>
        )}
      </div>
      <div className={cn(style.section__details, backgroundSection)}>
        <div
          className={cn(style.section__details__info, {
            [style.noColunmsText]: info.noColunmsText,
          })}
        >
          {renderData(info.details)}
        </div>
      </div>
      <div className={style.section__horarios} id={`${info.scrollId}-horarios`}>
        {!info.showSchedules && (
          <div className={style.section__horarios__noShedules}>
            <div>Pronto estaremos publicando nuevos horarios</div>
          </div>
        )}
        {info.showSchedules &&
          info.schedules.map((schedule) => (
            <div key={schedule.name} className={style.section__horarios__single}>
              <div className={style.section__horarios__single__name}>
                <div>{renderData(schedule.name)}</div>
              </div>
              {schedule.time && (
                <div className={style.section__horarios__single__time}>
                  {renderTime(schedule.time)}
                </div>
              )}
            </div>
          ))}
      </div>
    </article>
  );
};

export default Section;
