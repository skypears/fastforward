import Link from "next/link";
import { UserMenu } from "./Dashboard";
import {
  FiletypePdf,
  List,
  PlusCircle,
  Search,
  Sliders2,
  TextIndentLeft,
} from "react-bootstrap-icons";
import { useState } from "react";
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
type headerProps = {
  pageName?: string;
  period?: boolean;
  exportMenu?: boolean;
  nbToggle?: () => void;
  sidebarToggle?: () => void;
  searchToggle?: () => void;
};
export default function Header({
  pageName,
  period,
  exportMenu,
  nbToggle,
  sidebarToggle,
  searchToggle,
}: headerProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    sidebarToggle();
  };
  return (
    <>
      <style>
        {`
        .usermenu.dropdown-toggle::after {
          content: unset;
        }
        .left-section {
          min-width: 215px;
        }
        `}
      </style>
      <header>
        <nav className="bg-light py-2 d-flex px-2 border border-bottom">
          <div className="d-flex justify-content-between align-items-center left-section">
            <Link href={"/"}>
              <img src="/images/fastforward.png" alt="" height={50} />
            </Link>
            <div className="sidebar-toggler">
              <Button variant="link" onClick={() => toggleSidebar()}>
                {sidebarOpen ? (
                  <List size={32} />
                ) : (
                  <TextIndentLeft size={32} />
                )}
              </Button>
            </div>
          </div>
          <div className="d-flex w-100">
            <div className="section-info d-flex align-items-center ps-4 gap-3">
              <h4 className="text-start mb-0 me-4 fw-bold">{pageName}s</h4>

              {period && (
                <>
                  <div className="">
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
                </>
              )}
              {exportMenu && (
                <>
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
                </>
              )}
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
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0"
                    onClick={() => searchToggle()}
                  >
                    <Sliders2 size={16} />
                  </Button>
                </InputGroup.Text>
              </InputGroup>
              <Button
                variant="outline-primary"
                size="sm"
                className="text-nowrap d-flex align-items-center gap-1"
                onClick={() => nbToggle()}
              >
                <span>New</span>
                <PlusCircle size={16} />
              </Button>
            </div>
          </div>
          <UserMenu />
        </nav>
      </header>
    </>
  );
}
