"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ArrowRight, CalendarDays, Package, StickyNote } from "lucide-react";
import { DelivaryData } from "@/interface/DelivaryData";
import { statusStyles } from "@/lib/statusColor";

interface AcceptDeliveryDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  delivery: DelivaryData | null;
}

export const CompleteDilog = ({
  open,
  setOpen,
  delivery,
}: AcceptDeliveryDialogProps) => {
  const currentStyle = statusStyles[delivery?.status || "pending"];

  if (!delivery) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl font-montserrat">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Trip Details
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-start gap-2">
            <div className="p-2 rounded-full bg-[#FEB42333]">
              <StickyNote className="text-[#FEB423] w-4 h-4" />
            </div>
            {/* <span className="text-sm text-gray-700">{tripData.note}</span> */}
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-base text-gray-900">
                {delivery.name}
              </h3>
              <div className="flex items-center text-gray-700 text-sm gap-2">
                <span>{delivery.tripData.from}</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
                <span>{delivery.tripData.to}</span>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${currentStyle.bg} ${currentStyle.text}`}
              >
                {currentStyle.label}
              </div>
            </div>
          </div>
          {/* Note Section */}
          <div className="text-xl font-semibold">Package Information</div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-gray-500" />
              <span>{delivery.tripData.carryWeight} kg</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-gray-500" />
              <span>
                {typeof delivery.tripData.date === "string" &&
                  delivery.tripData.date}
              </span>
            </div>
            <div className="bg-[#F0FDF4] border border-[#B9F8CF] flex flex-col items-center">
              <span className="font-light text-sm">Total Earnings</span>
              <span>{delivery.tripData.price}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
