import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
import { EarningCard } from "./EarningCard";
import { TripEarnigsTable } from "./TripEarnigsTable";
import { WithdrawHistoryTable } from "./WithdrawHistoryTable";

export const Earnings = () => {
  return (
    <div className="flex flex-col gap-8 md:px-6 px-4 py-16">
      <div className="flex flex-col gap-4">
        <HeadingSection
          heading="My Earnings"
          subheading="Track how much you’ve earned from completed & manage your available balance."
        />
        <EarningCard />
      </div>

      {/* Earnings content can be added here */}
      <div className="flex flex-col gap-4">
        <HeadingSection
          heading="Trip based earnings"
          subheading="Detailed breakdown of earnings from each trip"
        />
        <TripEarnigsTable />
      </div>
         <div className="flex flex-col gap-4">
        <HeadingSection
          heading="Withdraw History"
          subheading="Your past withdrawal transactions"
        />
        <WithdrawHistoryTable />
      </div>
    </div>
  );
};
