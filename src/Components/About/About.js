import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const introRef = ref(db, "about");
    onValue(introRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);

  return (
    <div>
      <div id="about" className="About" data-parallax="scroll">
        <div className="container mx-auto tm-container py-24 sm:py-48">
          <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
            <div className="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
              <h2 className="mb-6 tm-text-green text-4xl font-medium">
                {about.about2}
              </h2>
              <p className="mb-6 text-base leading-8">{about.about1}</p>
            </div>
            <a
              href="#contact"
              className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md"
            >
              <i className="far fa-comments mr-4"></i>
              {about.about3}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
