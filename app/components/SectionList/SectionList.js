import { Section } from "@/components";
import style from "./sectionList.module.scss";

const SectionList = ({
  scrollId,
  dataList,
  isClassSection,
  title,
  openMessageDialog,
}) => {
  const data = dataList;

  return (
    <section id={scrollId} className={style.sectionList}>
      {title && <h2 className={style.sectionList__title}>{title}</h2>}
      {data.map((item, index) => (
        <Section
          info={item}
          key={index}
          isClassSection={isClassSection}
          openMessageDialog={openMessageDialog}
        />
      ))}
    </section>
  );
};

export default SectionList;
