"use client";
import { getUserRole } from "@/lib/auth";
import { CarrierDashboard } from "../carrier";
import { SenderDashboard } from "../sender";

export const Dashboard = () => {
  const role = getUserRole();
  return (
    <>
      {role === "carrier" ? (
        <CarrierDashboard />
      ) : role === "sender" ? (
        <SenderDashboard />
      ) : (
        <div>Other Dashboard</div>
      )}
    </>
  );
};
