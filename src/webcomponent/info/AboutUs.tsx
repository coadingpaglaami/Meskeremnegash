"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export const AboutUs = () => {
  const [carriers, setCarriers] = useState(0);
  const [senders, setSenders] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // 🔹 Animate numbers
  const animateValue = (setter: (val: number) => void, end: number, duration: number) => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setter(end);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  // 🔹 Trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue(setCarriers, 20000, 1500);
          animateValue(setSenders, 15000, 1500);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full flex flex-col md:flex-row md:justify-around md:items-start px-6 md:px-16 lg:px-32 pt-16 md:pt-24"
    >
      {/* Left Stat */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left mb-32 md:mb-0">
        <h3 className="text-3xl font-bold">{carriers.toLocaleString()}+</h3>
        <p className="text-base">Carriers</p>
      </div>

      {/* Center Image (overlapping breadcrumb) */}
      <div className="relative flex justify-center -mt-24 md:-mt-52 z-10">
        <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 aspect-3/4">
          <Image
            src="/about/about.jpg"
            alt="About Us"
            fill
            className="object-cover shadow-lg rounded-lg"
          />
        </div>
      </div>

      {/* Right Stat */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left mt-10 md:mt-0">
        <h3 className="text-3xl font-bold">{senders.toLocaleString()}+</h3>
        <p className="text-base">Senders</p>
      </div>
    </div>
  );
};
