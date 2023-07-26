"use client";
import Header from "@/components/Header";
import {
  Envelope,
  FiletypePdf,
  FiletypeXls,
  PlusCircle,
  Search,
  Sliders2,
  SortDown,
} from "react-bootstrap-icons";
import { Dropdown, InputGroup, Form, Button, Table } from "react-bootstrap";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

import { useState } from "react";
import { NewLoad } from "@/components/new-load-section";

const tableData = {
  tableHeaders: [
    "Load",
    "Date",
    "Driver",
    "Broker",
    "PO#",
    "Pickup",
    "Delivery",
    "Rate",
    "Completed",
    "Status",
    "Billing",
    "Notes",
    "Attachments",
    "Actions",
    "-",
  ],
  tableRowData: [
    [
      "1001",
      "06/14/23",
      "Max payne [drv]",
      "002063566 ONTARIO",
      "-",
      "Joliet, IL",
      "Cameron, IL",
      "$500.00",
      "06/25/23",
      "Delivered - badge",
      "Invoiced",
      "Lumper: $50.00 :: Detention: $50.00",
      "[file-icon]",
      "Lumper",
      "[options]",
    ],
  ],
};
export default function Customers() {
  const custFilters = {
    pageName: "Customers",
    filterItems: ["All", "New"],
  };

  const [NewPopUpOpen, setNewPopUpOpen] = useState(false);
  const [sidebarStatus, setSidebarStatus] = useState(true);
  return (
    <div className="main-section">
      <Header
        pageName="Customer"
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
        <Sidebar filters={custFilters} isOpen={sidebarStatus} />

        <div className="aria-content">
          <NewLoad
            isOpen={NewPopUpOpen}
            onClose={() => setNewPopUpOpen(!NewPopUpOpen)}
          />
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
