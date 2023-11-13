import {
  Profesoras,
  Clases,
  Contacto,
  About,
  Home,
  Navigation
} from "@/containers";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Clases />
      <Profesoras />
      <Contacto />
    </>
  );
}

export default LandingPage;
