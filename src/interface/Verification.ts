
export interface Payments{
    paymentId: string;  // format Pay001
    senderName: string;
    carrierName: string;
    amount: number;
    fee: number;
    date: string; // format YYYY-MM-DD
    status: 'Pending' | 'Completed';
}