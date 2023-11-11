import {
  Profesoras,
  Clases,
  Contacto,
  About,
  Home,
  Navigation
} from "@/containers";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Clases />
      <Profesoras />
      <Contacto />
    </div>
  );
}

export default Layout;