'use client';
import { getUserRole } from "@/lib/auth";
import { ActiveDelivaries } from "../carrier";

export const ActiveDelivariesRole = () => {
  const role = getUserRole();
  return <>{role === "carrier" ? <ActiveDelivaries /> : <div>Hello</div>}</>;
};
