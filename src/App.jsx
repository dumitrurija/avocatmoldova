import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import AboutMe from "./components/sections/AboutMe";
import WhyChooseMe from "./components/sections/WhyChooseMe";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <WhyChooseMe />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
