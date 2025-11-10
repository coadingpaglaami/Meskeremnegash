import { NavBar } from "@/webcomponent/ui";

export default function AccountLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-gray-50 gap-6 font-montserrat">
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white shadow-md"></aside>
      <div className="flex flex-col flex-1 h-screen">
        <header className="shrink-0 md:mx-4">
          <NavBar />
          {/* NavBar can be added here */}
        </header>

        <main className="flex-1 overflow-auto bg-gray-50 max-md:px-4 font-montserrat">
          {children}
        </main>
      </div>
    </div>
  );
}
