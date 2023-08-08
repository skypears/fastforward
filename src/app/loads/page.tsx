import LoadsPage from "@/app/loads/LoadsPage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Loads",
  description: "Loads page",
};
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
  return <LoadsPage data={tableData} />;
}
