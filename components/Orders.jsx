"use client";
import React, { useState } from "react";
import { Table, Modal } from "antd";
import Image from "next/image";

const data = [
  {
    key: "1",
    name: "Marcus Brown",
    amount: "$80,000",
    date: "Nov 15, 2023",
    status: "Paid",
  },
  {
    key: "2",
    name: "Jaydon Valerie",
    amount: "$150,000",
    date: "Nov 15, 2023",
    status: "Refund",
  },
  {
    key: "3",
    name: "Corey Sheila",
    amount: "$87,000",
    date: "Nov 14, 2023",
    status: "Paid",
  },
  {
    key: "4",
    name: "Cooper Patrick",
    amount: "$100,000",
    date: "Nov 14, 2023",
    status: "Refund",
  },
  {
    key: "5",
    name: "Phillip Luber",
    amount: "$78,000",
    date: "Nov 14, 2023",
    status: "Paid",
  },
];

const responsiveTableProps = {
  scroll: { x: "max-content" },
  pagination: {
    showSizeChanger: false,
  },
};

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "age",
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "1",
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (status) => {
        let color = status === "Paid" ? "green" : "red";
        return <span style={{ color: color }}>{status}</span>;
      },
      filters: [
        {
          text: "Paid",
          value: "Paid",
        },
        {
          text: "Refund",
          value: "Refund",
        },
      ],
      filterSearch: true,
      onFilter: (value, record) => record.status.startsWith(value),
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: () => <a onClick={showModal}>View</a>,
    },
  ];

  const invoiceDetails = {
    date: "February 6, 2024",
    invoiceNumber: "INV12345",
    billTo: {
      name: "Justin Bergson",
      email: "Justin@gmail.com",
    },
    items: [
      { description: "Product1", quantity: 2, price: 50.0, total: 100.0 },
      { description: "Product2", quantity: 1, price: 50.0, total: 100.0 },
    ],
    subtotal: 200.0,
    tax: 25.5,
    total: 225.5,
  };

  return (
    <div>
      <div className="max-w-full overflow-x-auto pl-3 invert-0 dark:invert">
        <Table columns={columns} dataSource={data} {...responsiveTableProps} />
      </div>
      <>
        <Modal
          title="Invoice"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={500}
          className="invert-0 dark:invert"
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm">Date: {invoiceDetails.date}</p>
                <p className="text-sm">
                  Invoice #: {invoiceDetails.invoiceNumber}
                </p>
              </div>
              <div className="flex space-x-1">
                <Image
                  src="/Vector.png"
                  width={30}
                  height={30}
                  className="invert-0 dark:invert"
                />
                <div className="text-lg font-bold">ANALYTICAL CO.</div>
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <p className="font-semibold text-3xl">Bill To:</p>
              <p>{invoiceDetails.billTo.name}</p>
              <p>{invoiceDetails.billTo.email}</p>
            </div>
            <hr className="mb-4" />
            <div>
              <div className="flex space-x-20 font-semibold mb-2">
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Total</span>
              </div>
              {invoiceDetails.items.map((item, index) => (
                <div key={index} className="flex space-x-20 mb-2">
                  <span>{item.description}</span>
                  <span className="pl-8">{item.quantity}</span>
                  <span className="pl-8">${item.price.toFixed(2)}</span>
                  <span className="pr-5">${item.total.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="ml-auto mt-9 space-y-2">
              <p className="text-xl">
                Subtotal: ${invoiceDetails.subtotal.toFixed(2)}
              </p>
              <p className="mt-9">Tax: ${invoiceDetails.tax.toFixed(2)}</p>
            </div>
            <p className="mt-10 text-center text-3xl font-semibold">
              Total: ${invoiceDetails.total.toFixed(2)}
            </p>
          </div>
        </Modal>
      </>
    </div>
  );
};
export default Orders;
