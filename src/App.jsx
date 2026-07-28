import SmoothScroll from "./components/common/SmoothScroll";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Services from "./components/sections/Services/Services";
import Gallery from "./components/sections/Gallery/Gallery";
import Coaches from "./components/sections/Coaches/Coaches";
import AppSection from "./components/sections/AppSection/AppSection";
import Reviews from "./components/sections/Reviews/Reviews";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";

function App() {
  return (
    <SmoothScroll>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Coaches />
        <AppSection />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}

export default App;