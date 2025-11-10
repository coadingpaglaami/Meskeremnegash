"use client";

import {
  ArrowRight,
  CalendarDays,
  MessageCircleMoreIcon,
  Package,
  Phone,
  StickyNote,
  Star,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface SenderDilogCardProps {
  name: string;
  status: "Verified" | "Delivered" | "In progress" | string;
  phone: string;
  email: string;
  from: string;
  to: string;
  date: string;
  weight: number;
}

export const SenderDilogCard = ({
  name,
  status,
  phone,
  email,
  from,
  to,
  date,
  weight,
}: SenderDilogCardProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hovered, setHovered] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const currentStyle =
    status === "Delivered"
      ? { bg: "bg-[#00A63E]", text: "text-white" }
      : status === "In Progress"
      ? { bg: "bg-[#FFF0D3]", text: "text-[#FEB423]" }
      : { bg: "bg-[#299D4E66]", text: "text-[#299D4E]" };

  const data = [
    { icon: Phone, text: `${phone}` },
    { icon: MessageCircleMoreIcon, text: email },
    { icon: Package, text: `${weight} kg` },
    { icon: CalendarDays, text: date },
  ];

  const handleSend = () => {
    if (!rating) {
      alert("Please rate before submitting.");
      return;
    }
    console.log({ rating, feedback });
    alert("Review submitted successfully!");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Carrier Information */}
      <div>
        <span className="text-lg font-semibold">Carrier Information</span>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-[#FEB42333]">
                <StickyNote className="text-[#FEB423] w-4 h-4" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base text-gray-900">
                  {name}
                </h3>
                <div className="flex items-center text-gray-700 text-sm gap-2">
                  <span>{from}</span>
                  <ArrowRight className="w-4 h-4 text-gray-500" />
                  <span>{to}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${currentStyle.bg} ${currentStyle.text}`}
          >
            {status}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <span className="text-lg font-semibold">Contact Information</span>
        <div className="flex flex-col gap-2 mt-2">
          {data.slice(0, 2).map((item, index) => (
            <div className="flex items-center gap-3" key={index}>
              <item.icon className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Package Info */}
      <div>
        <span className="text-lg font-semibold">Package Information</span>
        <div className="flex flex-col gap-2 mt-2">
          {data.slice(2, 4).map((item, index) => (
            <div className="flex items-center gap-3" key={index}>
              <item.icon className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Section */}
      {status === "Delivered" && (
        <div className="pt-4 mt-2">
          <span className="text-lg font-semibold">Rate user</span>
          <div className="space-y-4 mt-3">
            {/* ⭐ Star Rating */}
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 cursor-pointer transition-all ${
                    (hovered || rating) >= star
                      ? "fill-black text-black"
                      : "text-gray-400"
                  }`}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>

            {/* 📝 Feedback Textarea */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="experience" className="text-sm text-gray-600">
                Write your experience
              </Label>
              <Textarea
                id="experience"
                value={feedback}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFeedback(e.target.value)
                }
                placeholder="Share your feedback..."
                className="resize-none min-h-[100px]"
              />
            </div>

            {/* 📤 Send Button */}
            <div className="flex justify-end">
              <Button onClick={handleSend}>Send</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
