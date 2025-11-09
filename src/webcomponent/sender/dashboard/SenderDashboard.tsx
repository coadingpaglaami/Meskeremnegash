import { CardProps } from "@/interface/Card";
import { Breadcrumb, Card } from "@/webcomponent/reusable";

const data: CardProps[] = [
  {
    icon: "/dashboard/plandash.svg",
    title: "Active Packages",
    quantity: 8,
    sugtitle: "Currently in progress",
  },
  {
    icon: "/dashboard/receipt_pending.svg",
    title: "Completed Deliveries",
    quantity: 5,
  },
  {
    icon: "/dashboard/checkblack.svg",
    title: "Total Deliveries",
    quantity: 20,
    sugtitle: "Currently On Progress",
  },
];
export const SenderDashboard = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:mr-4">
      <Breadcrumb
        title="Total Spent"
        subtitle="Your total spending on deliveries"
        math={[
          {
            mhki: "$120",
            mhki_subtitle: "From 2 completed deliveries",
          },
        ]}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 gap-4">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
