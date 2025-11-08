import { DelivaryData } from "@/interface/DelivaryData";

  export const statusStyles: Record<
    DelivaryData["status"],
    { bg: string; text: string; label: string }
  > = {
    pending: { bg: "bg-[#FEE685]", text: "text-[#BB5413]", label: "Pending" },
    "in-progress": {
      bg: "bg-[#CBFBF1]",
      text: "text-[#05998B]",
      label: "In Progress",
    },
    completed: {
      bg: "bg-[#E6F9D8]",
      text: "text-[#1B7A1B]",
      label: "Completed",
    },
  };