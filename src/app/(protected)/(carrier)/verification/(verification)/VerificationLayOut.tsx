// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState, createContext, useContext } from "react";
// import { User, IdCard, Camera, Home, CheckCircle, Info } from "lucide-react";
// import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
// import { Button } from "@/components/ui/button";

// // ------------------- Verification Context -------------------
// interface VerificationContextType {
//   isStepComplete: boolean;
//   setStepComplete: (complete: boolean) => void;
// }

// const VerificationContext = createContext<VerificationContextType | undefined>(
//   undefined
// );

// export const useVerification = () => {
//   const ctx = useContext(VerificationContext);
//   if (!ctx)
//     throw new Error("useVerification must be used within VerificationLayOut");
//   return ctx;
// };

// // ------------------- Steps -------------------
// const steps = [
//   { key: "personal", label: "Personal", icon: User },
//   { key: "idverification", label: "ID Verification", icon: IdCard },
//   { key: "selfie", label: "Selfie", icon: Camera },
//   { key: "address", label: "Address", icon: Home },
//   { key: "review", label: "Review", icon: CheckCircle },
// ];

// export default function VerificationLayOut({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   // Completed steps persistence
//   const [completed, setCompleted] = useState<string[]>(() => {
//     if (typeof window !== "undefined") {
//       return JSON.parse(localStorage.getItem("verifiedSteps") || "[]");
//     }
//     return [];
//   });

//   // Step completion state controlled by children
//   const [isStepComplete, setStepComplete] = useState(false);

//   const currentStep = steps.findIndex((s) => pathname.includes(s.key));

//   useEffect(() => {
//     localStorage.setItem("verifiedSteps", JSON.stringify(completed));
//   }, [completed]);

//   // Navigate next
//   const handleNext = () => {
//     if (!isStepComplete) return;

//     if (currentStep < steps.length - 1) {
//       const next = steps[currentStep + 1].key;
//       setCompleted((prev) => [...new Set([...prev, steps[currentStep].key])]);
//       setStepComplete(false); // reset for next step
//       router.push(`/verification/${next}`);
//     }
//   };

//   // Navigate previous
//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       const prev = steps[currentStep - 1].key;
//       router.push(`/verification/${prev}`);
//     }
//   };

//   // Dynamic breadcrumb titles
//   const breadcrumbTitle = steps[currentStep]?.label || "Verification";
//   const breadcrumbSubtitle = `Step ${currentStep + 1} of ${steps.length}`;

//   return (
//     <VerificationContext.Provider value={{ isStepComplete, setStepComplete }}>
//       <div className="flex flex-col py-12 px-4 gap-8">
//         {/* -------- Breadcrumb -------- */}
//         <HeadingSection
//           heading={breadcrumbTitle}
//           subheading={breadcrumbSubtitle}
//         />

//         {/* -------- Progress Steps -------- */}
//         <div className="flex items-start justify-between w-full max mb-10 relative">
//           {steps.map((step, i) => {
//             const Icon = step.icon;
//             const done = completed.includes(step.key) || i < currentStep;
//             const active = i === currentStep;

//             return (
//               <div
//                 key={step.key}
//                 className="flex-1 flex flex-col items-start justify-center relative"
//               >
//                 {/* Circle + Icon */}
//                 <div
//                   className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 text-white z-10
//                   ${
//                     done
//                       ? "bg-[#00A63E]"
//                       : active
//                       ? "bg-blue-500"
//                       : "bg-[#C0C0C0]"
//                   }`}
//                 >
//                   <Icon className="w-6 h-6" />
//                 </div>

//                 {/* Label */}
//                 <span className="text-sm mt-2 text-gray-700 font-medium text-center">
//                   {step.label}
//                 </span>

//                 {/* Connector line */}
//                 {i < steps.length - 1 && (
//                   <div
//                     className={`absolute top-6 w-full h-[3px] transition-all duration-500 ${
//                       done ? "bg-green-500" : "bg-[#C0C0C0]"
//                     }`}
//                   />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//         <div className="bg-[#EFF6FF] border border-[#155DFC] self-center flex items-center gap-2 px-4 py-2 rounded-lg mb-6">
//           <Info className="w-5 h-5 text-[#155DFC]" />{" "}
//           <span>
//             This information will be used to verify your identity & must match
//             your official documents.
//           </span>
//         </div>
//         {/* -------- Step Content -------- */}
//         <div className="w-full md:max-w-[45vw] mx-auto bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
//           {children}

//           {/* -------- Navigation Buttons -------- */}
//           <div className="flex justify-center gap-2 mt-8">
//             <Button
//               onClick={handlePrevious}
//               disabled={currentStep === 0}
//               variant="outline_black"
//               className={`${
//                 currentStep === 0
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               Previous
//             </Button>

//             {currentStep < steps.length - 1 ? (
//               <Button onClick={handleNext} disabled={!isStepComplete}>
//                 Next
//               </Button>
//             ) : (
//               <Button
//                 onClick={() => alert("Verification Complete!")}
//                 disabled={!isStepComplete}
//                 className="bg-green-600 hover:bg-green-700 text-white"
//               >
//                 Finish
//               </Button>
//             )}
//           </div>
//         </div>
//       </div>
//     </VerificationContext.Provider>
//   );
// }

