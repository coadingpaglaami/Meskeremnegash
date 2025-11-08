"use client";

import { Clock, DollarSign, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useState } from "react";

export const EarningCard = () => {
  const [open, setOpen] = useState(false);

  const cardData = [
    {
      icon: <Wallet className="w-5 h-5 text-blue-600" />,
      title: "Total Earnings",
      money: "$140.40",
      text: "All-time income from trips",
    },
    {
      icon: <Clock className="w-5 h-5 text-yellow-500" />,
      title: "Pending Earnings",
      money: "$20.40",
      text: "Earnings yet to be processed",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-green-600" />,
      title: "Available Balance",
      money: "$120.00",
      text: "Ready for withdrawal",
      withdraw: true,
    },
  ];

  const handleWithdraw = () => {
    setOpen(false);
    toast.success("Withdrawn the amount successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col justify-between border rounded-2xl p-4 shadow-sm w-full md:w-1/3 hover:shadow-md transition-all"
        >
          {/* Top Section */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-100 rounded-full">{card.icon}</div>
            <h3 className="font-semibold text-gray-800">{card.title}</h3>
          </div>

          {/* Money */}
          <div className="mt-3 text-2xl font-bold text-gray-900">
            {card.money}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-1">{card.text}</p>

          {/* Withdraw Button (only for the last one) */}
          {card.withdraw && (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="mt-4 mx-auto">Withdraw Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[380px] font-montserrat">
                <DialogHeader>
                  <DialogTitle>Confirm Withdrawal</DialogTitle>
                  <DialogDescription>
                    You are about to withdraw{" "}
                    <span className="font-semibold text-gray-900">
                      {card.money}
                    </span>
                    . Are you sure you want to continue?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">No</Button>
                  </DialogClose>
                  <Button onClick={handleWithdraw}>Yes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      ))}
    </div>
  );
};
