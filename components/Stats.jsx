"use client";
import React, { useState } from "react";
import Image from "next/image";
import GraphsUI from "./Graph";

function Stats() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="pl-4 flex flex-col md:flex-row py-6 space-y-4 md:space-x-4 md:space-y-0">
      <div
        className={`flex flex-col  border-none rounded-[8px] w-[358px] md:w-[570px] h-[200px] bg-white dark:bg-[#1A1C29] hover:scale-105 transition-transform duration-300 ease-in-out ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-3 flex space-x-72 w-full relative">
          <Image
            width={48}
            height={48}
            src="https://img.icons8.com/color/48/shopping-cart--v1.png"
            alt="Shopping"
            className={`border border-gray-500 dark:border-white p-2 rounded-[50%] ${
              isHovered ? "bg-green-50" : "bg-transparent"
            }`}
          />
          <div className="hidden md:flex">
            <GraphsUI />
          </div>
        </div>
        <div className="flex flex-col px-3">
          <span className="text-xl pb-3 text-gray-500">Average Sales</span>
          <h1 className="text-3xl font-[500] pb-3">1567</h1>

          <div className="flex space-x-2">
            <span className="border rounded-xl text-red-500 bg-red-50 w-[63px] px-3">
              23.5%
            </span>

            <span>vs. previous month</span>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col  border-none rounded-[8px] w-[358px] md:w-[570px] h-[200px] bg-white dark:bg-[#1A1C29] hover:scale-105 transition-transform duration-300 ease-in-out ${
          isHover ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="p-3 flex space-x-72 w-full relative">
          <Image
            width={48}
            height={48}
            src="https://img.icons8.com/color/48/shopping-cart--v1.png"
            alt="Shopping"
            className={`border border-gray-500 dark:border-white p-2 rounded-[50%] ${
              isHover ? "bg-green-50" : "bg-transparent"
            }`}
          />
          <div className="hidden md:flex">
            <GraphsUI
              color="#00FF00"
              data={[1, 4, 5, 9, 1, 90, 60, 30, 20, 25, 100]}
            />
          </div>
        </div>
        <div className="flex flex-col px-3">
          <span className="text-xl pb-3 text-gray-500">Total Income</span>
          <h1 className="text-3xl font-[500] pb-3">350.00</h1>

          <div className="flex space-x-2">
            <span className="border rounded-xl text-green-500 bg-green-50 w-[63px] px-3">
              23.5%
            </span>

            <span>vs. previous month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
