'use client';

import { getUserRole } from "@/lib/auth";
import { CarrierMessage } from "../carrier/message/CarrierMessage";

export const MessageByRole =()=>{
const role =getUserRole();
return (<>{role === 'carrier' || role==='sender' ? <CarrierMessage/>:''}</>)
};