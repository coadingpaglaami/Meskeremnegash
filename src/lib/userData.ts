
import {
  Plane,
  MessageCircle,
  DollarSign,
  History,
  CheckCircle,
  UserCog,
  FileText,
  Search,
} from "lucide-react";

export const carrierLink = [
  {
    label: "My Trips",
    href: "/my-trips",
    icon: Plane, // ✈️ airplane icon
  },
  {
    label: "Pending Requests",
    href: "/pending-requests",
    icon: MessageCircle, // 💬 circular message icon
  },
  {
    label: "Completed Trips",
    href: "/completed-trips",
    icon: CheckCircle, // ✅ success/trip complete
  },
  {
    label: "Earnings",
    href: "/earnings",
    icon: DollarSign, // 💰 earnings
  },
  {
    label:'Verification',
    href:'/verification',
    icon: UserCog
  }
];

export const senderLink = [
  {
    label: "Find Travelers",
    href: "/find-travelers",
    icon: Search, // 💬 similar message/search connection
  },
  {
    label: "Delivery History",
    href: "/delivery-history",
    icon: History, // 🕓 history icon
  },
  {
    label: "Payments",
    href: "/payments",
    icon: DollarSign, // 💰
  },
];

export const adminLink = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: FileText, // 🗂 overview/dashboard
  },
  {
    label: "Verification",
    href: "/admin/verification",
    icon: CheckCircle, // ✅ verification check
  },
  {
    label: "Manage User",
    href: "/admin/manage-users",
    icon: UserCog, // ⚙️ manage users
  },
  {
    label: "Trips",
    href: "/admin/trips",
    icon: Plane, // ✈️ trip management
  },
  {
    label: "Payments",
    href: "/admin/payments",
    icon: DollarSign, // 💰 payment management
  },
];
