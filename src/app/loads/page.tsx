"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { NewLoad } from "@/components/new-load-section";
import { useEffect, useState } from "react";
import { Dropdown, Table } from "react-bootstrap";
import {
  Envelope,
  FiletypePdf,
  FiletypeXls,
  SortDown,
} from "react-bootstrap-icons";
import Link from "next/link";
import { LoadSearch } from "@/components/load-search-filters";
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
export default function Loads() {
  const loadsFilters = {
    pageName: "Loads",
    filterItems: [
      "All",
      "New",
      "Canceled",
      "TONU",
      "Dispatched",
      "En-Route",
      "Picked-Up",
      "Delivered",
      "Closed",
    ],
  };
  const [NewPopUpOpen, setNewPopUpOpen] = useState(false);
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => {
    document.title = "View All Loads";
  }, []);
  useEffect(() => {
    setSidebarStatus(!NewPopUpOpen);
  }, [NewPopUpOpen]);
  return (
    <div className="main-section">
      <Header
        pageName="Loads"
        nbToggle={() => {
          setNewPopUpOpen(!NewPopUpOpen);
        }}
        sidebarToggle={() => setSidebarStatus(!sidebarStatus)}
        searchToggle={() => {
          setSearchOpen(!searchOpen);
        }}
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
        <div className="d-flex align-items-center gap-2">
          <span className="x-small fw-bold">Export</span>
          <Link href={"#!"}>
            <FiletypePdf size={24} className="text-danger" />
          </Link>
          <Link href={"#!"}>
            <FiletypeXls size={24} className="text-success" />
          </Link>
          <Link href={"#!"}>
            <Envelope size={24} className="text-primary" />
          </Link>
        </div>
      </Header>
      <div className="content d-flex">
        <Sidebar filters={loadsFilters} isOpen={sidebarStatus} />
        <div className="aria-content">
          {!NewPopUpOpen ? (
            <>
              <LoadSearch
                open={searchOpen}
                toggle={() => setSearchOpen(!searchOpen)}
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
            </>
          ) : (
            <NewLoad
              isOpen={NewPopUpOpen}
              onClose={() => setNewPopUpOpen(false)}
            />
            // change sidebar status to false when new load popup is open
            // sidebarToggle={() => setSidebarStatus(false)}
          )}
        </div>
      </div>
    </div>
  );
}
