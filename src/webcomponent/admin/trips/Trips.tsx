"use client";

import { useState } from "react";
import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Trip {
  carrierName: string;
  route: string; // format: Addis Ababa - Nairobi
  date: string; // format 12-09-2025
  status: "Active" | "Cancelled" | "Completed";
  isCancellable: boolean;
  weight: string; // 5.5 kg
  onAction: (action: "cancel") => void;
}

// ✅ Demo Data
const initialTrips: Trip[] = [
  {
    carrierName: "Mehedy Hasan",
    route: "Addis Ababa - Nairobi",
    date: "12-09-2025",
    status: "Active",
    isCancellable: true,
    weight: "5.5 kg",
    onAction: () => {},
  },
  {
    carrierName: "Arif Rahman",
    route: "Cairo - Khartoum",
    date: "05-10-2025",
    status: "Completed",
    isCancellable: false,
    weight: "10 kg",
    onAction: () => {},
  },
  {
    carrierName: "Nusrat Jahan",
    route: "Lagos - Accra",
    date: "02-08-2025",
    status: "Cancelled",
    isCancellable: false,
    weight: "8 kg",
    onAction: () => {},
  },
  {
    carrierName: "Rakibul Islam",
    route: "Johannesburg - Cape Town",
    date: "22-07-2025",
    status: "Active",
    isCancellable: true,
    weight: "12 kg",
    onAction: () => {},
  },
  {
    carrierName: "Tania Akter",
    route: "Kigali - Kampala",
    date: "01-06-2025",
    status: "Active",
    isCancellable: true,
    weight: "7 kg",
    onAction: () => {},
  },
];

export const Trips = () => {
  const [trips, setTrips] = useState(initialTrips);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "Active" | "Cancelled" | "Completed">("all");
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleConfirmCancel = () => {
    if (!selectedTrip) return;

    setTrips((prev) =>
      prev.map((t) =>
        t.carrierName === selectedTrip.carrierName ? { ...t, status: "Cancelled", isCancellable: false } : t
      )
    );
    setSelectedTrip(null);
  };

  const filteredTrips = trips.filter((t) => {
    const matchesSearch = t.carrierName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredTrips.length / rowsPerPage);
  const paginatedTrips = filteredTrips.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div className="flex flex-col gap-6 py-16 md:px-6 px-4">
      <HeadingSection heading="All Trips" subheading="Manage Trips" />

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-1/3">
          <Input
            placeholder="Search by carrier name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <Select
          value={statusFilter}
          onValueChange={(v: "all" | "Active" | "Cancelled" | "Completed") => {
            setStatusFilter(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Carrier</TableHead>
              <TableHead className="font-semibold">Route</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Weight</TableHead>
              <TableHead className="font-semibold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedTrips.map((trip, i) => (
              <TableRow key={i} className={trip.status === "Cancelled" ? "opacity-60" : ""}>
                <TableCell>{trip.carrierName}</TableCell>
                <TableCell>{trip.route}</TableCell>
                <TableCell>{trip.date}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "px-2 py-1 text-xs font-medium rounded",
                      trip.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : trip.status === "Cancelled"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    )}
                  >
                    {trip.status}
                  </span>
                </TableCell>
                <TableCell>{trip.weight}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    disabled={!trip.isCancellable}
                    onClick={() => setSelectedTrip(trip)}
                  >
                    <XCircle size={16} />
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {paginatedTrips.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-500">
                  No trips found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-3 mt-4">
          <Button variant="outline" size="sm" onClick={prevPage} disabled={page === 1}>
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <Button variant="outline" size="sm" onClick={nextPage} disabled={page === totalPages}>
            Next
          </Button>
        </div>
      )}

      {/* Cancel Trip Dialog */}
      <Dialog open={!!selectedTrip} onOpenChange={() => setSelectedTrip(null)}>
        <DialogContent className="max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Cancel Trip</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600 mt-2">
            Are you sure you want to cancel <strong>{selectedTrip?.carrierName}{"'"}s trip</strong>?
          </p>
          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setSelectedTrip(null)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmCancel}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
