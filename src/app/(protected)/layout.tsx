import { SideBaar } from "@/webcomponent/ui";
import { NavBar } from "@/webcomponent/ui/NavBar";
import { ReactNode } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-gray-50 gap-6 font-montserrat">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white shadow-md">
        <SideBaar />
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 h-screen">
        {/* Navbar */}
        {/* {navbar && <header className="shrink-0">{navbar}</header>} */}
        <header className="shrink-0">
          <NavBar />
        </header>

        {/* Scrollable children */}
        <main className="flex-1 overflow-auto bg-gray-50 max-md:px-4">
          {children}
        </main>
      </div>
    </div>
  );
}
