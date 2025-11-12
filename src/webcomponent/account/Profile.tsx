"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { stringToColor } from "@/lib/stringToColor";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for validation
const profileSchema = z.object({
  profileName: z.string().min(2, "Profile name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

type ProfileForm = z.infer<typeof profileSchema>;

// Static profile data
const profileData = {
  username: "Marcus",
  email: "marcus@example.com",
  profile_picture_url: "",
};

export const Profile = () => {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const previewUrl = useMemo(() => {
    if (profilePhoto) return URL.createObjectURL(profilePhoto);
    return null;
  }, [profilePhoto]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      profileName: profileData.username,
      email: profileData.email,
    },
  });

  const onSubmit = async (data: ProfileForm) => {
    console.log("Form submitted:", data);
    console.log("Profile photo:", profilePhoto);
    alert("Profile updated successfully!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setProfilePhoto(e.target.files[0]);
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Profile Photo */}
        <div className="flex items-center mb-6 gap-3">
          <label
            htmlFor="profile-photo"
            className="flex justify-center items-center w-24 h-24 border-2 rounded-full cursor-pointer relative overflow-hidden"
          >
            {previewUrl ? (
              <Image
                src={previewUrl}
                alt="Preview"
                fill
                className="object-cover rounded-full"
              />
            ) : profileData.profile_picture_url ? (
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
            <div className="absolute">
              <Camera />
            </div>
          </label>
          <input
            type="file"
            id="profile-photo"
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
          <div className="flex flex-col gap-3">
            <span className="text-lg font-semibold">Profile Photo</span>
            <span className="text-sm text-[#1C1B1F]">
              Upload a new photo or change your existing one
            </span>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex md:justify-between md:flex-row flex-col gap-4">
          <div className="mb-4 flex-1">
            <label
              htmlFor="profile-name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Profile Name
            </label>
            <input
              type="text"
              id="profile-name"
              {...register("profileName")}
              placeholder="Enter your profile name"
              className="w-full p-2 border border-[#D9D9D9] rounded-md"
            />
            {errors.profileName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profileName.message}
              </p>
            )}
          </div>

          <div className="mb-6 flex-1">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              readOnly
              disabled
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-fit p-2 float-right bg-primary rounded-lg text-white text-sm orange tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save changes"}
        </button>
      </form>
    </div>
  );
};
