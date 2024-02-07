"use client";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "next-themes";
import Image from "next/image";
import GraphsUI from "./Graph";

const ChartComponent = () => {
  const { theme } = useTheme();
  const [currentView, setCurrentView] = useState("monthly");
  const [isHovered, setIsHovered] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const monthlyData = {
    categories: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    seriesData: [
      6000, 17000, 2800, 28000, 9000, 45000, 9000, 19000, 33000, 4000, 30000,
      26000,
    ],
  };

  const weeklyData = {
    categories: ["Mon", "Tue", "Wed", "Thur", "Fri"],
    seriesData: [6000, 17000, 2800, 28000, 9000],
  };

  const yearlyData = {
    categories: [
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
      "2026",
      "2027",
      "2028",
    ],
    seriesData: [6000, 17000, 2800, 28000, 9000, 450000, 9000, 190000],
  };
  const initialOptions = {
    chart: {
      height: 50,
      width: "30%",
      type: "bar",
      background: theme === "dark" ? "#1A1C29" : "white",
      foreColor: "#333",
    },
    xaxis: {
      labels: {
        style: {
          colors: [],
        },
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        colors: ["#F00", "#0F0", "#00F"],
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 20,
        borderRadiusApplication: "end",
      },
    },
    fill: {
      colors: ["rgb(0, 143, 251)"],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Sales Trend",
      style: {
        color: "gray",
      },
    },
  };
  const [options, setOptions] = useState(initialOptions);
  const [series, setSeries] = useState([
    {
      name: "Sales",
      data: [],
    },
  ]);

  useEffect(() => {
    const newOptions = {
      ...options,
      tooltip: {
        theme: theme === "dark" ? "dark" : "light",
        style: {
          fontSize: "12px",
          fontFamily: undefined,
          colors: theme === "dark" ? ["#F00", "#0F0", "#00F"] : undefined,
        },
      },
    };
    setOptions(newOptions);
  }, [theme]);

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      chart: {
        ...prevOptions.chart,
        background: theme === "dark" ? "#1A1C29" : "white",
      },
      xaxis: {
        ...prevOptions.xaxis,
        labels: {
          ...prevOptions.xaxis.labels,
          style: {
            colors: theme === "dark" ? "#ffffff" : "#000000",
          },
        },
      },
    }));
  }, [theme]);

  useEffect(() => {
    switch (currentView) {
      case "monthly":
        setOptions((prevOptions) => ({
          ...prevOptions,
          xaxis: { ...prevOptions.xaxis, categories: monthlyData.categories },
        }));
        setSeries([{ name: "Sales", data: monthlyData.seriesData }]);
        break;
      case "weekly":
        setOptions((prevOptions) => ({
          ...prevOptions,
          xaxis: { ...prevOptions.xaxis, categories: weeklyData.categories },
        }));
        setSeries([{ name: "Sales", data: weeklyData.seriesData }]);
        break;
      case "yearly":
        setOptions((prevOptions) => ({
          ...prevOptions,
          xaxis: { ...prevOptions.xaxis, categories: yearlyData.categories },
        }));
        setSeries([{ name: "Sales", data: yearlyData.seriesData }]);
        break;
      default:
    }
  }, [currentView]);

  return (
    <div className="p-4 pb-0 md:pb-4 relative flex flex-col md:flex-row">
      <div className="absolute mb-10 right-[500px] z-10">
        <label htmlFor="chartViewSelect">Sort by: </label>
        <select
          id="chartViewSelect"
          value={currentView}
          onChange={(e) => setCurrentView(e.target.value)}
          className="p-1 rounded-[5px] border border-[#ccc] bg-white cursor-pointer outline-none text-black font-bold"
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="w-[355px] md:h-[410px] md:w-[700px]">
        <ReactApexChart options={options} series={series} type="bar" />
      </div>

      <div className="pl-0 md:pl-4 flex flex-col space-y-4">
        <div
          className={`flex flex-col  border-none rounded-[8px] w-[355px] md:w-[440px] h-[200px] bg-white dark:bg-[#1A1C29] hover:scale-105 transition-transform duration-300 ease-in-out ${
            isHovered ? "hovered" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="p-3 flex space-x-44 w-full relative">
            <Image
              width={48}
              height={48}
              src="https://img.icons8.com/color/48/shopping-cart--v1.png"
              alt="Shopping"
              className={`border border-gray-500 dark:border-white p-2 rounded-[50%] ${
                isHovered ? "bg-green-50" : "bg-transparent"
              }`}
            />
            <GraphsUI
              color="#00FF00"
              data={[1, 4, 5, 9, 1, 90, 60, 30, 20, 25, 100]}
            />
          </div>
          <div className="flex flex-col px-3">
            <span className="text-xl pb-3 text-gray-500">Total Order</span>
            <h1 className="text-3xl font-[500] pb-3">350</h1>

            <div className="flex space-x-2">
              <span className="border rounded-xl text-green-500 bg-green-50 w-[63px] px-3">
                23.5%
              </span>

              <span>vs. previous month</span>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col  border-none rounded-[8px] w-[355px] md:w-[440px] h-[200px] bg-white dark:bg-[#1A1C29] hover:scale-105 transition-transform duration-300 ease-in-out ${
            isHover ? "hovered" : ""
          }`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="p-3 space-x-44 w-full relative">
            <Image
              width={48}
              height={48}
              src="https://img.icons8.com/color/48/shopping-cart--v1.png"
              alt="Shopping"
              className={`border border-gray-500 dark:border-white p-2 rounded-[50%] ${
                isHover ? "bg-green-50" : "bg-transparent"
              }`}
            />

            <GraphsUI />
          </div>
          <div className="flex flex-col px-3">
            <span className="text-xl pb-3 text-gray-500">Total Refund</span>
            <h1 className="text-3xl font-[500] pb-3">270</h1>

            <div className="flex space-x-2">
              <span className="border rounded-xl text-red-500 bg-red-50 w-[63px] px-3">
                23.5%
              </span>

              <span>vs. previous month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
