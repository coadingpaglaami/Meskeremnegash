"use client";
import { TripDetails } from "@/interface/Trip";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NewTrip } from "./NewTrip";
import { TripCard } from "./TripCard";

export const tripsData: TripDetails[] = [
  {
    tripId: 1,
    from: "Dhaka",
    to: "Singapore",
    date: "18 Oct 2025",
    carryWeight: 15,
    note: "Laptop accessories delivery",
  },
  {
    tripId: 2,
    from: "Chittagong",
    to: "Dubai",
    date: "22 Oct 2025",
    carryWeight: 20,
    note: "Fragile cargo handling",
  },
  {
    tripId: 3,
    icon: "/icons/truck.svg",
    from: "Sylhet",
    to: "Kolkata",
    date: "25 Oct 2025",
    carryWeight: 10,
    note: "Clothing shipment",
  },
  {
    tripId: 4,
    from: "Dhaka",
    to: "London",
    date: "30 Oct 2025",
    carryWeight: 25,
    note: "Gift parcel and documents",
  },
];

export const MyTrips = () => {
  const [openDilog, setOpenDilog] = useState(false);
  return (
    <div className="flex flex-col gap-6 py-14 md:px-6 px-4">
      <Dialog open={openDilog} onOpenChange={setOpenDilog}>
        <DialogTrigger asChild>
          <Button className="self-end w-fit ">Add new Trip</Button>
        </DialogTrigger>
        <DialogContent className="px-3 py-4">
            <DialogHeader >Add New Trip</DialogHeader>
          <NewTrip setOpenDilog={setOpenDilog} />
        </DialogContent>
      </Dialog>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-4">
        {tripsData.map((trip) => (
          <TripCard key={trip.tripId} {...trip} />
        ))}
      </div>
    </div>
  );
};
