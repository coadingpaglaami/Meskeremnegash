"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { stringToColor } from "@/lib/stringToColor";
import { toast } from "sonner";

// ✅ Zod validation schema
const securitySchema = z
  .object({
    current_password: z
      .string()
      .min(6, "Current password must be at least 6 characters"),
    new_password: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    confirm_password: z.string().min(8, "Please confirm your new password"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type SecurityForm = z.infer<typeof securitySchema>;

// ✅ Static profile data
const profileData = {
  username: "Marcus",
  email: "marcus@example.com",
  profile_picture_url: "",
};

export const Security = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SecurityForm>({
    resolver: zodResolver(securitySchema),
  });

  const onSubmit = async (data: SecurityForm) => {
    console.log("Security form data:", data);
    toast.success("Password changed successfully!", { richColors: true });
    reset();
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Profile Section */}
        <div className="flex items-center mb-6 gap-4">
          <label
            htmlFor="profile-photo"
            className="flex justify-center items-center w-24 h-24 border-2 rounded-full cursor-pointer relative overflow-hidden"
          >
            {profileData.profile_picture_url ? (
              <Image
                src={profileData.profile_picture_url}
                alt="Profile"
                fill
                className="object-cover rounded-full"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-white text-2xl font-semibold"
                style={{
                  backgroundColor: stringToColor(profileData.username || "A"),
                }}
              >
                {profileData.username[0].toUpperCase()}
              </div>
            )}
          </label>
          <div className="flex flex-col gap-3">
            <span className="text-lg font-semibold">Security</span>
            <span className="text-sm text-[#1C1B1F]">
              Keep your account secure by updating your password and enabling
              extra security measures.
            </span>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex md:justify-between md:flex-row flex-col md:gap-8 tracking-wider">
          {/* Current Password */}
          <div className="md:mb-4 mb-2 flex-1 relative">
            <label
              htmlFor="current_password"
              className="block text-sm mb-2 font-medium"
            >
              Current Password
            </label>
  
            <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-3 py-2">
              <input
                id="password"
                type={showCurrent ? "text" : "password"}
                placeholder="Enter your password"
                {...register("current_password")}
                className="w-full bg-transparent outline-none "
              />
              <button
                type="button"
                onClick={() => setShowCurrent((prev) => !prev)}
                className="text-gray-400 "
              >
                {showCurrent ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {errors.current_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.current_password.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="md:mb-6 mb-2 flex-1 relative">
            <label
              htmlFor="new_password"
              className="block text-sm mb-2 font-medium"
            >
              New Password
            </label>

            <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-3 py-2">
              <input
                id="password"
                type={showNew ? "text" : "password"}
                placeholder="Enter your password"
                {...register("new_password")}
                className="w-full bg-transparent outline-none "
              />
              <button
                type="button"
                onClick={() => setShowNew((prev) => !prev)}
                className="text-gray-400 "
              >
                {showNew ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.new_password.message}
              </p>
            )}
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6 w-full md:w-1/2 relative">
          <label
            htmlFor="confirm_password"
            className="block text-sm mb-2 font-medium"
          >
            Confirm Password
          </label>
 
          <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-3 py-2">
            <input
              id="password"
              type={showConfirm ? "text" : "password"}
              placeholder="Enter your password"
              {...register("current_password")}
              className="w-full bg-transparent outline-none "
            />
            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              className="text-gray-400 "
            >
              {showConfirm ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.confirm_password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-fit p-2 float-right rounded-lg bg-primary text-white text-sm orange tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
};
