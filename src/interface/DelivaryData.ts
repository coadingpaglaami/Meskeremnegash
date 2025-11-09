import { TripDetails } from "./Trip";

export interface DelivaryData {
  delivaryId?: number;
  name: string;
  tripData: TripDetails;
  status?: "pending" | "in-progress" | "completed";
  id?: "Verified" | "Unverified";
  userRating?: number;
  senderStatus?:'Delivered' | 'On the way' | 'Pending';
  images?: string[];
  isTravelling?: boolean;
}
