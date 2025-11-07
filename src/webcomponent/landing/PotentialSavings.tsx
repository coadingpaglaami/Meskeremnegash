"use client";

import Image from "next/image";

export const PotentialSavings = () => {
  // Sample data from backend, replace this with your real data fetching logic
const data = [
    { weight: "5lbs", free: "$20.00", silver: "$18.00 (-2.00)", gold: "$22.00 (+2.00)", platinum: "$25.00 (+5.00)" },
    { weight: "10lbs", free: "$30.00", silver: "$27.00 (-3.00)", gold: "$35.00 (+5.00)", platinum: "$40.00 (+10.00)" },
    { weight: "25lbs", free: "$30.00", silver: "$25.00 (-5.00)", gold: "$30.00 (0.00)", platinum: "$37.00 (+7.00)" },
    { weight: "50lbs", free: "$30.00", silver: "$30.00 (0.00)", gold: "$40.00 (+10.00)", platinum: "$45.00 (+15.00)" },
    { weight: "100lbs", free: "$55.00", silver: "$50.00 (-5.00)", gold: "$60.00 (+5.00)", platinum: "$70.00 (+15.00)" },
];

  return (
    <div className="flex flex-col gap-10 p-6 py-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <Image src="/landing/image 3.png" alt="Savings Image" width={100} height={100} />
        <h1 className="text-5xl text-center md:text-6xl font-bold">
          See Your Potential Savings
        </h1>
      </div>

      {/* Dashed Border Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-dashed border-gray-500">
          <thead>
            <tr className="border-b border-dashed border-gray-500 rounded-tl-lg">
              <th className="px-4 py-2 text-left">Weight</th>
              <th className="px-4 py-2 text-left">Free</th>
              <th className="px-4 py-2 text-left ">Silver</th>
              <th className="px-4 py-2 text-left ">Gold</th>
              <th className="px-4 py-2 text-left rounded-tr-lg">Platinum</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-dashed border-gray-500">
                <td className="px-4 py-2">{row.weight}</td>
                <td className="px-4 py-2">{row.free}</td>
                <td className="px-4 py-2 text-[#0E8333]">{row.silver}</td>
                <td className="px-4 py-2 text-[#0E8333]">{row.gold}</td>
                <td className="px-4 py-2 text-[#0E8333]">{row.platinum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
