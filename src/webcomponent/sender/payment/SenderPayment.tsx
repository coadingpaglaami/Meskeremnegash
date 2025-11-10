'use client';
import { EarningCard } from "@/webcomponent/carrier/earnings/EarningCard";
import { TripEarnigsTable } from "@/webcomponent/carrier/earnings/TripEarnigsTable";
import { WithdrawHistoryTable } from "@/webcomponent/carrier/earnings/WithdrawHistoryTable";
import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
import { Clock, DollarSign, Wallet } from "lucide-react";
import { toast } from "sonner";
import { ActiveDelivaryTable } from "./ActiveDelivaryTable";
import { PaymentHistoryTable } from "./PaymentHistoryTable";

const earningData = [
    {
      icon: <Wallet className="w-5 h-5 text-blue-600" />,
      title: "Total Paid",
      money: "$140.40",
      text: "All-time income from trips",
    },
    {
      icon: <Clock className="w-5 h-5 text-yellow-500" />,
      title: "Pending Payments",
      money: "$20.40",
      text: "Earnings yet to be processed",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-green-600" />,
      title: "Refunded",
      money: "$120.00",
      text: "Ready for withdrawal",
      actionText: "Pay Now",
      onAction: () => toast.success("Payment successfull"),
    },
  ];

export const SenderPayment = () => {
    return (
         <div className="flex flex-col gap-8 md:px-6 px-4 py-16">
              <div className="flex flex-col gap-4">
                <HeadingSection
                  heading="My Payments"
                  subheading="Manage your delivery payments & track your package expenses easily."
                />
                <EarningCard data={earningData}/>
              </div>
        
              {/* Earnings content can be added here */}
              <div className="flex flex-col gap-4">
                <HeadingSection
                  heading="Active Deliveries"
                  subheading="Track your ongoing delivery payments"
                />
                <ActiveDelivaryTable />
              </div>
                 <div className="flex flex-col gap-4">
                <HeadingSection
                  heading="Payment History"
                  subheading="Your past payment transactions"
                />
                <PaymentHistoryTable />
              </div>
            </div>
    )
};