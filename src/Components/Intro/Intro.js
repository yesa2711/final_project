import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Intro = () => {
  const [intro, setIntro] = useState({})
  useEffect(() => {
    const db = getDatabase();
    const introRef = ref(db, "intro");
    onValue(introRef, (snapshot) => {
      const data = snapshot.val();
      setIntro(data);
    });
  }, []);
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div id="intro" className="Intro" data-parallax="scroll">
        {/* Navbar */}
        <nav
          id="tm-nav"
          className="sticky top-0 bg-black bg-opacity-80 z-50 shadow-md"
        >
          <div className="tm-container mx-auto px-2 md:py-6 text-right">
            <button className="md:hidden py-2 px-2" id="menu-toggle">
              <i className="fas fa-2x fa-bars tm-text-gold"></i>
            </button>
            <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
              <li className="inline-block mb-4 mx-4">
                <button
                  onClick={() => scrollToSection("#intro")}
                  className="tm-text-gold py-1 md:py-3 px-4"
                >
                  Intro
                </button>
              </li>
              <li className="inline-block mb-4 mx-4">
                <button
                  onClick={() => scrollToSection("#menu")}
                  className="tm-text-gold py-1 md:py-3 px-4"
                >
                  Menu
                </button>
              </li>
              <li className="inline-block mb-4 mx-4">
                <button
                  onClick={() => scrollToSection("#about")}
                  className="tm-text-gold py-1 md:py-3 px-4"
                >
                  About
                </button>
              </li>
              <li className="inline-block mb-4 mx-4">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="tm-text-gold py-1 md:py-3 px-4"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Intro Content */}
        <div className="container mx-auto px-2 tm-intro-width">
          <div className="sm:pb-60 sm:pt-48 py-20">
            <div className="bg-black bg-opacity-70 p-12 mb-5 text-center">
              <h1 className="text-white text-5xl tm-logo-font mb-5">
                {intro.intro1}
              </h1>
              <p className="tm-text-gold tm-text-2xl">
                {intro.intro2}
              </p>
            </div>
            <div className="bg-black bg-opacity-70 p-10 mb-5">
              <p className="text-white leading-8 text-sm font-light">
                {intro.intro3} .{" "}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block">
                <a
                  href="#menu"
                  className="flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold tm-text-2xl tm-text-gold hover:text-gray-200 transition"
                >
                  <i className="fas fa-coffee mr-3"></i>
                  <span>{intro.intro4}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
