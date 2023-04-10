import React from "react";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Slidebar = () => {
  return (
    <>
      <div className=" text-white bg-slate-200 font-bold  h-full border-r-4 border-white">
        <div className="bg-blue-600 w-full py-4 pl-5 h-[10vh] underline text-3xl ">
          Foxes
        </div>
        <div className="text-black mt-5 ml-5">
          <Link to={"/"}>
            <div className="mb-4 flex  items-center gap-5">
              <AiOutlineHome />
              <div className="">Home</div>
            </div>
          </Link>
          <Link to={"/dashboard"}>
            {" "}
            <div className="mb-4 flex  items-center gap-5">
              <MdOutlineDashboard />
              <div className="">Dashboard</div>
            </div>
          </Link>
          <Link to={"/user"}>
            {" "}
            <div className="mb-4 flex  items-center gap-5">
              <BiUser />
              <div>User</div>
            </div>
          </Link>
          <Link to={"/info"}>
            <div className="mb-4 flex  items-center gap-5">
              <AiOutlineInfoCircle />
              <div>Info</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slidebar;
