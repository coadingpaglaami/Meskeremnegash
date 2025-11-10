import { activeDelivaryData } from "@/lib/activeDelivaryData";
import { Breadcrumb } from "@/webcomponent/reusable";
import { SenderCard } from "../card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SenderDilogCard } from "../card/DilogCard";

export const DelivaryHistory = () => {
  return (
    <div className="md:px-6 py-4 px-4">
      <Breadcrumb
        title="Total Completed Deliveries"
        math={[
          { mhki: 3, mhki_subtitle: "Deliveries" },
          { mhki: "$150", mhki_subtitle: "Total Spent" },
        ]}
      />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4 ">
        {activeDelivaryData.slice(3,5).map(({name, tripData, senderWeight, senderPrice, delivarystatus, senderId,contactInfo,email})=>(
                 <div
              key={senderId}
              className="flex flex-col gap-2 border rounded-2xl p-4 shadow-sm hover:shadow-md transition-all "
            >
              <SenderCard
                from={tripData.from}
                to={tripData.to}
                date={typeof tripData.date === "string" ? tripData.date : ""}
                name={name}
                weight={senderWeight || 0}
                price={senderPrice || 0}
                status={delivarystatus || ""}
                note={tripData.note}
              />
              <div className="flex gap-2 justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline_black" className="w-full">View</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md font-montserrat">
                    <SenderDilogCard
                      date={
                        typeof tripData.date === "string" ? tripData.date : ""
                      }
                      from={tripData.from}
                      to={tripData.to}
                      name={name}
                      weight={senderWeight || 0}
                      status={delivarystatus || ""}
                      email={email || ""}
                      phone={contactInfo || ""}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
        ))}
      </div>
    </div>
  );
};
