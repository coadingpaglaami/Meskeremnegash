"use client";

import { DelivaryData } from "@/interface/DelivaryData";
import { CalendarDays, Package, ArrowRight, StickyNote } from "lucide-react";
import { statusStyles } from "@/lib/statusColor";
interface DeliveryCardProps {
  data: DelivaryData;
}

export const DeliveryCard = ({ data }: DeliveryCardProps) => {
  const { name, status, tripData } = data;

  // Status colors based on condition


  const currentStyle = statusStyles[status!==undefined?status:"pending"];

  return (
    <div className="flex flex-col gap-2 ">
      {/* 1️⃣ Note Row */}
      <div className="flex items-start gap-2">
        <div className="p-2 rounded-full bg-[#FEB42333]">
          <StickyNote className="text-[#FEB423] w-4 h-4" />
        </div>
        {/* <span className="text-sm text-gray-700">{tripData.note}</span> */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-base text-gray-900">{name}</h3>
          <div className="flex items-center text-gray-700 text-sm gap-2">
            <span>{tripData.from}</span>
            <ArrowRight className="w-4 h-4 text-gray-500" />
            <span>{tripData.to}</span>
          </div>
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${currentStyle.bg} ${currentStyle.text}`}
          >
            {currentStyle.label}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 text-sm text-gray-700 px-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-gray-500" />
            <span>{tripData.carryWeight} kg</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-gray-500" />
            <span>{typeof tripData.date === "string" && tripData.date}</span>
          </div>
        </div>
        <div className="text-green-600 font-semibold text-base">
          ${tripData.price}
        </div>
      </div>
    </div>
  );
};
