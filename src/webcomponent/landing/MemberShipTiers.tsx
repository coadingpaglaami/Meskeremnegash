"use client";

import { Check } from "lucide-react";
import Image from "next/image";

export const MemberShipTiers = () => {
  const data = [
    {
      iconbg: "#1A1A1A",
      type: "Free",
      price: "$0/forever",
      benefits: [
        "Access to basic features",
        "Community support",
        "Limited storage space",
        "Standard performance",
      ],
    },
    {
      iconbg: "#8AD1A4",
      type: "Silver",
      price: "$9.99/month",
      benefits: [
        "All Free tier benefits",
        "Access to premium features",
        "Priority email support",
        "Increased storage space",
      ],
    },
    {
      iconbg: "#EF960A",
      type: "Gold",
      price: "$19.99/month",
      benefits: [
        "All Silver tier benefits",
        "24/7 priority support",
        "Advanced analytics",
        "Unlimited storage space",
      ],
    },
    {
      iconbg: "#9638EC",
      type: "Platinum",
      price: "$29.99/month",
      benefits: [
        "All Gold tier benefits",
        "Dedicated account manager",
        "Custom integrations",
        "Early access to new features",
      ],
    },
  ];

  return (
    <div className="bg-[#253D2C] py-16 px-6">
      {/* Header */}
      <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
        Membership Tiers
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.map((tier, index) => {
          // Split the price into number and the trailing text
          const [priceNumber, priceSuffix] = tier.price.split("/");

          return (
            <div
              key={index}
              className="flex flex-col gap-4 bg-white/5 p-6 rounded-xl text-white"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                style={{ backgroundColor: tier.iconbg }}
              >
                <Image
                  src="/landing/badges.svg"
                  alt="Badge Icon"
                  width={32}
                  height={32}
                />
              </div>

              {/* Type */}
              <h3 className="text-xl font-semibold">{tier.type}</h3>

              {/* Price */}
              <p className="text-3xl font-semibold">
                {priceNumber}
                <span className="text-white/60 text-xl">/{priceSuffix}</span>
              </p>

              {/* Benefits */}
              <div className="flex flex-col gap-2 mt-4">
                {tier.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
