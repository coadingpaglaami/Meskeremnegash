"use client";

import { useState, useMemo } from "react";
import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Interfaces
interface Person {
  name: string;
  email: string;
}

interface TSARecord {
  shippingId: string; // e.g., SH001
  sender: Person;
  carrier: Person;
  tripRoute: string; // e.g., Africa → Europe
  date: string; // format YYYY-MM-DD
  carrierConfirmed: "Confirmed" | "Pending";
}

// Sample data
const TSA_DATA: TSARecord[] = [
  {
    shippingId: "SH001",
    sender: { name: "Sarah Johnson", email: "sarah@gmail.com" },
    carrier: { name: "Michael Lee", email: "michael@gmail.com" },
    tripRoute: "Africa → Europe",
    date: "2025-02-14",
    carrierConfirmed: "Confirmed",
  },
  {
    shippingId: "SH002",
    sender: { name: "James Brown", email: "james@gmail.com" },
    carrier: { name: "Emma Wilson", email: "emma@gmail.com" },
    tripRoute: "Asia → Africa",
    date: "2025-01-10",
    carrierConfirmed: "Pending",
  },
  {
    shippingId: "SH003",
    sender: { name: "Olivia Martin", email: "olivia@gmail.com" },
    carrier: { name: "Noah Davis", email: "noah@gmail.com" },
    tripRoute: "Europe → America",
    date: "2025-03-05",
    carrierConfirmed: "Confirmed",
  },
  {
    shippingId: "SH004",
    sender: { name: "Sophia Taylor", email: "sophia@gmail.com" },
    carrier: { name: "Liam White", email: "liam@gmail.com" },
    tripRoute: "Africa → Asia",
    date: "2025-02-22",
    carrierConfirmed: "Pending",
  },
  {
    shippingId: "SH005",
    sender: { name: "Ethan Clark", email: "ethan@gmail.com" },
    carrier: { name: "Ava Scott", email: "ava@gmail.com" },
    tripRoute: "America → Africa",
    date: "2025-04-11",
    carrierConfirmed: "Confirmed",
  },
  {
    shippingId: "SH006",
    sender: { name: "Lucas Green", email: "lucas@gmail.com" },
    carrier: { name: "Mia Young", email: "mia@gmail.com" },
    tripRoute: "Asia → Europe",
    date: "2025-05-09",
    carrierConfirmed: "Pending",
  },
  {
    shippingId: "SH007",
    sender: { name: "Harper Moore", email: "harper@gmail.com" },
    carrier: { name: "Benjamin Hill", email: "benjamin@gmail.com" },
    tripRoute: "Africa → America",
    date: "2025-01-19",
    carrierConfirmed: "Confirmed",
  },
  {
    shippingId: "SH008",
    sender: { name: "Ella King", email: "ella@gmail.com" },
    carrier: { name: "Henry Adams", email: "henry@gmail.com" },
    tripRoute: "Europe → Asia",
    date: "2025-03-28",
    carrierConfirmed: "Pending",
  },
  {
    shippingId: "SH009",
    sender: { name: "Amelia Hall", email: "amelia@gmail.com" },
    carrier: { name: "Alexander Wright", email: "alex@gmail.com" },
    tripRoute: "Africa → Europe",
    date: "2025-06-15",
    carrierConfirmed: "Confirmed",
  },
  {
    shippingId: "SH010",
    sender: { name: "Chloe Baker", email: "chloe@gmail.com" },
    carrier: { name: "William Harris", email: "william@gmail.com" },
    tripRoute: "America → Asia",
    date: "2025-07-07",
    carrierConfirmed: "Pending",
  },
];

export const TSARecords = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "Confirmed" | "Pending">("all");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Filter and search logic
  const filteredData = useMemo(() => {
    return TSA_DATA.filter((item) => {
      const matchesSearch =
        item.sender.name.toLowerCase().includes(search.toLowerCase()) ||
        item.carrier.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus =
        filterStatus === "all" ? true : item.carrierConfirmed === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [search, filterStatus]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="flex flex-col gap-6 py-16 md:px-6 px-4">
      <HeadingSection
        heading="TSA Records"
        subheading="Manage and view TSA shipment confirmations"
      />

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-1/3">
          <Input
            placeholder="Search by sender or carrier name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <Select
          value={filterStatus}
          onValueChange={(v: "all" | "Confirmed" | "Pending") => {
            setFilterStatus(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Confirmed">Confirmed</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead>Shipment ID</TableHead>
              <TableHead>Sender Name</TableHead>
              <TableHead>Carrier Name</TableHead>
              <TableHead>Origin + Destination</TableHead>
              <TableHead>Submission Date</TableHead>
              <TableHead>Carrier Confirmed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <TableRow key={item.shippingId}>
                  <TableCell>{item.shippingId}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{item.sender.name}</span>
                      <span className="text-muted-foreground text-sm opacity-70">
                        {item.sender.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{item.carrier.name}</span>
                      <span className="text-muted-foreground text-sm opacity-70">
                        {item.carrier.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{item.tripRoute}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <span
                      className={`${
                        item.carrierConfirmed === "Confirmed"
                          ? "text-green-600"
                          : "text-red-600"
                      } font-medium`}
                    >
                      {item.carrierConfirmed}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6">
                  No records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-3">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
