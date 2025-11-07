import { Breadcrumb } from "@/webcomponent/reusable";

export const CarrierDashboard = () => {
  return (
    <div className="py-4 md:mr-4">
      <Breadcrumb
        title="Total Earnings"
        subtitle="Your Lifetime earnings from deliveries"
        math={[
          {
            mhki: '$120',
            mhki_subtitle: "From 2 completed deliveries",
          },
        ]}
      />
    </div>
  );
};
