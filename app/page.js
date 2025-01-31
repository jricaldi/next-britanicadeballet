import Profesoras from '@/containers/Profesoras/Profesoras';
import Clases from '@/containers/Clases/Clases';
import Contacto from '@/containers/Contacto/Contacto';
import About from '@/containers/About/About';
import Home from '@/containers/Home/Home';
import Navigation from '@/containers/Navigation/Navigation';

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
