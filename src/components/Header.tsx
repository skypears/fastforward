import Link from "next/link";
import { UserMenu } from "./Dashboard";
import { List, TextIndentLeft } from "react-bootstrap-icons";
import { useState } from "react";
import { Button } from "react-bootstrap";
type headerProps = {
  children?: React.ReactNode;
};
export default function Header({ children }: headerProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    document.querySelector(".sidebar")?.classList.toggle("open");
    setSidebarOpen(!sidebarOpen);
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
          <div className="d-flex w-100">{children}</div>
          <UserMenu />
        </nav>
      </header>
    </>
  );
}
