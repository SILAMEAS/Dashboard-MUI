import React from "react";
import Card from "./Cards";
import Chat from "./Chat";
import Tables from "./Tables";

const Dashboard = () => {
  return (
    <>
      <>
        <div className="py-2 px-5 grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-3 w-full">
          {" "}
          <Card />
        </div>
        <div className="pb-48 py-2 px-5 grid lg:grid-cols-2 gap-3 w-full ">
          {" "}
          <div className=" w-full overflow-x-auto">
            {" "}
            <Tables />
          </div>
          <div className="w-full flex justify-center ">
            {" "}
            <Chat />
          </div>
        </div>
      </>
    </>
  );
};

export default Dashboard;
