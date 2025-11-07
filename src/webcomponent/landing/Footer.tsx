"use client";

import Image from "next/image";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon className="w-5 h-5" /> },
    { name: "YouTube", icon: <YoutubeIcon className="w-5 h-5" /> },
    { name: "Instagram", icon: <InstagramIcon className="w-5 h-5" /> },
  ];

  const discoveryLinks = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "TSA Regulation", href: "/tsa-regulation" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <footer className="bg-white text-black px-6 pt-20">
      <div className=" ">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Category 1: Discovery */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Discovery</h3>
            <ul className="space-y-3">
              {discoveryLinks.map((link) => (
                <li key={link.name} className="group">
                  <a
                    href={link.href}
                    className="text-gray-700 group-hover:text-primary relative inline-block transition-all"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Category 2: Payment Methods */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Payment Methods</h3>
            <div className="flex gap-6">
              <Image
                src="/landing/mastercard.svg"
                alt="Mastercard"
                width={40}
                height={25}
              />
              <Image
                src="/landing/paypal.svg"
                alt="PayPal"
                width={40}
                height={25}
              />
              <Image
                src="/landing/visa.svg"
                alt="Visa"
                width={40}
                height={25}
              />
            </div>
          </div>

          {/* Category 3: Office Location */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Office Location</h3>
            <p>House 58, Road 6 & 11</p>
            <p>Block C, Aliver, Germany</p>
          </div>

          {/* Category 4: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <p
              onClick={() => {
                // Scroll to footer contact section
                const contactSection =
                  document.getElementById("footer-contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-blue-600 cursor-pointer"
            >
              Info@mail.com
            </p>
            <p className="text-blue-600">+5203641-955841</p>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="bg-black p-2 rounded-full text-white hover:bg-gray-800 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Border */}
        <div className="border-t border-black my-8 pt-2">
          <div className="flex justify-between items-center">
            {/* Left: Logo */}
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className=""
            />

            {/* Right: Copyright */}
            <p className="text-sm">
              © 2025 LuggageLinker. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
