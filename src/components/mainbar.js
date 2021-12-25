import React from "react";

const Mainbar = () => {
  return (
    <div className="h-auto bg-white lg:w-[74%] w-[95%] rounded-lg">
      <div className="w-full text-left p-4 border-b border-[#49A05C]">
        <h1 className="font-medium text-lg">Protection Plans</h1>
      </div>
      <div className="w-auto lg:m-4 flex flex-col justify-between p-2">
        <ul className="flex">
          <li className="mr-2 py-4 border-b-2 border-[#49A05C] text-[#49A05C] hover:border-b-2 hover:border-[#49A05C] cursor-pointer hover:text-[#49A05C]">
            <a href="#" className="text-sm">
              SCREEN PROTECTION (3)
            </a>
          </li>
          <li className="mr-2 py-4 hover:border-b-2 hover:border-[#49A05C] cursor-pointer hover:text-[#49A05C]">
            <a href="#" className="text-sm">
              SERVICE CONTRACT(0)
            </a>
          </li>
        </ul>
        <div className="w-full h-auto border-[#49A05C] rounded-lg border my-4 mb-4 grid justify-center items-center lg:grid-cols-5 grid-cols-4 lg:p-6 p-2 gap-4">
          <div className="lg:col-span-1 col-span-2 flex flex-col-reverse">
            <span className="text-[#49A05C] text-sm">14-10-2021</span>
            <span className="font-regular text-sm">Date Purchased</span>
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col-reverse">
            <span className="text-[#49A05C] text-sm">12,000</span>
            <span className="font-regular text-sm">Amount Paid</span>
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col-reverse">
            <span className="text-[#49A05C] text-sm">6</span>
            <span className="font-regular text-sm">Phones Covered</span>
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col-reverse">
            <span className="text-[#49A05C] text-sm">6</span>
            <span className="font-regular text-sm">Laptops Covered</span>
          </div>
          <button className="lg:col-span-1 col-span-4 lg:p-4 p-3 rounded-lg my-4 bg-[#49A05C] text-white">
            View Details
          </button>
        </div>
        <div className="flex justify-end items-center mt-4 p-2">
          <span className="m-2 cursor-pointer text-md">&lt;</span>
          <span className="m-2 cursor-pointer text-md bg-[#DCFCE8] w-auto h-auto py-2 px-4 rounded-lg">1</span>
          <span className="m-2 cursor-pointer text-md">2</span>
          <span className="m-2 cursor-pointer text-md">3</span>
          <span className="m-2 cursor-pointer text-md">...</span>
          <span className="m-2 cursor-pointer text-md">10</span>
          <span className="m-2 cursor-pointer text-md">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
