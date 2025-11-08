"use client";

import { useState } from "react";
import { DelivaryData } from "@/interface/DelivaryData";
import { deliveryData } from "@/lib/delivarydata";
import { DeliveryCard } from "./DelivaryCard";
import { Button } from "@/components/ui/button";
import { CompleteDilog } from "./CompleteDilog";
import { Breadcrumb } from "@/webcomponent/reusable";
export const CompleteDelivaries = () => {
  const activeDelivaries: DelivaryData[] = deliveryData.filter(
    (delivery) => delivery.status === "completed"
  );
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<DelivaryData | null>(
    null
  );

  const handleAccept = (delivery: DelivaryData) => {
    setSelectedDelivery(delivery);
    setOpenDialog(true);
  };

  return (
    <div className="py-16 flex flex-col gap-6 md:px-6 px-4">
      <Breadcrumb
        title="Completed Trips"
        subtitle="Review all your completed deliveries"
        math={[{ mhki: "$120", mhki_subtitle: "Total Earnings" }]}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {activeDelivaries.map((delivery) => (
          <div
            key={delivery.delivaryId}
            className="flex flex-col gap-2 border rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <DeliveryCard key={delivery.delivaryId} data={delivery} />
            <div className="flex gap-2 justify-center">
              <Button
                variant="outline_black"
                onClick={() => handleAccept(delivery)}
              >
                View Summary
              </Button>
            </div>
          </div>
        ))}
        {selectedDelivery && (
          <CompleteDilog
            open={openDialog}
            setOpen={setOpenDialog}
            delivery={selectedDelivery}
          />
        )}
      </div>
    </div>
  );
};
