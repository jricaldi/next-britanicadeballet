import { SectionList } from "@/components";
import { dataClases } from "@/helpers/database";

const enabledClases = dataClases.filter(clase => clase.showClase)

const Clases = () => {
  return (
    <SectionList
      scrollId="id-clases"
      dataList={enabledClases}
      isClassSection
    />
  );
}

export default Clases;
