"use client";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Dashboard
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Settings
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Customers
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Sign Out
      </a>
    ),
    key: "3",
  },
];

const DropDownIcon = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div className="flex border p-2 rounded-xl space-x-2 invert-0 dark:invert">
          <div class="w-10 h-10 bg-[#f5f5f5] dark:bg-black rounded-full"></div>
          <div className="flex flex-col items-end invert-0 dark:invert">
            <p className="text-sm">Jonathan akamadu</p>
            <span className="text-xs">daddyyo1@gmail.com</span>
          </div>
          <DownOutlined className="invert-0 dark:invert cursor-pointer" />
        </div>
      </Space>
    </a>
  </Dropdown>
);
export default DropDownIcon;
