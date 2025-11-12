"use client";
import { usePathname } from "next/navigation";
import { Home, ShieldBan } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AccountSidebaar = () => {
  const pathname = usePathname();
  const accountLink = [
    { label: "Profile", href: "/profile", icon: Home },
    { label: "Security", href: "/security", icon: ShieldBan },
  ];
  return (
    <div className="flex flex-col h-full bg-white border-r py-6 px-4">
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="LuggageLinker Logo"
            width={130}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2">
        {accountLink.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200
                ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-black hover:bg-gray-100"
                }`}
            >
              <Icon
                className={`w-5 h-5 ${isActive ? "text-white" : "text-black"}`}
              />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
