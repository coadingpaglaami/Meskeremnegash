// "use client";

// import Image from "next/image";
// import { usePathname } from "next/navigation";

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const isChooseUserPage = pathname.includes("choose-user"); // ✅ detect choose-user

//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Image */}
//       <Image
//         src="/landing/hero.jpg" // 🖼️ your shared background path
//         alt="Auth Background"
//         fill
//         className="object-cover"
//         priority
//       />

//       {/* Overlay Layer (if not choose-user) */}
//       {!isChooseUserPage ? (
//         <div className="relative z-10 flex flex-col md:flex-row h-full text-white">
//           {/* Left Section - Content */}
//           <div className="w-full md:w-1/2 flex justify-center items-center">
//             <div className="bg-white/10 backdrop-blur-2xl px-6 md:px-12 py-10 rounded-lg">
//               <div className="w-full ">{children}</div>
//             </div>
//           </div>

//           {/* Right Section - Branding */}
//           <div className="hidden md:flex flex-col w-1/2 p-10 items-center">
//             {/* Logo */}
//             <div className="mb-8 ">
//               <Image
//                 src="/logo.svg" // 🪪 your logo path
//                 alt="LuggageLinker Logo"
//                 width={150}
//                 height={50}
//                 className="object-contain"
//               />
//             </div>

//             {/* Welcome Text */}
//             <div className="flex flex-col text-4xl font-bold ">
//               <h3 className="tracking-wider text-primary">WELCOME TO</h3>
//               <h1 className=" mt-2">LUGGAGELINKER</h1>
//             </div>
//           </div>
//         </div>
//       ) : (
//         // Choose User Page → only background
//         <div className="relative z-10 flex items-center justify-center h-full text-white">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isChooseUserPage = pathname.includes("choose-user");

  return (
    <div className="relative w-full h-screen font-montserrat">
      {/* Background Image */}
      <Image
        src="/landing/hero.jpg"
        alt="Auth Background"
        fill
        className="object-cover"
        priority
      />

      {!isChooseUserPage ? (
        <div className="relative z-10 flex flex-col md:flex-row h-full text-white ">
          {/* Main container scales with screen */}
          <div className="flex flex-col md:flex-row w-full h-full md:justify-between px-6 md:px-12 lg:px-16">
            {/* Left Section - Form */}
            <div className="flex justify-center items-center w-full h-full md:w-[45%]">
              <div className="bg-white/10 backdrop-blur-2xl px-6 py-10 rounded-lg max-w-md w-full">
                {children}
              </div>
            </div>

            {/* Right Section - Branding */}
            <div className="hidden md:flex flex-col w-[45%] items-start justify-start p-6 lg:p-10 h-full">
              {/* Wrapper for logo + text */}
              <div className="flex flex-col items-center justify-center">
                {/* Logo */}
                <Link href="/" className="mb-6 lg:mb-8">
                  <Image
                    src="/logo.svg"
                    alt="LuggageLinker Logo"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </Link>

                {/* Welcome Text */}
                <div className="flex flex-col text-4xl font-bold leading-tight items-center">
                  <h3 className="tracking-wider text-primary">WELCOME TO</h3>
                  <h1 className="mt-2">LUGGAGELINKER</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          {children}
        </div>
      )}
    </div>
  );
}
