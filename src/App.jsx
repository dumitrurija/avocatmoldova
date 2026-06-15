import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import AboutMe from "./components/sections/AboutMe";
import WhyChooseMe from "./components/sections/WhyChooseMe";
import Testimonials from "./components/sections/Testimonials";
import GoogleProfile from "./components/sections/GoogleProfile";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import StickyContact from "./components/layout/StickyContact";

const App = () => {
  return (
    <div className="pb-24 sm:pb-0">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <WhyChooseMe />
      <Testimonials />
      <GoogleProfile />
      <FAQ />
      <Contact />
      <Footer />
      <StickyContact />
    </div>
  );
};

export default App;
