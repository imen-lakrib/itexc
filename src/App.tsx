import "./App.css";
import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import Faq from "./components/faq/Faq";
import About from "./components/about/About";
import Characteristics from "./components/characteristics/Characteristics";
import AppDownload from "./components/app/AppDownload";
import Doctors from "./components/doctors/Doctors";
import Services from "./components/services/Services";
import Search from "./components/search/Search";
import Testimonials from "./components/testimonials/Testimonials";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { testimonialsData } from "./data/Data";
function App() {
  

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Characteristics />
      <AppDownload />
      <Doctors />
      <Services />
      <Search />
      <Testimonials testimonials={testimonialsData} />
      <Faq />
      <Banner/>
      <Contact/>

      <Footer/>

    </>
  );
}

export default App;
