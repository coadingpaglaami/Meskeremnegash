"use client";

import { useState } from "react";
import { DelivaryData } from "@/interface/DelivaryData";
import { deliveryData } from "@/lib/delivarydata";
import { AcceptDeliveryDialog } from "../delivaries/AcceptDeliveryDialog";
import { CompleteDilog } from "../delivaries/CompleteDilog";
import { statusStyles } from "@/lib/statusColor";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export const TripEarnigsTable = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<DelivaryData | null>(
    null
  );

  const handleView = (delivery: DelivaryData) => {
    setSelectedDelivery(delivery);
    setOpenDialog(true);
  };

  // Filter completed, pending, or in-progress (if needed)
  const allDeliveries = deliveryData;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="overflow-x-auto max-md:max-w-[85vw]">
        <Table className=" bg-white overflow-x-auto">
          <TableHeader>
            <TableRow className="rounded-tl-md">
              <TableHead className="border-y border-l text-gray-800 font-semibold ">
                Route
              </TableHead>
              <TableHead className="border-y text-gray-800 font-semibold">
                Luggage Weight
              </TableHead>
              <TableHead className="border-y text-gray-800 font-semibold">
                Rate (kg)
              </TableHead>
              <TableHead className="border-y text-gray-800 font-semibold">
                Status
              </TableHead>
              <TableHead className="border-y border-r text-gray-800 font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allDeliveries.map((delivery) => {
              const style = statusStyles[delivery.status];

              return (
                <TableRow key={delivery.delivaryId} className="border-t">
                  {/* Route */}
                  <TableCell className="border-y border-l align-top py-3">
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900">
                        {delivery.tripData.from} → {delivery.tripData.to}
                      </span>
                      <span className="text-sm text-gray-500 mt-1">
                        {typeof delivery.tripData.date === "string" &&
                          delivery.tripData.date}
                      </span>
                    </div>
                  </TableCell>

                  {/* Luggage Weight */}
                  <TableCell className="border-y align-top py-3">
                    {delivery.tripData.carryWeight} kg
                  </TableCell>

                  {/* Rate */}
                  <TableCell className="border-y align-top py-3">
                    ${delivery.tripData.price}
                  </TableCell>

                  {/* Status */}
                  <TableCell className="border-y align-top py-3">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${style.bg} ${style.text}`}
                    >
                      {style.label}
                    </div>
                  </TableCell>

                  {/* Action */}
                  <TableCell className="border-y text-center border-r py-3">
                    <Button
                      variant="outline"
                      onClick={() => handleView(delivery)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {/* ----------- DIALOGS ----------- */}
        {selectedDelivery && selectedDelivery.status !== "completed" ? (
          <AcceptDeliveryDialog
            open={openDialog}
            setOpen={setOpenDialog}
            delivery={selectedDelivery}
            showCheckbox={selectedDelivery.status === "pending"}
          />
        ) : (
          selectedDelivery && (
            <CompleteDilog
              open={openDialog}
              setOpen={setOpenDialog}
              delivery={selectedDelivery}
            />
          )
        )}
      </div>
    </div>
  );
};
