"use client";
import { usePathname } from "next/navigation";
import { SideBaar, AccountSidebaar, NavBar } from "@/webcomponent/ui";
import { ReactNode } from "react";

export default function ProtectedLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const accountPaths = ["/profile", "/security"];
  const showAccountPath = accountPaths.some(path => pathname.startsWith(path));

  return (
    <div className="flex h-screen w-full bg-gray-50 gap-6 font-montserrat">
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white shadow-md">
        {showAccountPath ? <AccountSidebaar /> : <SideBaar />}
      </aside>
      <div className="flex flex-col flex-1 h-screen">
        <header className="shrink-0">
          <NavBar />
        </header>
        <main className="flex-1 overflow-auto bg-gray-50 max-md:px-4 font-montserrat">
          {children}
        </main>
      </div>
    </div>
  );
}