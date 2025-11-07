'use client';
import { getUserRole } from "@/lib/auth"
import { CarrierDashboard } from "../carrier";

export const Dashboard = () => {
    const role = getUserRole();
    return (
        <>
        {role === 'carrier' ? <CarrierDashboard /> : <div>Other Dashboard</div>}
        </>
        
    )
}