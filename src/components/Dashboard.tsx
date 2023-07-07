"use client";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChatSquareDots } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { BsGear } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";


export default function Dashboard() {
  return (
    <section className="main-dashboard">
      <header>
        <nav className="bg-white py-2 d-flex justify-content-between px-4 border border-bottom">
          <div className="d-flex justify-content-between align-items-center" style={{width:"250px"}}>
            <Image
              src="/images/fastforward.png"
              alt=""
              width={180}
              height={64}
            />
            <div className="sidebar-toggler">
              <Link href={"#"}>
                <GiHamburgerMenu color="var(--primary)" fontSize={"32px"} />
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center column-gap-3">
            <div className="user-menu">
              <UserMenu />
            </div>
            <div className="messages">
              <Link href={"#"}>
                <BsChatSquareDots fontSize={"24px"} />
              </Link>
            </div>
            <div className="notifications">
              <Link href={"#"}>
                <GoBell fontSize={"24px"} />
              </Link>
            </div>
            <div className="settings">
              <Link href={"#"}>
                <BsGear fontSize={"24px"} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
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
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}