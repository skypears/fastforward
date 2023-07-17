"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import { useState } from "react";
import { NewLoad } from "@/components/new-load-section";
import { Table } from "react-bootstrap";
import Link from "next/link";
import { SortDown } from "react-bootstrap-icons";
const tableData = {
  tableHeaders: [
    "#",
    "Name",
    "Type",
    "Status",
    "Hire Date",
    "Term Date",
    "Phone",
    "Email",
    "Truck",
    "Trailer",
    "Payable To",
    "Warnings",
    "Driver App",
    "Actions",
    "-",
  ],
  tableRowData: [
    [
      "01",
      "Max payne [drv]",
      "DRV",
      "HIRED",
      "06/10/23",
      "-",
      "-",
      "-",
      "-",
      "-",
      "Max Payne",
      "-",
      "-",
      "[edit]",
      "[options]",
    ],
  ],
};

export default function Drivers() {
  const driversFilters = {
    forPage: "Drivers",
    filterItems: ["All", "New", "Hired", "Terminated", "Closed"],
  };
  const [NewPopUpOpen, setNewPopUpOpen] = useState(false);
  const [sidebarStatus, setSidebarStatus] = useState(true);
  return (
    <div className="main-section">
      <Header
        pageName="Driver"
        period
        nbClick={() => setNewPopUpOpen(!NewPopUpOpen)}
        sidebarToggle={() => setSidebarStatus(!sidebarStatus)}
      ></Header>
      <div className="content d-flex">
        <Sidebar filters={driversFilters} isOpen={sidebarStatus} />

        <div className="aria-content">
          <NewLoad open={NewPopUpOpen} />
          <Table responsive hover className="table-data text-nowrap">
            <thead>
              <tr>
                {tableData.tableHeaders.map((headeritem, index) => (
                  <th key={index}>
                    <span>{headeritem}</span>
                    <Link href="" className="text-dark ps-1">
                      <SortDown />
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.tableRowData?.map((row, index) => (
                <tr key={index}>
                  {row.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
