"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import { InputGroup, Form, Button } from "react-bootstrap";
import { Search, Link, Sliders2, PlusCircle } from "react-bootstrap-icons";

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

  return (
    <div className="main-section">
      <Header>
        <div className="section-info d-flex align-items-center ps-4 gap-3">
          <h4 className="text-start mb-0 me-4 fw-bold">Drivers</h4>
          {/* <div className="d-flex align-items-center gap-1">
            <span className="small">Period</span>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                size="sm"
                className="border-0 d-flex column-gap-2 align-items-center"
              >
                All
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="">This Year</Dropdown.Item>
                <Dropdown.Item href="">This Month</Dropdown.Item>
                <Dropdown.Item href="">This Week</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
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
          >
            <span>New Driver</span>
            <PlusCircle size={16} />
          </Button>
        </div>
      </Header>
      <div className="content d-flex">
        <Sidebar filters={driversFilters} />
        <Content
          headers={tableData.tableHeaders}
          data={tableData.tableRowData}
        />
      </div>
    </div>
  );
}
