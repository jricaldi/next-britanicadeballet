import SectionList from "@/components/SectionList/SectionList";
import { dataProfesoras } from "@/helpers/database";

const Profesoras = () => (
  <SectionList scrollId="id-profesoras" dataList={dataProfesoras} />
);

export default Profesoras;
