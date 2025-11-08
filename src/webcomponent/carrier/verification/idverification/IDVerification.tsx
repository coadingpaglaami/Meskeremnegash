"use client";

import { useState, useEffect } from "react";
import { useVerification } from "@/app/(protected)/(carrier)/verification/(verification)/VerificationLayOut";
import { FileUpload } from "@/webcomponent/reusable/FileUpload";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const idTypes = ["National ID", "Passport", "Driver's License"] as const;

export const IDVerification = () => {
  const { setStepComplete } = useVerification();
  const [activeTab, setActiveTab] = useState<typeof idTypes[number]>("National ID");
  const [files, setFiles] = useState<{ front?: File; back?: File }>({});

  // Validate completion whenever files or activeTab changes
  useEffect(() => {
    let isValid = false;

    if (activeTab === "National ID") {
      isValid = !!files.front && !!files.back;
    } else if (activeTab === "Passport") {
      isValid = !!files.front;
    } else if (activeTab === "Driver's License") {
      isValid = !!files.front && !!files.back;
    }

    setStepComplete(isValid);
  }, [files, activeTab, setStepComplete]);

  const handleFileChange = (key: "front" | "back", file: File | null) => {
    setFiles((prev) => ({ ...prev, [key]: file || undefined }));
  };

  return (
    <div className="flex flex-col gap-6 py-6">
      <h2 className="text-lg font-bold">Select ID Type</h2>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof idTypes[number])}>
        {/* --------- Tabs List --------- */}
        <TabsList className="flex gap-2 border rounded-lg p-1 bg-white">
          {idTypes.map((type) => (
            <TabsTrigger
              key={type}
              value={type}
              className={`rounded-lg px-4 py-2 font-medium transition-colors duration-200
                ${activeTab === type ? "bg-[#EFF6FF]" : "bg-white hover:bg-gray-100"}`
              }
            >
              {type}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* --------- Tabs Content --------- */}
        <TabsContent value="National ID">
          {activeTab === "National ID" && (
            <div className="flex flex-col gap-4 mt-4">
              <FileUpload label="Front Side" onFileChange={(file) => handleFileChange("front", file)} />
              <FileUpload label="Back Side" onFileChange={(file) => handleFileChange("back", file)} />
            </div>
          )}
        </TabsContent>

        <TabsContent value="Passport">
          {activeTab === "Passport" && (
            <div className="flex flex-col gap-4 mt-4">
              <FileUpload label="Passport" onFileChange={(file) => handleFileChange("front", file)} />
            </div>
          )}
        </TabsContent>

        <TabsContent value="Driver's License">
          {activeTab === "Driver's License" && (
            <div className="flex flex-col gap-4 mt-4">
              <FileUpload label="Front Side" onFileChange={(file) => handleFileChange("front", file)} />
              <FileUpload label="Back Side" onFileChange={(file) => handleFileChange("back", file)} />
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
