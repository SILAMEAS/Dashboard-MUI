import React from "react";
import { MdMenuOpen } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      {" "}
      <div className="bg-blue-600 w-full text-white  px-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-[10vh]">
            <p className="text-3xl">
              <MdMenuOpen />
            </p>
            <p className=" font-bold ml-3">Dashboard</p>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex-col mr-3">
                <p className="text-md">Kim kim</p>
                <p className="text-sm text-slate-400">Logout</p>
              </div>
              <img
                src="https://e5project.netlify.app/project_e5(homepage,comuter,watch)/pic/Kou.jpg"
                alt=""
                className="w-[4rem] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
