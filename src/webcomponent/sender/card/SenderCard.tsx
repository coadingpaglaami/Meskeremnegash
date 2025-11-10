import {
  ArrowRight,
  CalendarDays,
  Package,
  StickyNote,
  Star,
} from "lucide-react";

interface SenderCardProps {
  name: string;
  status: "Verified" | "Delivered" | "In progress" | string;
  rating?: number;
  from: string;
  to: string;
  date: string;
  price: number;
  note: string;
  weight: number;
}

export const SenderCard = ({
  name,
  status,
  rating,
  from,
  to,
  date,
  price,
  note,
  weight,
}: SenderCardProps) => {
  // 🎨 Conditional styles for status
  const currentStyle =
    status === "Delivered"
      ? { bg: "bg-[#00A63E]", text: "text-white" }
      : status === "In Progress"
      ? { bg: "bg-[#FFF0D3]", text: "text-[#FEB423]" }
      : { bg: "bg-[#299D4E66]", text: "text-[#299D4E]" };

  // ⭐ Generate stars based on rating
  const renderStars = (rating?: number) => {
    if (!rating) return null;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    return (
      <div className="flex items-center gap-0.5 mt-1">
        {Array.from({ length: totalStars }, (_, i) => {
          if (i < fullStars) {
            return <Star key={i} className="w-4 h-4 text-black fill-black" />;
          } else if (i === fullStars && halfStar) {
            return (
              <Star
                key={i}
                className="w-4 h-4 text-black fill-black opacity-60"
              />
            );
          } else {
            return <Star key={i} className="w-4 h-4 text-gray-300" />;
          }
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3 ">
      {/* 1️⃣ Header Row */}
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-[#FEB42333]">
          <StickyNote className="text-[#FEB423] w-4 h-4" />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-base text-gray-900">{name}</h3>

          <div className="flex items-center text-gray-700 text-sm gap-2">
            <span>{from}</span>
            <ArrowRight className="w-4 h-4 text-gray-500" />
            <span>{to}</span>
          </div>

          <div
            className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${currentStyle.bg} ${currentStyle.text}`}
          >
            {status}
          </div>
        </div>
      </div>

      {/* 2️⃣ Details Section */}
      <div className="flex justify-between items-center mt-2 text-sm text-gray-700 px-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-gray-500" />
            <span>{weight ?? 0} kg</span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-gray-500" />
            <span>{date}</span>
          </div>

          <span className="line-clamp-1 text-gray-600">{note}</span>

          {renderStars(rating)}
        </div>

        <div className="text-green-600 font-semibold text-base">${price}</div>
      </div>
    </div>
  );
};
