"use client";

import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SendRequestDialogProps {
  setOpen: (open: boolean) => void;
  open: boolean;
  from: string;
  to: string;
  date: string;
  returnDate?: string;
  price: number;
  transportType: string;
  luggageSpace: number;
}

export const SendRequestDialog = ({
  setOpen,
  open,
  from,
  to,
  date,
  returnDate,
  price,
  transportType,
  luggageSpace,
}: SendRequestDialogProps) => {
  const [weight, setWeight] = useState<number | "">("");
  const [message, setMessage] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [checkboxes, setCheckboxes] = useState([false, false, false]);

  const travellerData = [
    { label: "From", value: from },
    { label: "To", value: to },
    { icon: <Calendar className="w-4 h-4" />, label: "Date", value: date },
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Return Date",
      value: returnDate || "N/A",
    },
    { label: "Price", value: `$${price}` },
    { label: "Transport Type", value: transportType },
    { label: "Luggage Space", value: `${luggageSpace} kg` },
  ];

  // ✅ Handle file upload
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prev) => [...prev, ...newImages]);
  };

  // ✅ Delete uploaded image
  const handleDeleteImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ Checkbox toggle
  const handleCheckbox = (index: number) => {
    const updated = [...checkboxes];
    updated[index] = !updated[index];
    setCheckboxes(updated);
  };

  const allChecked = checkboxes.every(Boolean);
  const formComplete = weight !== "" && message.trim() !== "" && allChecked;

  return (
    <div className="flex flex-col gap-6 font-montserrat">
      {/* Traveller info */}
      <div className="grid grid-cols-2 gap-4">
        {travellerData.map((travell, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <span className="font-semibold text-sm">{travell.label}</span>
            <div
              className={`border rounded-lg border-gray-300 p-3 opacity-50 ${
                travell.icon ? "flex items-center gap-2" : ""
              }`}
            >
              {travell.icon && travell.icon}
              <span>{travell.value}</span>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <Label className="font-semibold text-sm">Sender Product Weight</Label>
          <Input
            placeholder="Enter weight in kg"
            type="number"
            value={weight}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setWeight(Number(e.target.value))
            }
            className="outline-none"
          />
        </div>
      </div>

      {/* 🧾 Your Work Section */}
      <div className="flex flex-col gap-4">
        {/* Request message */}
        <div className="flex flex-col gap-2">
          <Label className="font-semibold text-sm">
            Write a request message
          </Label>
          <textarea
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            placeholder="Type your message..."
            className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
          />
        </div>

        {/* Upload photo */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition">
          <label className="flex flex-col items-center cursor-pointer">
            <div className="bg-gray-100 rounded-full p-3">
              <Upload className="w-5 h-5 text-gray-500" />
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-700">
              Tap To Upload
            </span>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Preview uploaded images */}
        {images.length > 0 && (
          <div className="flex gap-3 flex-wrap mt-2">
            {images.map((src, index) => (
              <div key={index} className="relative w-[50px] h-[50px]">
                <Image
                  src={src}
                  alt={`upload-${index}`}
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(index)}
                  className="absolute -top-1 -right-1 bg-white rounded-full shadow p-0.5"
                >
                  <X className="w-3 h-3 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Checkboxes */}
        <div className="flex flex-col gap-3 mt-3">
          {[
            "I confirm this package does not contain prohibited or hazardous materials.",
            "I understand that my package may be subject to inspection.",
            "I agree to comply with all shipping regulations and terms.",
          ].map((text, index) => (
            <label key={index} className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={checkboxes[index]}
                onChange={() => handleCheckbox(index)}
                className="mt-0.5"
              />
              <span className="text-gray-700">{text}</span>
            </label>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <Button
            disabled={!formComplete}
            onClick={() => {
              console.log("Form submitted");
              setOpen(false);
            }}
            className="px-6"
          >
            Send Request
          </Button>
        </div>
      </div>
    </div>
  );
};
