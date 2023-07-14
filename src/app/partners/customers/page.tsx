"use client";
import Header from "@/components/Header";
import {
  FiletypePdf,
  PlusCircle,
  Search,
  Sliders2,
} from "react-bootstrap-icons";
import { Dropdown, InputGroup, Form, Button } from "react-bootstrap";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

import Content from "@/components/Content";
import { useState } from "react";

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
  const loadsFilters = {
    forPage: "Customers",
    filterItems: ["All", "New"],
  };
  const [NewPopUpOpen, setNewPopUpOpen] = useState(false);
  return (
    <div className="main-section">
      <Header>
        <div className="section-info d-flex align-items-center ps-4 gap-3">
          <h4 className="text-start mb-0 me-4 fw-bold">Customers</h4>
          <div className="d-flex align-items-center gap-1">
            <span>Export</span>
            <Link href={"#!"}>
              <FiletypePdf size={16} />
            </Link>
            <Link href={"#!"}>
              <FiletypePdf size={16} />
            </Link>
            <Link href={"#!"}>
              <FiletypePdf size={16} />
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-end ms-auto align-items-center column-gap-2">
          <InputGroup className="shadow-sm border-secondary">
            <InputGroup.Text className="bg-white">
              <Search size={16} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              className="border-start-0 border-end-0"
            />
            <InputGroup.Text className="bg-white">
              <Link href={"#!"}>
                <Sliders2 size={16} />
              </Link>
            </InputGroup.Text>
            {/* <Button variant="secondary" className=" ">
                <Sliders2 size={16} />
              </Button> */}
          </InputGroup>
          <Button
            variant="outline-primary"
            size="sm"
            className="text-nowrap d-flex align-items-center gap-1"
            onClick={() => setNewPopUpOpen(!NewPopUpOpen)}
          >
            <span>New Customer</span>
            <PlusCircle size={16} />
          </Button>
        </div>
      </Header>
      <div className="content d-flex">
        <Sidebar filters={loadsFilters} />
        <Content
          popUpOpen={NewPopUpOpen}
          headers={tableData.tableHeaders}
          data={tableData.tableRowData}
        />
      </div>
    </div>
  );
}
