"use client";
import React from "react";
import Image from "next/image";
import DropDownIcon from "./DropDown";
import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ onToggleSidebar }) {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Notification",
      description:
        "You have a lot of pending transactions, I would suggest you file them as soon as possible and proceed to withdraw your dividend.",
      icon: (
        <SmileOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  };

  return (
    <header className="flex justify-between items-center pb-5 bg-white dark:bg-[#1A1C29] py-4 border-b  border-gray-50 dark:border-gray-900 relative w-full">
      <span className="px-6 text-2xl font-bold">Dashboard</span>
      <div
        className="flex md:hidden absolute right-3"
        onClick={onToggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      {/* <div className="relative flex items-center space-x-12">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-14 invert-0 dark:invert"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3.5C7.95763 3.5 4.68066 6.77697 4.68066 10.8193C4.68066 14.8617 7.95763 18.1386 12 18.1386C16.0423 18.1386 19.3193 14.8617 19.3193 10.8193C19.3193 6.77697 16.0423 3.5 12 3.5ZM3.18066 10.8193C3.18066 5.94854 7.1292 2 12 2C16.8707 2 20.8193 5.94854 20.8193 10.8193C20.8193 13.5062 19.6177 15.9125 17.7225 17.5301L20.2719 20.7877C20.5272 21.1139 20.4697 21.5853 20.1435 21.8405C19.8173 22.0958 19.3459 22.0383 19.0907 21.7121L16.5021 18.4045C15.1842 19.1884 13.6447 19.6386 12 19.6386C7.1292 19.6386 3.18066 15.6901 3.18066 10.8193Z"
            fill="black"
          />
        </svg>

      <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className="flex space-x-2">
          <Image
            width={20}
            height={20}
            src="https://img.icons8.com/material-outlined/24/calendar--v1.png"
            alt="Calendar"
            className="invert-0 dark:invert"
          />
          <span>February 1st 2024</span>
        </div>
        <div className="border rounded-xl p-2 invert-0 dark:invert cursor-pointer">
          {contextHolder}
          <Image
            width={20}
            height={20}
            src="https://img.icons8.com/ios/50/appointment-reminders--v1.png"
            alt="Notification"
            onClick={openNotification}
          />
        </div>
        <DropDownIcon />
      </div> */}
    </header>
  );
}

export default Header;
