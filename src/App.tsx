import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
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

function App() {
  const testimonialsData = [
    {
      id: 1,
      img: "/person.png",
      name: "Christopher Nolan",
      comment:
        "Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.",
    },
    {
      id: 2,
      img: "/person.png",
      name: "Jane Smith",
      comment:
        "Vestibulum ultricies justo et nunc rhoncus, sed gravida tortor aliquam.",
    },
    // Add more testimonials as needed
  ];

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
