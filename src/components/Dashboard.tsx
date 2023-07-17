"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge, Button, Card, Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
import { Box, Download, Calendar2Minus } from "react-bootstrap-icons";
const dashboardTiles = {
  mainTiles: [
    {
      name: "Loads",
      data: {
        New: 12,
        "En-Route": 15,
        Delivered: 21,
      },
      icon: "/icons/conveyor-belt.svg",
      options: [
        {
          title: "Create A Load",
          icon: "/icons/create-a-load.svg",
          link: "/loads#create",
        },
        {
          title: "View Existing Loads",
          icon: "/icons/view-existing-loads.svg",
          link: "/loads",
        },
      ],
    },
    {
      name: "Drivers",
      data: {
        // Applicants: 12,
        Hired: 83,
        Terminated: 21,
      },
      icon: "/icons/truck-driver.svg",
      options: [
        {
          title: "Create a Profile",
          icon: "/icons/create-a-load.svg",
          link: "/drivers#create",
        },
        {
          title: "View Drivers",
          icon: "/icons/view-existing-loads.svg",
          link: "/drivers",
        },
      ],
    },
    {
      name: "Partners",
      data: {
        Customers: 12,
        Vendors: 15,
      },
      icon: "/icons/partner-exchange-rounded.svg",
      options: [
        {
          title: "Customers",
          icon: "/icons/partners-customers.svg",
          link: "/partners/customers",
        },
        {
          title: "Vendors",
          icon: "/icons/partners-vendors.svg",
          link: "/partners/vendors",
        },
      ],
    },
    {
      name: "Equipments",
      data: {
        Trucks: 19,
        Trailers: 24,
      },
      icon: "/icons/mdi_tools.svg",
      options: [
        {
          title: "Add Equipment",
          icon: "/icons/create-a-load.svg",
          link: "",
        },
        {
          title: "View All Equipments",
          icon: "/icons/view-existing-loads.svg",
          link: "",
        },
      ],
    },
  ],
  mediumTiles: [
    {
      name: "Fuel",
      icon: "/icons/fuel.svg",
      link: "/fuel",
    },
    {
      name: "Driver Payroll",
      icon: "/icons/driver-payroll.svg",
      link: "/driver-payroll",
    },
    {
      name: "Accounts",
      icon: "/icons/accounts.svg",
      link: "/accounts",
    },
    {
      name: "Reports",
      icon: "/icons/reports.svg",
      link: "/reports",
    },
  ],
  smallTiles: [
    {
      name: "Users",
      icon: "/icons/users.svg",
      link: "/users",
    },
    {
      name: "Data Library",
      icon: "/icons/data-library.svg",
      link: "/data-library",
    },
    {
      name: "Doc Exchange",
      icon: "/icons/docs-exchange.svg",
      link: "/docs-exchange",
    },
    {
      name: "IFTA",
      icon: "/icons/agreement.svg",
      link: "/ifta",
    },
  ],
};

