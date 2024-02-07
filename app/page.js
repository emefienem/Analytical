"use client";
import React, { useState } from "react";
import DashboardFeed from "@/components/DashboardFeed";
import Header from "@/components/Header";
import Orders from "@/components/Orders";
import Sidebar from "@/components/SideBar";
import Stats from "@/components/Stats";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const handleMenuItemClick = (menuItem) => {
    setActiveMenu(menuItem);
  };
  return (
    <div className="flex">
      <div className="overflow-hidden">
        <Sidebar onMenuItemClick={handleMenuItemClick} />
      </div>
      <main className="flex-1 overflow-y-auto max-h-screen">
        {activeMenu === "Dashboard" && (
          <>
            <Header />
            <DashboardFeed />
            <Stats />
            <Orders />
          </>
        )}
        {activeMenu !== "Dashboard" && (
          <div>
            <Header />
            <p className="text-5xl text-center">
              Nothing to show for
              <span className="text-green-500"> {activeMenu}</span>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
