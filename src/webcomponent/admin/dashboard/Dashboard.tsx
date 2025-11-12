"use client";
import { ArrowUpRight } from "lucide-react";
import { StatCard } from "./StatCard";
import { UserGrowthChart } from "./UserGrowthChart";
import { SenderCarrierChart } from "./SenderCarrierChart";
import { RevenueByMonth } from "./RevenueByMonth";
import { TopRoutes } from "./TripRoutes";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard title="Total Users" value="12,205" icon={ArrowUpRight} />
          <StatCard title="Active Trips" value="125" icon={ArrowUpRight} />
          <StatCard title="Pending User" value="780" icon={ArrowUpRight} />
          <StatCard title="Total Revenue" value="$45,203" icon={ArrowUpRight} />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <UserGrowthChart />
          </div>
          <div>
            <SenderCarrierChart />
          </div>
        </div>

        {/* Bottom Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueByMonth />
          </div>
          <div>
            <TopRoutes />
          </div>
        </div>
      </div>
    </div>
  );
};
