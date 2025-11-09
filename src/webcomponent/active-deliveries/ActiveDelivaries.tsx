"use client";
import { getUserRole } from "@/lib/auth";
import { ActiveDelivaries } from "../carrier";
import { SenderActiveDelivaries } from "../sender";

export const ActiveDelivariesRole = () => {
  const role = getUserRole();
  return (
    <>
      {role === "carrier" ? (
        <ActiveDelivaries />
      ) : role === "sender" ? (
        <SenderActiveDelivaries />
      ) : (
        <div>Hello</div>
      )}
    </>
  );
};
