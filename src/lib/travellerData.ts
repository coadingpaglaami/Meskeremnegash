import { SenderData } from "@/interface/DelivaryData";

export const travellerData: SenderData[] = [
  {
    senderId: 1,
    name: "Ahsan Rahman",
    senderProfileStatus: "Verified",
    senderRating: 4.7,
    tripData: {
      tripId: 101,
      from: "Dhaka",
      to: "Chittagong",
      date: "2025-11-12",
      returnDate: "2025-11-15",
      carryWeight: 20,
      note: "Carrying documents and electronic devices.",
      transportType: "Bus",
      price: 1200,
    },
  },
  {
    senderId: 2,
    name: "Maliha Akter",
    senderProfileStatus: "Verified",
    senderRating: 4.3,
    tripData: {
      tripId: 102,
      from: "Rajshahi",
      to: "Sylhet",
      date: "2025-11-20",
      carryWeight: 10,
      note: "Light parcel, handle with care.",
      transportType: "Train",
      price: 900,
    },
  },
  {
    senderId: 3,
    name: "Shafiq Islam",
    senderProfileStatus: "Verified",
    senderRating: 4.9,
    tripData: {
      tripId: 103,
      from: "Khulna",
      to: "Dhaka",
      date: "2025-11-25",
      carryWeight: 12,
      note: "Package includes fragile items and clothes.",
      transportType: "Car",
      price: 1500,
    },
  },
];