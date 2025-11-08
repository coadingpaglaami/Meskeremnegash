import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TripDetails } from "@/interface/Trip";

export const TripCard = ({ from, to, date, note }: TripDetails) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all gap-3">
      {/* 1️⃣ Icon */}
      <div className="mb-2">
        <Image
          src="/carrier/tripdetails.svg"
          alt="Trip Icon"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* 2️⃣ Route Line */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-base font-medium">{from}</span>
        <ArrowRight className="w-5 h-5 text-gray-500" />
        <span className="text-base font-medium">{to}</span>
      </div>

      {/* 3️⃣ Date */}
      <div className="flex items-center gap-2">
        <Image
        src='/carrier/calender.svg'
        alt="calender"
        height={15}
        width={15}
        className="" />
        <p className="text-sm text-gray-600 ">
          {typeof date === "string" && date}
        </p>
      </div>

      {/* 4️⃣ Note */}
      <div className="flex items-center gap-2">
        <Image
        src='/carrier/notes.svg'
        alt="note"
        height={15}
        width={15}
        className="" />
<p className="text-sm text-gray-500 line-clamp-1">{note}</p>
      </div>
      
    </div>
  );
};
