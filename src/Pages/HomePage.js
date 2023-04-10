import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";
import User from "../components/User";
function Windowx() {
  const innerWidth = window.innerWidth;
  return innerWidth;
}

const HomePage = () => {
  const [width, setWidth] = useState(Windowx());
  const [OpenSideBar, setOpenSideBar] = useState(true);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(Windowx());
    }
    window.addEventListener("resize", handleWindowResize);
    console.log(width);
    if (width < 1030) {
      setOpenSideBar(false);
    } else {
      setOpenSideBar(true);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [width]);

  return (
    <div className="w-full h-screen  bg-white flex justify-center overflow-y-hidden ">
      <div className="flex  w-[98%] h-full ">
        <div
          className={`w-[15%] h-screen transition duration-300 ${
            !OpenSideBar && "-translate-x-64"
          } transition ease-in-out duration-500 fixed lg:static`}
        >
          <Slidebar />
        </div>
        <div className="w-[100%] lg:w-[85%] flex-col ">
          <div className="flex items-center">
            {" "}
            <Navbar />
          </div>

          <div className="h-screen bg-slate-200 overflow-y-auto">
            {" "}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
