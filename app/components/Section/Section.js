import cn from "classnames";
import parseHTML from 'html-react-parser';
import { SectionImage } from "@/components"; 

const renderTime = (time) => {
  if (typeof time === "string") {
    return <div>{time}</div>;
  }
  return time.map((t, index) => <div key={index}>{t}</div>);
};

const renderData = (details, className) => {
  if (typeof details === "string") {
    return (
      <div className={cn(className,
        "prose-a:underline prose-a:cursor-pointer prose-a:text-color5"
      )}>
        {parseHTML(details)}
      </div>
    );
  }
  return details();
};

const Section = ({ info, isClassSection }) => {

  const backgroundSection = isClassSection ? "bg-[#94823e2b]" : "bg-[#c3d7ee4d]";
  const commonStyles = "px-[10%] pt-7 leading-8 text-justify";

  return (
    <article className="w-full bg-color3 pb-8 lg:pb-12 lg:last:pb-24" id={info.scrollId}>
      <SectionImage isClassSection={isClassSection} info={{ name: info.name, extraName: info.extraName, image: info.image }} backgroundSection={backgroundSection} />
      <div className={cn(commonStyles, backgroundSection)}>
        {renderData(info.details, cn("text-color5 indent-7 columns-1 lg:columns-2 gap-12 pb-12 text-pretty", {
          "lg:columns-1": info.noColunmsText,
        }))}
      </div>
      <div className={cn(commonStyles, "px-[10%] pt-10 lg:px-[20%]")} id={`${info.scrollId}-horarios`}>
        {!info.showSchedules && (
          <div className="flex justify-center text-center">
            <div>Pronto estaremos publicando nuevos horarios</div>
          </div>
        )}
        {info.showSchedules &&
          info.schedules.map((schedule) => (
            <div key={schedule.name} className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between border-b border-b-gray-200 last:border-b-0 py-2">
              <div className="w-full lg:w-1/2 text-center lg:text-lef font-semibold only:w-full flex justify-center align-middle">
                {renderData(schedule.name, "w-full lg:w-11/12")}
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
