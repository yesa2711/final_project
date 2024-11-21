import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./Components/Intro/Intro.js";
import Menu from "./Components/Menu/Menu.js";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Intro */}
      <div data-aos="fade-up">
        <Intro />
      </div>

      {/* Menu */}
      <div data-aos="fade-right">
        <Menu />
      </div>

      {/* About */}
      <div data-aos="fade-left">
        <About />
      </div>

      {/* Contact */}
      <div data-aos="fade-up">
        <Contact />
      </div>
    </div>
  );
};

export default App;
