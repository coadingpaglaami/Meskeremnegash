"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  const data = [
    {
      icon: "/landing/packages.svg",
      title: "Send Love",
      description: "Tell us what you want to send to your family and where",
    },
    {
      icon: "/landing/air.svg",
      title: "Find a Helper",
      description: "We connect with trusted travelers going your way",
    },
    {
      icon: "/landing/messages.svg",
      title: "Stay connected",
      description: "Chat with your traveler and track your package safety",
    },
  ];

  return (
    <div>
        {/* Content container */}
        <div className="flex flex-col relative  md:h-screen font-montserrat" style={{ backgroundImage: "url('/landing/hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"/>
        <div className=" relative z-20 py-20 mt-20 flex flex-col justify-between gap-5 h-full">
          {/* 1st child - Welcome Text */}
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold text-primary md:leading-20
            ">
              Welcome to Your{" "} <br className="max-md:hidden"/>
              <span className="text-white ">LuggageLinker Family</span> 
            </h1>
          </div>

          {/* 2nd child - Description */}
          <div className="text-center mt-5 text-white text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto">
            Safely send gifts and essentials to your loved ones in Ethiopia and
            Eritrea with the help of trusted travelers from our community.
          </div>

          {/* 3rd child - Buttons */}
          <div className="flex gap-6 mt-8 justify-center">
            <Button variant="outline_white" className="px-6 py-3">
              Find Sender
            </Button>
            <Button className="px-6 py-3">Find Carrier</Button>
          </div>

          {/* 4th child - Data Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-12 gap-4 px-6 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-8 rounded-xl text-white"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
            </div>

        </div>
    </div>
  );
};
