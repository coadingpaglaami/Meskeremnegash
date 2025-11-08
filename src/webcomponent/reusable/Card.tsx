import Image from "next/image";
import { CardProps } from "@/interface/Card";

export const Card = ({ icon, title, sugtitle, quantity }: CardProps) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl shadow-sm p-4 w-full sm:w-auto min-h-40">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={35}
          className="object-contain"
        />
        <span className="text-2xl md:text-4xl font-semibold">{quantity}</span>
      </div>

      {/* Title and Subtitle */}
      <div className="flex flex-col items-center text-center mt-6">
        <h3 className="text-xl font-normal">{title}</h3>
        {sugtitle && <p className="text-sm text-gray-500">{sugtitle}</p>}
      </div>
    </div>
  );
};
