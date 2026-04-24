import SectionList from "@/components/SectionList/SectionList";
import { dataClases } from "@/helpers/database";
import ClasesEnLineaDetails from "./ClasesEnLineaDetails";

const enabledClases = dataClases
  .filter(clase => clase.showClase)
  .map(clase => {
    if (clase.hasCustomDetails) {
      return { ...clase, CustomDetails: ClasesEnLineaDetails };
    }
    return clase;
  });

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
