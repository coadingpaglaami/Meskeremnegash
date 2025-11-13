"use client";

import { useState } from "react";
import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Interface
export interface Payments {
  paymentId: string; // format Pay001
  senderName: string;
  carrierName: string;
  amount: number;
  fee: number;
  date: string; // format YYYY-MM-DD
  status: "Pending" | "Completed";
}

// Dummy Data
const initialPayments: Payments[] = [
  {
    paymentId: "PAY001",
    senderName: "John Doe",
    carrierName: "Mehedy Hasan",
    amount: 250,
    fee: 10,
    date: "2025-10-12",
    status: "Completed",
  },
  {
    paymentId: "PAY002",
    senderName: "Nusrat Jahan",
    carrierName: "Rakibul Islam",
    amount: 320,
    fee: 15,
    date: "2025-10-10",
    status: "Pending",
  },
  {
    paymentId: "PAY003",
    senderName: "Tania Akter",
    carrierName: "Arif Rahman",
    amount: 500,
    fee: 20,
    date: "2025-09-25",
    status: "Completed",
  },
  {
    paymentId: "PAY004",
    senderName: "Sabbir Ahmed",
    carrierName: "Jahidul Karim",
    amount: 150,
    fee: 5,
    date: "2025-09-20",
    status: "Pending",
  },
  {
    paymentId: "PAY005",
    senderName: "Mahmudul Hasan",
    carrierName: "Sharmin Akter",
    amount: 420,
    fee: 12,
    date: "2025-09-15",
    status: "Completed",
  },
];

export const Payment = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "Pending" | "Completed">("all");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Filter logic
  const filteredPayments = initialPayments.filter((p) => {
    const matchesSearch =
      p.carrierName.toLowerCase().includes(search.toLowerCase()) ||
      p.senderName.toLowerCase().includes(search.toLowerCase()) ||
      p.paymentId.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredPayments.length / rowsPerPage);
  const paginatedData = filteredPayments.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div className="flex flex-col gap-6 py-16 md:px-6 px-4">
      <HeadingSection
        heading="Payment History"
        subheading="Payment details and history overview"
      />

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-1/3">
          <Input
            placeholder="Search by name or payment ID..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <Select
          value={statusFilter}
          onValueChange={(v: "all" | "Pending" | "Completed") => {
            setStatusFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Payment ID</TableHead>
              <TableHead className="font-semibold">Sender</TableHead>
              <TableHead className="font-semibold">Carrier</TableHead>
              <TableHead className="font-semibold">Amount</TableHead>
              <TableHead className="font-semibold">Fee</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((p, index) => (
                <TableRow key={index}>
                  <TableCell>{p.paymentId}</TableCell>
                  <TableCell>{p.senderName}</TableCell>
                  <TableCell>{p.carrierName}</TableCell>
                  <TableCell>${p.amount.toFixed(2)}</TableCell>
                  <TableCell>${p.fee.toFixed(2)}</TableCell>
                  <TableCell>{p.date}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "px-2 py-1 text-xs font-medium rounded",
                        p.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      )}
                    >
                      {p.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-gray-500">
                  No payments found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-3 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
