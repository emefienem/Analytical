"use client";
import React, { useState } from "react";
import DashboardFeed from "@/components/DashboardFeed";
import Header from "@/components/Header";
import Orders from "@/components/Orders";
import Sidebar from "@/components/SideBar";
import Stats from "@/components/Stats";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenu(menuItem);
  };
  return (
    <div className="flex">
      <div className="overflow-hidden">
        <Sidebar
          onMenuItemClick={handleMenuItemClick}
          isOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>
      <main className="flex-1 overflow-y-auto overflow-x-hidden max-h-screen">
        {activeMenu === "Dashboard" && (
          <>
            <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <DashboardFeed />
            <Stats />
            <Orders />
          </>
        )}
        {activeMenu !== "Dashboard" && (
          <div>
            <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
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
