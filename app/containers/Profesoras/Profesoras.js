import {SectionList} from "@/components";
import { dataProfesoras } from "@/helpers/database";

const Profesoras = () => (
  <SectionList scrollId="id-profesoras" dataList={dataProfesoras} />
);

export default Profesoras;
