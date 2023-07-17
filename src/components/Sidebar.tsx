import Link from "next/link";
import { useState } from "react";

type sidebarProps = {
  filters: {
    forPage: string;
    filterItems: string[];
  };
  isOpen?: boolean;
};
export default function Sidebar({ filters, isOpen }: sidebarProps) {
  return (
    isOpen && (
      <div className="sidebar open py-3 border-end">
        <ul className="list-unstyled">
          <li>
            <Link
              href="/dashboard"
              className="ps-4 text-start border-0 rounded-0 btn btn-outline-primary w-100 text-decoration-none py-2 d-flex align-items-center gap-2"
            >
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <SidebarDD name={filters.forPage} filters={filters.filterItems} />
          </li>
        </ul>
      </div>
    )
  );
}
type sidebarDDProps = {
  name: string;
  filters: string[];
};
export const SidebarDD = ({ name, filters }: sidebarDDProps) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Link
        href=""
        onClick={() => setOpen(!open)}
        className={`sidebar-dd ps-4 text-start border-0 rounded-0 d-flex align-items-center
      btn btn-outline-secondary w-100 text-decoration-none py-2 ${
        open && "active"
      }`}
      >
        <span>{name}</span>
      </Link>
      <div className={`collapse ${open && "show"}`}>
        <ul className="list-unstyled">
          <li>
            {filters.map((filterItem, index) => (
              <Link
                href=""
                key={index}
                className="ps-5 text-start border-0 rounded-0 btn btn-outline-info text-dark small
              w-100 text-decoration-none py-1 d-flex align-items-center gap-2"
              >
                <span>{filterItem}</span>
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
};
