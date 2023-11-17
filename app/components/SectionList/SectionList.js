import { Section } from "@/components";
import style from "./sectionList.module.scss";

const SectionList = ({
  scrollId,
  dataList,
  isClassSection
}) => {
  const data = dataList;

  return (
    <section id={scrollId} className={style.sectionList}>
      {data.map((item, index) => (
        <Section
          info={item}
          key={index}
          isClassSection={isClassSection}
        />
      ))}
    </section>
  );
};

export default SectionList;