"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";
import { User, IdCard, Camera, Home, CheckCircle, Info } from "lucide-react";
import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ------------------- Verification Context -------------------
interface VerificationContextType {
  isStepComplete: boolean;
  setStepComplete: (complete: boolean) => void;
}

const VerificationContext = createContext<VerificationContextType | undefined>(
  undefined
);

// ------------------- Hook -------------------
export const useVerification = () => {
  const ctx = useContext(VerificationContext);
  if (!ctx)
    throw new Error("useVerification must be used within VerificationLayOut");
  return ctx;
};

// ------------------- Steps -------------------
const steps = [
  { key: "personal", label: "Personal", icon: User },
  { key: "idverification", label: "ID Verification", icon: IdCard },
  { key: "selfie", label: "Selfie", icon: Camera },
  { key: "address", label: "Address", icon: Home },
  { key: "review", label: "Review", icon: CheckCircle },
];

export default function VerificationLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Completed steps persistence
  const [completed, setCompleted] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("verifiedSteps") || "[]");
    }
    return [];
  });

  // Step completion state controlled by children
  const [isStepComplete, setStepComplete] = useState(false);

  const currentStep = steps.findIndex((s) => pathname.includes(s.key));

  useEffect(() => {
    localStorage.setItem("verifiedSteps", JSON.stringify(completed));
  }, [completed]);

  // Navigate next
  const handleNext = () => {
    if (!isStepComplete) return;

    if (currentStep < steps.length - 1) {
      const next = steps[currentStep + 1].key;
      setCompleted((prev) => [...new Set([...prev, steps[currentStep].key])]);
      setStepComplete(false); // reset for next step
      router.push(`/verification/${next}`);
    }
  };

  // Navigate previous
  const handlePrevious = () => {
    if (currentStep > 0) {
      const prev = steps[currentStep - 1].key;
      router.push(`/verification/${prev}`);
    }
  };

  // --------- Conditional Heading & Subheading ---------
  let heading = "";
  let subheading: string | React.ReactNode = "";


  switch (steps[currentStep]?.key) {
    case "personal":
      heading = "Personal Details";
      subheading =
        "Make sure the information matches your government ID exactly.";
      break;
    case "idverification":
      heading = "Government ID Verification";
      subheading = "Upload a clear photo of your government-issued ID";
      break;
    case "selfie":
      heading = "Take a Quick Selfie";
      subheading =
        "Make sure you’re in good lighting. Remove hats or sunglasses.";
      break;
    case "address":
      heading = "Verify Your Current Address";
      subheading =
        "Upload a recent utility bill or document showing your name & address.";
      break;
    default:
      heading = "Verification";
      subheading = "";
  }

  return (
    <VerificationContext.Provider value={{ isStepComplete, setStepComplete }}>
      <div className="flex flex-col py-8 px-4 gap-4 sm:gap-8">
        {/* -------- Heading Section -------- */}
        <HeadingSection heading={heading} subheading={subheading} />

        {/* -------- Progress Steps -------- */}
        <div className="flex flex-wrap sm:flex-nowrap items-start justify-between w-full mb-6 relative gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const done = completed.includes(step.key) || i < currentStep;
            const active = i === currentStep;

            return (
              <div
                key={step.key}
                className="flex-1 flex flex-col items-center justify-center relative min-w-[50px]"
              >
                {/* Circle + Icon */}
                <div
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 text-white z-10",
                    done
                      ? "bg-[#00A63E]"
                      : active
                      ? "bg-blue-500"
                      : "bg-[#C0C0C0]"
                  )}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Label */}
                <span className="text-xs sm:text-sm mt-1 text-gray-700 font-medium text-center">
                  {step.label}
                </span>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "absolute top-5 sm:top-6 left-[calc(50%+20px)] w-full h-[3px] transition-all duration-500",
                      done ? "bg-green-500" : "bg-[#C0C0C0]"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-[#EFF6FF] border border-[#155DFC] self-center flex items-center gap-2 px-4 py-2 rounded-lg mb-6">
          {" "}
          <Info className="w-5 h-5 text-[#155DFC]" />{" "}
          <span>
            {pathname !== "/verification/review"
              ? "This information will be used to verify your identity & must match your official documents."
              : "Your submitted documents are currently under review. Our admin team is checking the details and will update you within 2–3 working days. Thank you for your patience and cooperation."}
          </span>
        </div>

        {/* -------- Step Content -------- */}
        {pathname !== "/verification/review" && (
          <div className="w-full md:max-w-[45vw] mx-auto bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
            {children}

            {/* -------- Navigation Buttons -------- */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 mt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                variant="outline_black"
                className={`${
                  currentStep === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                Previous
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button onClick={handleNext} disabled={!isStepComplete}>
                  Next
                </Button>
              ) : (
                <Button
                  onClick={() => alert("Verification Complete!")}
                  disabled={!isStepComplete}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Finish
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </VerificationContext.Provider>
  );
}
