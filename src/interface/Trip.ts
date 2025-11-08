export interface TripDetails{
    tripId?: number;
    icon?: string;
    from: string;
    to: string;
    date: string | Date;
    returnDate?: string | Date;
    carryWeight: number;
    note: string;
    transportType?: string;
    price?: number;
}