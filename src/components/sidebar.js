import React from "react";

const Sidebar = () => {
  return (
    <div className="h-auto bg-white lg:flex hidden w-1/4 flex-col rounded-lg">
      <div className="px-2 py-6 flex items-center border-b border-gray-100 mb-2">
        <div className="w-[40px] h-[40px] rounded-full bg-green-300"></div>
        <div className="flex flex-col ml-2">
          <span className="text-[#DCFCE8] text-xs">My Profile</span>
          <span className="font-medium text-lg">Paul Omotayo</span>
        </div>
      </div>
      <ul className="w-full">
        <li>
          <a href="#" className="flex  items-center w-full p-2 text-[16px] inline-block">
            <div className="w-[40px] h-[40px] rounded-full bg-green-300 mr-2"></div>
            Home
          </a>
        </li>
        <li className="w-full">
          <a
            href="#"
            className="flex items-center bg-[#DCFCE8] w-full py-4 px-2 text-md inline-block"
          >
            <div className="w-[40px] h-[40px] rounded-full bg-green-300 mr-2"></div>
            Protection Plans
          </a>
        </li>
        <li>
          <a href="#" className="flex  items-center w-full p-2 text-[16px] inline-block">
            <div className="w-[40px] h-[40px] rounded-full bg-green-300 mr-2"></div>
            Linked Device
          </a>
        </li>
        <li>
          <a href="#" className="flex  items-center w-full p-2 text-[16px] inline-block">
            <div className="w-[40px] h-[40px] rounded-full bg-green-300 mr-2"></div>
            Repairs
          </a>
        </li>
        <li>
          <a href="#" className="flex  items-center w-full p-2 text-[16px] inline-block">
            <div className="w-[40px] h-[40px] rounded-full bg-green-300 mr-2"></div>
            Claims
          </a>
        </li>
      </ul>
      <button className="p-4 rounded-lg  bg-[#49A05C] text-white w-7/12 mx-10 mt-8 mb-16" >Logout</button>
    </div>
  );
};

export default Sidebar;
