"use client";
import Image from "next/image";
import Link from "next/link";

import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
const dashboardTiles = [
  {
    name: "Loads",
    data: {
      "New": 12,
      "En-Route": 15,
      "Delivered": 21,
    },
    icon: "/icons/conveyor-belt.svg",
  },
  {
    name: "Drivers",
    data: {
      "Applicant": 12,
      "Hired": 15,
      "Terminated": 21,
    },
    icon: "/icons/truck-driver.svg",
  },
  {
    name: "Partners",
    data: {
      "Customers": 12,
      "Vendors": 15,
    },
    icon: "/icons/partner-exchange-rounded.svg",
  },
  {
    name: "Equipments",
    data: {
      "Trucks": 19,
      "Trailers": 24,
    },
    icon: "/icons/mdi_tools.svg",
  },

]
export default function Dashboard() {
  return (
    <section className="main-dashboard">
      <Appheader />
      <Container className="main-content py-2 px-4" fluid>
        <Row>
          <Col className="flex justify-between">
            <h4 className="text-info fw-bold">Dashboard</h4>
            <div className="db-options flex column-gap-2">
              <Button variant="outline-info" size="sm">
               
                Help
              </Button>
              <Button variant="outline-info" size="sm">
               
                Safety
              </Button>
              <Button variant="outline-info" size="sm">
               
                Settings
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          {
            dashboardTiles.map((tile, index) => (
              <Tile key={index} name={tile.name} icon={tile.icon} data={tile.data} />
            ))

            }
        </Row>
      </Container>
    </section>
  );
}

function UserMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        className="border-0 d-flex column-gap-2 small align-items-center"
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
        <div className="user-info text-start small">
          <p className="mb-0 fw-bold">TMS User</p>
          <p className="mb-0">tms@tmsinfo.com</p>
        </div>
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
          <Image src="/images/fastforward.png" alt="" width={180} height={64} />
          <div className="sidebar-toggler">
            <Link href={"#"}>
            
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center column-gap-3">
          <div className="user-menu">
            <UserMenu />
          </div>
          <div className="messages">
            <Link href={"#"}>
              
            </Link>
          </div>
          <div className="notifications">
            <Link href={"#"}>
             
            </Link>
          </div>
          <div className="settings">
            <Link href={"#"}>
           
            </Link>
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
};
function Tile({name, icon, data}: TileProps) {
  return (
    <Col sm="3">
      <div className="tile p-4">
        <div className="tile-title text-info d-flex">
          <object
            data={icon}
            type="image/svg+xml"
            className="pe-2"
            height={32}
            width={32}
          ></object>
          <h5 className="fw-bold">{name ?? "Loads"}</h5>
        </div>
        <div className="tile-body">
          <span className="tile-count d-flex column-gap-2">
            {Object.keys(data).map((key, index) => (
              <div key={index} className="tile-count-item">
                <p className="mb-0">{data[key as keyof object]}</p>
                <p className="mb-0">{key}</p>
              </div>
            ))}
          </span>
        </div>
      </div>
    </Col>
  );
}