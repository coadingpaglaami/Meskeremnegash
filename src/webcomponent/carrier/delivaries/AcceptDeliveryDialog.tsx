"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, StickyNote } from "lucide-react";
import { DelivaryData } from "@/interface/DelivaryData";
import { statusStyles } from "@/lib/statusColor";

interface AcceptDeliveryDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  delivery: DelivaryData | null;
  showCheckbox?: boolean; // Only show checkboxes if true
}

export const AcceptDeliveryDialog = ({
  open,
  setOpen,
  delivery,
  showCheckbox = false,
}: AcceptDeliveryDialogProps) => {
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);

  const currentStyle = statusStyles[delivery?.status || "pending"];

  const canSubmit = firstCheck && secondCheck;

  if (!delivery) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl font-montserrat">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Sender Information
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
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-[#FEB42333]">
              <MessageSquare className="text-[#FEB423] w-5 h-5" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {delivery.tripData.note}
            </p>
          </div>

          {/* Images */}
          {delivery.images && (
            <div className="grid grid-cols-4 gap-3">
              {delivery.images.map((img, index) => (
                <div key={index} className="w-full h-[100px] relative">
                  <Image
                    src={img}
                    alt={`Package image ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Checkboxes only if showCheckbox */}
          {showCheckbox && (
            <div className="flex flex-col gap-3 mt-4">
              <label className="flex items-start gap-3 text-sm text-gray-700">
                <Checkbox
                  checked={firstCheck}
                  onCheckedChange={(val) => setFirstCheck(!!val)}
                />
                <span>
                  I have reviewed the sender’s declaration and confirm I can
                  legally carry this package.
                </span>
              </label>
              <label className="flex items-start gap-3 text-sm text-gray-700">
                <Checkbox
                  checked={secondCheck}
                  onCheckedChange={(val) => setSecondCheck(!!val)}
                />
                <span>
                  I understand I am responsible for the package contents as per
                  TSA regulations.
                </span>
              </label>
            </div>
          )}
        </div>

        <DialogFooter>
          {showCheckbox && (
            <div className="flex gap-3 items-center">
              <Button
                disabled={!canSubmit}
                onClick={() => {
                  setOpen(false);
                  console.log("Accepted Delivery:", delivery);
                }}
              >
                Accept
              </Button>
              <Button variant="outline_black" onClick={() => setOpen(false)}>
                Reject
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
