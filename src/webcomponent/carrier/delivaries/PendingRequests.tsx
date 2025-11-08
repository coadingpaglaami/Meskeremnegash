
"use client";

import { useState } from "react";
import { DelivaryData } from "@/interface/DelivaryData";
import { deliveryData } from "@/lib/delivarydata";
import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
import { DeliveryCard } from "./DelivaryCard";
import { AcceptDeliveryDialog } from "./AcceptDeliveryDialog";
import { Button } from "@/components/ui/button";

export const PendingRequests = () => {
  // Filter pending deliveries
  const pendingDeliveries: DelivaryData[] = deliveryData.filter(
    (delivery) => delivery.status === "pending"
  );

  // Dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<DelivaryData | null>(
    null
  );

  const handleAccept = (delivery: DelivaryData) => {
    setSelectedDelivery(delivery);
    setOpenDialog(true);
  };

  const handleReject = (delivery: DelivaryData) => {
    console.log("Rejected:", delivery);
  };

  return (
    <div className="py-16 flex flex-col gap-6">
      <HeadingSection
        heading="Pending Requests"
        subheading="Review and manage all delivery requests waiting for your approval."
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {pendingDeliveries.map((delivery) => (
          <div
            key={delivery.delivaryId}
            className="flex flex-col gap-2 border rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <DeliveryCard key={delivery.delivaryId} data={delivery} />
            <div className="flex gap-2 justify-between">
              <Button onClick={()=>handleAccept(delivery)}>Accept</Button>
              <Button variant="outline_black" onClick={()=>handleReject(delivery)}>Reject</Button>
            </div>
          </div>
        ))}
      </div>

      {selectedDelivery && (
        <AcceptDeliveryDialog
          open={openDialog}
          setOpen={setOpenDialog}
          delivery={selectedDelivery}
          showCheckbox={true} // Only show checkboxes on PendingRequests page
        />
      )}
    </div>
  );
};
