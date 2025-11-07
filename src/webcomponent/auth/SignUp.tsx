"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Check, Mail, Lock } from "lucide-react";
import Link from "next/link";

// 1️⃣ Define Zod schema for validation
const signUpSchema = z
  .object({
    email: z.email().min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Error will appear under confirmPassword
  });

// 2️⃣ Define TypeScript type from schema
type SignUpForm = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  // Eye toggle states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // 3️⃣ Initialize useForm with Zod resolver
  const {
    register, // ✅ register each input
    handleSubmit, // ✅ handles submit with validation
    formState: { errors }, // ✅ contains errors from Zod validation
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema), // connect Zod schema
  });

  // 4️⃣ Submit function
  const onSubmit = (data: SignUpForm) => {
    if (!accepted) {
      alert("Please accept TSA & Terms");
      return;
    }
    console.log("Sign Up Data:", data);
    alert("Sign Up successful (mock)!");
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto text-white">
      <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Email */}
      <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-3 py-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")} // 👈 connect input to form
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
      <div className="flex flex-col gap-2 relative">
          <label htmlFor="password">Password</label>
          <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-3 py-2">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-gray-400 hover:text-white"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password.message}</p>
          )}

        </div>

        {/* Confirm Password */}
         <div className="flex flex-col gap-2 relative">
          <label htmlFor="password">Password</label>
          <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-3 py-2">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              id="password"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              {...register("confirmPassword")}
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              className="text-gray-400 hover:text-white"
            >
              {showConfirm ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password.message}</p>
          )}

        </div>

        {/* TSA & Terms Checkbox */}
        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            className={`p-1  border border-white/40 flex items-center justify-center ${
              accepted ? "bg-white/20" : ""
            }`}
            onClick={() => setAccepted(!accepted)}
          >
            {accepted && <Check className="text-white w-2 h-2" />}
          </button>
          <p className="text-sm text-gray-200">
            By continuing, you agree to our{" "}
            <Link href="/tsa" className="text-primary">
              TSA Compliance Agreement
            </Link>{" "}
            &{" "}
            <Link href="/terms" className="text-primary">
              Terms & Conditions
            </Link>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!accepted}
          className={`mt-4 px-4 py-2 rounded-lg ${
            accepted ? "bg-primary text-white" : "bg-gray-500 text-gray-200 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-gray-200 mt-4">
        Have an account?{" "}
        <Link href="/login" className="text-primary">
          Sign in
        </Link>
      </p>
    </div>
  );
};
