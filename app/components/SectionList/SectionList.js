import Section from "@/components/Section/Section";

const SectionList = ({
  scrollId,
  dataList,
  isClassSection
}) => {
  const data = dataList;

  return (
    <section id={scrollId}  className="max-w-5xl mx-auto">
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
