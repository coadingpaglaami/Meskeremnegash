"use client";

import  { useState, useEffect,useRef } from "react";
import Webcam from "react-webcam";
import { Camera, X } from "lucide-react";
import { useVerification } from "@/app/(protected)/(carrier)/verification/(verification)/VerificationLayOut";
import Image from "next/image";

export const SelfieVerification = () => {
  const { setStepComplete } = useVerification();
  const [photos, setPhotos] = useState<string[]>([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    setStepComplete(photos.length === 4);
  }, [photos, setStepComplete]);

  const webcamRef = useRef<Webcam>(null);

  const capturePhoto = () => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setPhotos((prev) => [...prev, imageSrc].slice(0, 4));
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center gap-6 py-8 px-4">
      <h2 className="text-lg font-bold">Take a Quick Selfie</h2>

      {/* Camera / Capture Section */}
      <div className="relative w-64 h-48 mt-4">
        {isCameraOpen ? (
          <>
            {/* Webcam Video */}
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/png"
              videoConstraints={{ facingMode: "user" }}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Capture Button */}
            <button
              onClick={capturePhoto}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border-4 border-gray-300 hover:border-gray-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            >
              <Camera className="w-6 h-6 text-gray-700" />
            </button>
          </>
        ) : (
          <div
            onClick={() => setIsCameraOpen(true)}
            className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
          >
            <Camera className="w-12 h-12 text-gray-500" />
          </div>
        )}
      </div>

      {/* Captured Photos */}
      {photos.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          {photos.map((photo, idx) => (
            <div key={idx} className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300">
              <Image
                src={photo}
                alt={`Photo ${idx + 1}`}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
              <span className="absolute top-1 left-1 px-2 py-0.5 text-xs font-semibold text-white bg-blue-600 rounded-full">
                {idx + 1}
              </span>
              <button
                type="button"
                onClick={() => removePhoto(idx)}
                className="absolute top-1 right-1 bg-white rounded-full p-1 text-gray-600 hover:text-red-500"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