export default function Dashboard() {
  return (
    <section className="main-dashboard">
      <Appheader />
      <Container className="main-content py-2 px-4" fluid>
        <Row className="mb-3">
          <Col className="d-flex justify-content-between">
            <h4 className="text-info fw-bold mb-0">Dashboard</h4>
            <div className="db-options d-flex gap-2">
              <Button
                variant="outline-info"
                size="sm"
                className="d-flex align-items-center gap-1 px-3 shadow-lg rounded-pill"
              >
                <Image
                  src="icons/help.svg"
                  className="pe-none"
                  alt=""
                  height={24}
                  width={24}
                ></Image>
                <span>Help</span>
              </Button>
              <Button
                variant="outline-info"
                size="sm"
                className="d-flex align-items-center gap-1 px-3 shadow-lg rounded-pill"
              >
                <Image
                  src="icons/safety.svg"
                  className="pe-none"
                  alt=""
                  height={24}
                  width={24}
                ></Image>
                <span>Safety</span>
              </Button>
              <Button
                variant="outline-info"
                size="sm"
                className="d-flex align-items-center gap-1 px-3 shadow-lg rounded-pill"
              >
                <Image
                  src="icons/settings.svg"
                  className="pe-none"
                  alt=""
                  height={24}
                  width={24}
                ></Image>
                <span>Settings</span>
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mb-3 gy-2">
          {dashboardTiles.mainTiles.map((tile, index) => (
            <MainTile
              key={index}
              name={tile.name}
              icon={tile.icon}
              data={tile.data}
              options={tile.options}
            />
          ))}
        </Row>
        <Row>
          <Col md="6">
            <h4 className="text-info fw-bold mb-3">Analytics</h4>

            <Card className="border-info">
              <Card.Body>
                <div className="section-header d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <Badge color="primary" className="rounded-circle p-2">
                      <Box size={24} />
                    </Badge>

                    <h5 className="text-info fw-bold mb-0">Sales Report</h5>
                  </div>

                  <div className="d-flex gap-3">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-secondary"
                        id="monthly"
                        className="d-flex gap-2 align-items-center"
                      >
                        <Calendar2Minus />
                        Monthly
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button
                      variant="light"
                      className="text-primary d-flex gap-2 align-items-center"
                    >
                      <Download />
                      Download Report
                    </Button>
                  </div>
                </div>
                <section style={{ minHeight: "300px" }}></section>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <h4 className="text-info fw-bold mb-3">Manage</h4>
            <Row className="gy-3 mb-3">
              {dashboardTiles.mediumTiles.map((tile, index) => (
                <Col md="6" key={index}>
                  <Link
                    href={tile.link}
                    className="btn btn-outline-info px-4 d-flex w-100 align-items-center medium_tile "
                  >
                    <Image
                      src={tile.icon}
                      alt="Image"
                      width={32}
                      height={32}
                      className="me-3"
                    />
                    <h5 className="mb-0 fw-bold">{tile.name}</h5>
                  </Link>
                </Col>
              ))}
            </Row>
            <Row className="gy-3">
              <Col xs="12">
                <h4 className="text-info fw-bold mb-0">More</h4>
              </Col>
              {dashboardTiles.smallTiles.map((tile, index) => (
                <Col md="3" key={index}>
                  <Link
                    href={tile.link}
                    className="btn btn-outline-info d-flex w-100 align-items-center small_tile"
                  >
                    <Image
                      src={tile.icon}
                      alt="Image"
                      width={24}
                      height={24}
                      className="me-1"
                    />
                    <h6 className="mb-0">{tile.name}</h6>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export function UserMenu({ showName }: { showName?: boolean }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        className="border-0 d-flex column-gap-2 small align-items-center usermenu"
      >
        <div className="user-avatar">
          <Image
            src="/images/user-icon.png"
            alt=""
            width={40}
            height={40}
            className="rounded-circle"
          />
        </div>
        {showName && (
          <div className="user-info text-start small">
            <p className="mb-0 fw-bold">TMS User</p>
            <p className="mb-0">tms@tmsinfo.com</p>
          </div>
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        <Dropdown.Item href="#">Profile</Dropdown.Item>
        <Dropdown.Item href="#">Settings</Dropdown.Item>
        <Dropdown.Item href="#">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
function Appheader() {
  return (
    <header>
      <nav className="bg-white py-2 d-flex justify-content-between px-4 border border-bottom">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "250px" }}
        >
          <Link href={"/dashboard"}>
            <Image
              src="/images/fastforward.png"
              alt=""
              width={180}
              height={64}
              priority={true}
            />
          </Link>

          {/* <div className="sidebar-toggler">
            <Link href={"#"}></Link>
          </div> */}
        </div>
        <div className="d-flex justify-content-end align-items-center column-gap-3">
          <div className="user-menu">
            <UserMenu showName />
          </div>
          <div className="messages">
            <Button variant="link" size="sm">
              <Image
                src="icons/messages.svg"
                className="pe-none"
                alt=""
                width={24}
                height={24}
              ></Image>
            </Button>
          </div>
          <div className="notifications">
            <Button variant="link" size="sm">
              <Image
                src="icons/bell.svg"
                className="pe-none"
                alt=""
                width={24}
                height={24}
              ></Image>
            </Button>
          </div>
          <div className="settings">
            <Button variant="link" size="sm">
              <Image
                src="icons/gear.svg"
                className="pe-none"
                alt=""
                width={24}
                height={24}
              ></Image>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
type TileProps = {
  name: string;
  data: object;
  icon: string;
  options?: { title: string; icon: string; link: string }[];
};
function MainTile({ name, icon, data, options }: TileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Col lg="4" xl="3" md="6">
        <div
          className="tile p-4 shadow-sm border border-info rounded"
          onClick={showModal}
        >
          <div className="tile-title text-info d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <div className="tile-icon d-flex align-items-center">
                <Image src={icon} height={32} width={32} alt="Image"></Image>
              </div>
              <h5 className="fw-bold tile-name mb-0 ms-2 d-flex align-items-center">
                {name}
              </h5>
            </div>
            <div className="total-data">
              <h5 className="mb-0 fw-bold">
                {Object.values(data).reduce(
                  (acc, curr) => (acc as number) + (curr as number),
                  0
                )}
              </h5>
            </div>
          </div>
          <div className="tile-body pt-4">
            <span className="tile-count d-flex gap-3">
              {Object.keys(data).map((key, index) => (
                <div
                  key={index}
                  className={`tile-count-item ${name.toLowerCase()}-${key.toLowerCase()}`}
                >
                  <p className="mb-0 count">{data[key as keyof object]}</p>
                  <p className="mb-0 name">{key}</p>
                </div>
              ))}
            </span>
          </div>
        </div>
      </Col>
      <Modal show={isOpen} onHide={hideModal} centered className="TilePopUp">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {options?.map((option, index) => (
              <Col sm="6" key={index}>
                <Link
                  href={option.link}
                  className="w-100 d-flex flex-column btn btn-outline-info modaltile"
                >
                  <Image
                    src={option.icon}
                    height={48}
                    width={48}
                    alt="Image"
                    className="mb-4"
                  ></Image>

                  <h6 className="mb-0 text-start fw-bold">{option.title}</h6>
                </Link>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
