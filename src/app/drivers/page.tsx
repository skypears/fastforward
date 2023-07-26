"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import { useState } from "react";
import { NewLoad } from "@/components/new-load-section";
import { Dropdown, Table } from "react-bootstrap";
import Link from "next/link";
import {
  Envelope,
  FiletypePdf,
  FiletypeXls,
  SortDown,
} from "react-bootstrap-icons";
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
    pageName: "Drivers",
    filterItems: ["All", "New", "Hired", "Terminated", "Closed"],
  };
  const [NewPopUpOpen, setNewPopUpOpen] = useState(false);
  const [sidebarStatus, setSidebarStatus] = useState(true);
  return (
    <div className="main-section">
      <Header
        pageName="Drivers"
        nbToggle={() => setNewPopUpOpen(!NewPopUpOpen)}
        sidebarToggle={() => setSidebarStatus(!sidebarStatus)}
      >
        <div className="d-flex align-items-center gap-2">
          <span className="x-small fw-bold">Period</span>
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              size="sm"
              className="border-0 p-0 px-2 d-flex column-gap-2 align-items-center"
            >
              All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">This Year</Dropdown.Item>
              <Dropdown.Item href="">This Month</Dropdown.Item>
              <Dropdown.Item href="">This Week</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex align-items-center gap-1">
          <span>Export</span>
          <Link href={"#!"}>
            <FiletypePdf size={16} />
          </Link>
          <Link href={"#!"}>
            <FiletypeXls size={16} />
          </Link>
          <Link href={"#!"}>
            <Envelope size={16} />
          </Link>
        </div>
      </Header>
      <div className="content d-flex">
        <Sidebar filters={driversFilters} isOpen={sidebarStatus} />

        <div className="aria-content">
          <NewLoad isOpen={NewPopUpOpen} />
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
