// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { activeDelivaryData } from "@/lib/activeDelivaryData";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { SenderDilogCard } from "../card/DilogCard";

// export const ActiveDelivaryTable = () => {
//   const currentStyle =
//     status === "Delivered"
//       ? { bg: "bg-[#00A63E]", text: "text-white" }
//       : status === "In Progress"
//       ? { bg: "bg-[#FFF0D3]", text: "text-[#FEB423]" }
//       : { bg: "bg-[#299D4E66]", text: "text-[#299D4E]" };

//   return (
//     <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
//       <div className="overflow-x-auto max-md:max-w-[85vw]">
//         <Table className=" bg-white overflow-x-auto">
//           <TableHeader>
//             <TableRow className="rounded-tl-md">
//               <TableHead className="border-y border-l text-gray-800 font-semibold ">
//                 Traveller
//               </TableHead>
//               <TableHead className="border-y text-gray-800 font-semibold">
//                 Luggage Weight
//               </TableHead>
//               <TableHead className="border-y text-gray-800 font-semibold">
//                 Rate (kg)
//               </TableHead>
//               <TableHead className="border-y text-gray-800 font-semibold">
//                 Status
//               </TableHead>
//               <TableHead className="border-y border-r text-gray-800 font-semibold text-center">
//                 Action
//               </TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {activeDelivaryData.map(
//               ({
//                 name,
//                 senderWeight,
//                 senderPrice,
//                 delivarystatus,
//                 senderId,
//                 tripData,
//                 email,
//                 contactInfo,
//               }) => {
//                 const style = currentStyle[delivarystatus];

//                 return (
//                   <TableRow key={senderId} className="border-t">
//                     {/* Route */}
//                     <TableCell className="border-y border-l align-top py-3">
//                       <div className="flex flex-col">
//                         <span className="font-semibold text-gray-900">
//                           {name}
//                         </span>
//                         <span className="text-sm text-gray-500 mt-1">
//                           {typeof tripData.date === "string" && tripData.date}
//                         </span>
//                       </div>
//                     </TableCell>

//                     {/* Luggage Weight */}
//                     <TableCell className="border-y align-top py-3">
//                       {senderWeight} kg
//                     </TableCell>

//                     {/* Rate */}
//                     <TableCell className="border-y align-top py-3">
//                       ${senderPrice}
//                     </TableCell>

//                     {/* Status */}
//                     <TableCell className="border-y align-top py-3">
//                       <div
//                         className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${style.bg} ${style.text}`}
//                       >
//                         {style.label}
//                       </div>
//                     </TableCell>

//                     {/* Action */}
//                     <TableCell className="border-y text-center border-r py-3">
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <Button variant="outline">View Details</Button>
//                         </DialogTrigger>
//                       </Dialog>
//                       <DialogContent className="max-w-md font-montserrat">
//                         {/* Dialog content can be added here */}
//                         <SenderDilogCard
//                           date={
//                             typeof tripData.date === "string"
//                               ? tripData.date
//                               : ""
//                           }
//                           from={tripData.from}
//                           to={tripData.to}
//                           name={name}
//                           weight={senderWeight || 0}
//                           status={delivarystatus || ""}
//                           email={email || ""}
//                           phone={contactInfo || ""}
//                         />
//                       </DialogContent>
//                     </TableCell>
//                   </TableRow>
//                 );
//               }
//             )}
//           </TableBody>
//         </Table>

//         {/* ----------- DIALOGS ----------- */}
//       </div>
//     </div>
//   );
// };


"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { activeDelivaryData } from "@/lib/activeDelivaryData";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SenderDilogCard } from "../card/DilogCard";

export const ActiveDelivaryTable = () => {
  // ✅ Define styles for each status
  const statusStyles: Record<
    string,
    { bg: string; text: string; label: string }
  > = {
    Delivered: { bg: "bg-[#00A63E]", text: "text-white", label: "Delivered" },
    "In Progress": {
      bg: "bg-[#FFF0D3]",
      text: "text-[#FEB423]",
      label: "In Progress",
    },
    Verified: {
      bg: "bg-[#299D4E66]",
      text: "text-[#299D4E]",
      label: "Verified",
    },
    default: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      label: "Unknown",
    },
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="overflow-x-auto max-md:max-w-[85vw]">
        <Table className="bg-white overflow-x-auto">
          <TableHeader>
            <TableRow className="rounded-tl-md">
              <TableHead className="border-y border-l text-gray-800 font-semibold ">
                Traveller
              </TableHead>
              <TableHead className="border-y text-gray-800 font-semibold">
                Luggage Weight
              </TableHead>
              <TableHead className="border-y text-gray-800 font-semibold">
                Rate (kg)
              </TableHead>
              <TableHead className="border-y text-gray-800 font-semibold">
                Status
              </TableHead>
              <TableHead className="border-y border-r text-gray-800 font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {activeDelivaryData.map(
              ({
                name,
                senderWeight,
                senderPrice,
                delivarystatus,
                senderId,
                tripData,
                email,
                contactInfo,
              }) => {
                const style =
                  statusStyles[delivarystatus] || statusStyles.default;

                return (
                  <TableRow key={senderId} className="border-t">
                    {/* Traveller */}
                    <TableCell className="border-y border-l align-top py-3">
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">
                          {name}
                        </span>
                        <span className="text-sm text-gray-500 mt-1">
                          {typeof tripData.date === "string" && tripData.date}
                        </span>
                      </div>
                    </TableCell>

                    {/* Luggage Weight */}
                    <TableCell className="border-y align-top py-3">
                      {senderWeight} kg
                    </TableCell>

                    {/* Rate */}
                    <TableCell className="border-y align-top py-3">
                      ${senderPrice}
                    </TableCell>

                    {/* Status */}
                    <TableCell className="border-y align-top py-3">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${style.bg} ${style.text}`}
                      >
                        {style.label}
                      </div>
                    </TableCell>

                    {/* Action */}
                    <TableCell className="border-y text-center border-r py-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">View Details</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md font-montserrat">
                          <SenderDilogCard
                            date={
                              typeof tripData.date === "string"
                                ? tripData.date
                                : ""
                            }
                            from={tripData.from}
                            to={tripData.to}
                            name={name}
                            weight={senderWeight || 0}
                            status={delivarystatus || ""}
                            email={email || ""}
                            phone={contactInfo || ""}
                          />
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
