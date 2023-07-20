"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { NewLoad } from "@/components/new-load-section";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { SortDown } from "react-bootstrap-icons";
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
  return (
    <div className="main-section">
      <Header
        pageName="Load"
        period
        nbToggle={() => {
          setNewPopUpOpen(!NewPopUpOpen);
        }}
        sidebarToggle={() => setSidebarStatus(!sidebarStatus)}
        searchToggle={() => {
          setSearchOpen(!searchOpen);
        }}
      ></Header>
      <div className="content d-flex">
        <Sidebar filters={loadsFilters} isOpen={sidebarStatus} />

        <div className="aria-content">
          <NewLoad
            isOpen={NewPopUpOpen}
            onClose={() => setNewPopUpOpen(false)}
          />
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
        </div>
      </div>
    </div>
  );
}
