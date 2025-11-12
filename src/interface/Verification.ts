
export interface Payments{
    carrierName: string;
    route : string; //format: Addis Ababa - Nairobi
    date: string; // format 12-09-2025
    status: "Active" | "Cancelled" | "Completed";
    isCancellable: boolean;
    onAction: (action: "cancel") => void;
};