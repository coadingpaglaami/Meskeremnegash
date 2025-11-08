import { CardProps } from "@/interface/Card";
import { Breadcrumb, Card } from "@/webcomponent/reusable";

const data: CardProps[] = [
  {
    icon: "/dashboard/plandash.svg",
    title: "Active Trips",
    quantity: 8,
    sugtitle: "Currently On Progress",
  },
  {
    icon: "/dashboard/receipt_pending.svg",
    title: "Pending Requests",
    quantity: 5,
    sugtitle: "Awaiting Approval",
  },
  {
    icon: "/dashboard/checkblack.svg",
    title: "Completed Trips",
    quantity: 20,
    sugtitle: "Currently On Progress",
  },
];

export const CarrierDashboard = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:mr-4">
      <Breadcrumb
        title="Total Earnings"
        subtitle="Your Lifetime earnings from deliveries"
        math={[
          {
            mhki: "$120",
            mhki_subtitle: "From 2 completed deliveries",
          },
        ]}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
