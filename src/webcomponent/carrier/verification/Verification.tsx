"use client";

import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
import { CheckCircle, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Verification = () => {
  const router = useRouter();
  const verificationDAta = [
    {
      id: 1,
      title: "Accept Requests",
      description: "Start earning by carrying packages",
      bgColor: "#EFF6FF",
      iconbg: "#3372FC33",
      icontext: "#3372FC",
      icon: <CheckCircle2 size={36} />,
    },
    {
      id: 2,
      title: "Build Trust",
      description: "Verified badge increases bookings",
      bgColor: "#F0FDF4",
      iconbg: "#119F6833",
      icontext: "#119F68",
      icon: <Shield size={36} />,
    },
    {
      id: 3,
      title: "Higher Payouts",
      description: "Access premium delivery opportunities",
      bgColor: "#FAF5FF",
      iconbg: "#9C1AFA33",
      icontext: "#9C1AFA",
      icon: <CheckCircle size={36} />,
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-16 md:px-6 px-4 ">
      {/* Section Heading */}
      <HeadingSection
        heading="Identity Verification"
        subheading="Complete verification to accept shipments & get higher payouts."
      />

      {/* Unverified Badge */}
      <span className="rounded-lg bg-gray-300 px-6 py-2 text-white text-sm font-medium w-fit">
        Unverified
      </span>

      {/* Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full ">
        {verificationDAta.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center text-center gap-3 rounded-xl border backdrop-blur-sm p-8 transition-transform duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: item.bgColor,
              borderColor: "#D4D4D466",
            }}
          >
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full"
              style={{
                backgroundColor: item.iconbg,
                color: item.icontext,
              }}
            >
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Start Verification Button */}
      <Button className="mt-4 w-fit self-center" size="lg" onClick={()=>router.push('/verification/personal')}>
        Start Verification
      </Button>
    </div>
  );
};
