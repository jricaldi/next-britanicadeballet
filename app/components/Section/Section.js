import cn from "classnames";
import SectionImage from "@/components/SectionImage/SectionImage";

const renderTime = (time) => {
  if (Array.isArray(time)) {
    return time.map((t, index) => <div key={index}>{t}</div>);
  }
  return <div>{time}</div>;
};

const Section = ({ info, isClassSection }) => {

  const backgroundSection = isClassSection ? "bg-[#94823e2b]" : "bg-[#c3d7ee4d]";
  const commonStyles = "px-[10%] pt-7 leading-8 text-justify";
  const descriptionClass = cn("text-body indent-7 columns-1 lg:columns-2 gap-12 pb-12 text-pretty", {
    "lg:columns-1": info.noColumnsText,
  });

  return (
    <article id={info.scrollId} className="w-full bg-light pb-8 lg:pb-12 lg:last:pb-24">
      <SectionImage info={{ name: info.name, extraName: info.extraName, image: info.image }} backgroundSection={backgroundSection} />
      <div className={cn(commonStyles, backgroundSection)}>
        {info.hasCustomDetails ? (
          <div className={descriptionClass}>
            <info.CustomDetails />
          </div>
        ) : (
          <div className={descriptionClass}>
            {info.description}
            {info.hasEmailLink && (
              <>
                {' '}
                <a href={`mailto:${info.email}?Subject=Consulta%20de%20horarios-clases%20privadas`}
                  className="underline cursor-pointer text-primary">
                  {info.emailLabel}
                </a>
              </>
            )}
          </div>
        )}
      </div>
      <div className={cn(commonStyles, "px-[10%] pt-10 lg:px-[20%]")} id={`${info.scrollId}-horarios`}>
        {!info.showSchedules && (
          <div className="flex justify-center text-center">
            <div>Pronto estaremos publicando nuevos horarios</div>
          </div>
        )}
        {info.showSchedules &&
          info.schedules.map((schedule) => (
            <div key={schedule.name} className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between border-b border-gray-200 last:border-b-0 py-2">
              <div className="w-full lg:w-1/2 text-center lg:text-left font-semibold only:w-full flex justify-center items-center">
                {schedule.email ? (
                  <div className="w-full lg:w-11/12">
                    {schedule.name}{' '}
                    <a href={`mailto:${schedule.email}?Subject=Consulta%20de%20horarios-clases%20privadas`}
                      className="underline cursor-pointer text-primary">
                      {schedule.emailLabel}
                    </a>
                  </div>
                ) : (
                  <div className="w-full lg:w-11/12">{schedule.name}</div>
                )}
              </div>
              {schedule.time && (
                <div className="w-full lg:w-1/2 text-center lg:text-left">
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
