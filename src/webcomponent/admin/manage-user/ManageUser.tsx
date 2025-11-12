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
import { Search, Ban } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ManageUserProps {
  name: string;
  email: string;
  role: "carrier" | "sender";
  joinDate: string; // format 12-09-2025
  status: "active" | "inactive";
  isBanned: boolean;
  onAction: (action: "ban" | "unbanned") => void;
}

// ✅ Demo data
const initialUsers: ManageUserProps[] = [
  {
    name: "Mehedy Hasan",
    email: "mehedy@example.com",
    role: "carrier",
    joinDate: "12-09-2025",
    status: "active",
    isBanned: false,
    onAction: () => {},
  },
  {
    name: "Arif Rahman",
    email: "arif@example.com",
    role: "sender",
    joinDate: "05-10-2025",
    status: "inactive",
    isBanned: true,
    onAction: () => {},
  },
  {
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "carrier",
    joinDate: "02-08-2025",
    status: "active",
    isBanned: false,
    onAction: () => {},
  },
  {
    name: "Rakibul Islam",
    email: "rakib@example.com",
    role: "sender",
    joinDate: "22-07-2025",
    status: "inactive",
    isBanned: false,
    onAction: () => {},
  },
  {
    name: "Tania Akter",
    email: "tania@example.com",
    role: "carrier",
    joinDate: "01-06-2025",
    status: "active",
    isBanned: false,
    onAction: () => {},
  },
  {
    name: "Sakib Khan",
    email: "sakib@example.com",
    role: "sender",
    joinDate: "14-03-2025",
    status: "inactive",
    isBanned: false,
    onAction: () => {},
  },
  {
    name: "Farhana Islam",
    email: "farhana@example.com",
    role: "carrier",
    joinDate: "19-02-2025",
    status: "active",
    isBanned: true,
    onAction: () => {},
  },
];

export const ManageUser = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "carrier" | "sender">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  const [selectedUser, setSelectedUser] = useState<ManageUserProps | null>(null);
  const [actionType, setActionType] = useState<"ban" | "unbanned">("ban");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleConfirm = () => {
    if (!selectedUser) return;

    setUsers((prev) =>
      prev.map((u) =>
        u.email === selectedUser.email ? { ...u, isBanned: actionType === "ban" } : u
      )
    );
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "all" || u.role === roleFilter;
    const matchesStatus = statusFilter === "all" || u.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div className="flex flex-col gap-6 py-16 md:px-6 px-4">
      <HeadingSection heading="User Management" subheading="Manage all users" />

      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search user..."
            className="pl-8"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <Select
            value={roleFilter}
            onValueChange={(v: "all" | "carrier" | "sender") => {
              setRoleFilter(v);
              setPage(1);
            }}
          >
            <SelectTrigger className="w-[150px] font-montserrat">
              <SelectValue placeholder="All Users" />
            </SelectTrigger>
            <SelectContent >
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="carrier">Carrier</SelectItem>
              <SelectItem value="sender">Sender</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={statusFilter}
            onValueChange={(v: "all" | "active" | "inactive") => {
              setStatusFilter(v);
              setPage(1);
            }}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* User Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Email</TableHead>
              <TableHead className="font-semibold">Role</TableHead>
              <TableHead className="font-semibold">Join Date</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedUsers.map((user, i) => (
              <TableRow key={i} className={cn(user.isBanned && "opacity-60")}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="capitalize">{user.role}</TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "px-2 py-1 text-xs font-medium rounded",
                      user.status === "active"
                        ? "bg-[#00A63E]/10 text-[#00A63E]"
                        : "bg-yellow-100 text-yellow-700"
                    )}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-black hover:bg-transparent"
                    onClick={() => {
                      setSelectedUser(user);
                      setActionType(user.isBanned ? "unbanned" : "ban");
                    }}
                  >
                    <Ban size={16} />
                    {user.isBanned ? "Unban" : "Ban"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {paginatedUsers.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-500">
                  No users found.
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

      {/* Ban/Unban Dialog */}
      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="bg-white max-w-md">
          <DialogHeader>
            <DialogTitle>
              {actionType === "ban"
                ? "Are you sure you want to ban this user?"
                : "Are you sure you want to unban this user?"}
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            This will permanently {actionType === "ban" ? "ban" : "unban"}{" "}
            <strong>{selectedUser?.name}</strong> from the platform. This action will
            {actionType === "ban"
              ? " remove them from the active user list and they will no longer be able to access the platform."
              : " restore their access to the platform."}
          </p>
          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setSelectedUser(null)}>
              Cancel
            </Button>
            <Button
              className={cn(
                actionType === "ban" ? "bg-red-600 text-white hover:bg-red-700" : ""
              )}
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
