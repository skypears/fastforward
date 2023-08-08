"use client";
import { useState, useEffect } from "react";
import { Dropdown, Table } from "react-bootstrap";
import {
  FiletypePdf,
  FiletypeXls,
  Envelope,
  SortDown,
} from "react-bootstrap-icons";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { LoadSearch } from "@/components/load-search-filters";
import { NewLoad } from "@/components/new-load-section";
import Link from "next/link";

type TableData = {
  tableHeaders: string[];
  tableRowData: string[][];
};
export default function Loads({ data }: { data: TableData }) {
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
    setSidebarStatus(!NewPopUpOpen);
  }, [NewPopUpOpen]);
  return (
    <>
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
                      {data.tableHeaders.map((headeritem, index) => (
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
                    {data.tableRowData?.map((row, index) => (
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
    </>
  );
}
