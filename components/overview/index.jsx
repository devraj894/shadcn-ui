"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FaCoins,
  FaUserAlt,
  FaBoxOpen,
  FaChartArea,
  FaFileExport,
  FaRedoAlt,
  FaSlidersH,
} from "react-icons/fa";
import DataTable from "react-data-table-component";
import StatCard from "./StatCard.jsx";

// Sample data (rewritten slightly)
const salesData = [
  {
    id: 101,
    customer: "Liam Johnson",
    product: "Tablet",
    total: 650,
    date: "2025-09-01",
  },
  {
    id: 102,
    customer: "Olivia Brown",
    product: "Earbuds",
    total: 120,
    date: "2025-09-02",
  },
  {
    id: 103,
    customer: "Noah Davis",
    product: "Smartphone",
    total: 900,
    date: "2025-09-03",
  },
  {
    id: 104,
    customer: "Ava Wilson",
    product: "Keyboard",
    total: 180,
    date: "2025-09-04",
  },
  {
    id: 105,
    customer: "Sophia Miller",
    product: "Monitor",
    total: 350,
    date: "2025-09-05",
  },
  {
    id: 106,
    customer: "Mason Taylor",
    product: "Mouse",
    total: 60,
    date: "2025-09-06",
  },
];

// Table columns
const tableColumns = [
  {
    name: "Order ID",
    selector: (row) => row.id,
    sortable: true,
    width: "90px",
  },
  { name: "Customer Name", selector: (row) => row.customer, sortable: true },
  { name: "Product Bought", selector: (row) => row.product, sortable: true },
  { name: "Total ($)", selector: (row) => row.total, sortable: true },
  { name: "Purchase Date", selector: (row) => row.date, sortable: true },
];

export default function Dashboard() {
  const [filterDate, setFilterDate] = useState("");
  const filteredSales = salesData.filter((sale) =>
    filterDate ? sale.date === filterDate : true
  );

  return (
    <div className="space-y-10">
      {/* Stats Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Revenue Generated"
          value="$24,500"
          icon={<FaCoins className="text-green-600 w-6 h-6" />}
          bgColor="bg-green-50"
        />
        <StatCard
          title="Total Users"
          value="1,350"
          icon={<FaUserAlt className="text-blue-600 w-6 h-6" />}
          bgColor="bg-blue-50"
        />
        <StatCard
          title="Orders Placed"
          value="340"
          icon={<FaBoxOpen className="text-purple-600 w-6 h-6" />}
          bgColor="bg-purple-50"
        />
        <StatCard
          title="Live Visitors"
          value="62"
          icon={<FaChartArea className="text-red-600 w-6 h-6" />}
          bgColor="bg-red-50"
        />
      </div>

      {/* Actions Section */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <FaFileExport /> Export
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FaRedoAlt /> Reload
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FaSlidersH /> Sort/Filter
          </Button>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <DataTable
          title="Latest Transactions"
          columns={tableColumns}
          data={filteredSales}
          pagination
          highlightOnHover
          dense
          striped
        />
      </div>
    </div>
  );
}
