import Section from "@/components/Section/Section";
import TargetSection from "../TargetSection/TargetSection";

const SectionList = ({
  scrollId,
  dataList,
  isClassSection
}) => {
  const data = dataList;

  return (
    <TargetSection targetKey={scrollId}>
      <section className="max-w-5xl mx-auto">
        {data.map((item, index) => (
          <Section
            info={item}
            key={index}
            isClassSection={isClassSection}
          />
        ))}
      </section>
    </TargetSection>
  );
};

export default SectionList;
