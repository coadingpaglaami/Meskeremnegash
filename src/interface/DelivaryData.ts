import { TripDetails } from "./Trip";

export interface DelivaryData{
    delivaryId?: number;
    name: string;
    tripData:TripDetails;
    status: 'pending' | 'in-progress' | 'completed';
    images?: string[];
}