import cn from "classnames";
import parseHTML from 'html-react-parser';
import { SectionImage } from "@/components"; 
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
      <SectionImage info={{ name: info.name, extraName: info.extraName, image: info.image }} backgroundSection={backgroundSection} />
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
