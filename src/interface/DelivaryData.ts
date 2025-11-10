import { TripDetails } from "./Trip";

export interface DelivaryData {
  delivaryId?: number;
  name: string;
  tripData: TripDetails;
  status: "pending" | "in-progress" | "completed";
  images?: string[];
}

export interface SenderData {
  senderId?: number;
  name: string;
  senderProfileStatus?: "Verified" | string;
  contactInfo?: string;
  email?: string;
  delivarystatus?: "In Progress" | "Delivered" | "Cancelled";
  senderPackageWeight?: string;
  tripData: TripDetails;
  senderRating?: number;
  senderWeight?: number;
  senderPrice?: number;
}
