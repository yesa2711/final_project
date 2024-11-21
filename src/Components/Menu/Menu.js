import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Menu = () => {
  const [menu, setMenu] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const menuRef = ref(db, "menu");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      setMenu(data);
    });
  }, []);
  return (
    <div>
      <div id="menu" className="Menu" data-parallax="scroll">
        <div className="container mx-auto tm-container py-24 sm:py-48">
          <div className="text-center mb-16">
            <h2 className="bg-white tm-text-brown py-6 px-12 text-4xl font-medium inline-block rounded-md">
              {menu.menu1}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <div className="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
              <div className="flex items-start mb-6 tm-menu-item">
                <img
                  src={`data:image/jpg;base64,${menu.image1}`}
                  alt=""
                  className="rounded-md"
                />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    {menu.menu2}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    {menu.menu3}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu4}
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-6 tm-menu-item">
                <img
                  src={`data:image/jpg;base64,${menu.image2}`}
                  alt=""
                  className="rounded-md"
                />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    {menu.menu5}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    {menu.menu6}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu7}
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-6 tm-menu-item">
                <img
                  src={`data:image/jpg;base64,${menu.image3}`}
                  alt=""
                  className="rounded-md"
                />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    {menu.menu8}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    {menu.menu9}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu10}
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-6 tm-menu-item">
                <img
                  src={`data:image/jpg;base64,${menu.image4}`}
                  alt=""
                  className="rounded-md"
                />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl tm-text-yellow mb-1">
                    {menu.menu11}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu12}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu13}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    {menu.menu14}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    {menu.menu15}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu16}
                  </div>
                </div>
                <img
                  src={`data:image/jpg;base64,${menu.image5}`}
                  alt=""
                  className="rounded-md"
                />
              </div>
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    {menu.menu17}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    {menu.menu18}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu19}
                  </div>
                </div>
                <img
                  src={`data:image/jpg;base64,${menu.image6}`}
                  alt=""
                  className="rounded-md"
                />
              </div>
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    {menu.menu20}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    {menu.menu21}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu22}
                  </div>
                </div>
                <img
                  src={`data:image/jpg;base64,${menu.image7}`}
                  alt=""
                  className="rounded-md"
                />
              </div>
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    {menu.menu23}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu24}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    {menu.menu25}
                  </div>
                </div>
                <img
                  src={`data:image/jpg;base64,${menu.image8}`}
                  alt=""
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
