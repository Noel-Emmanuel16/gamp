import React from "react";
import Mainbar from "../components/mainbar";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";

const Protection = () => {
  return (
    <div className="max-w-full min-h-screen bg-[#F5FAFF]">
      <Nav />
      <div className="container lg:mt-16 mt-8 mx-auto flex lg:justify-between justify-center">
          <Sidebar />
          <Mainbar />
      </div>
    </div>
  );
};

export default Protection;
