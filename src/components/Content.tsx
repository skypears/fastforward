"use client";
import Link from "next/link";
import { Collapse, Table } from "react-bootstrap";
import { SortDown } from "react-bootstrap-icons";
import { NewLoad } from "./new-load-section";

type contentProps = {
  headers: string[];
  data?: string[][];
  popUpOpen?: boolean;
};
export default function Content({ headers, data, popUpOpen }: contentProps) {
  return (
    <div className="aria-content ">
      <NewLoad open={popUpOpen} />

      <Table responsive hover className="table-data text-nowrap">
        <thead>
          <tr>
            {headers.map((headeritem, index) => (
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
          {data?.map((row, index) => (
            <tr key={index}>
              {row.map((item, index) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
