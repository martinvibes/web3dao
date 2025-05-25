"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Upload, X } from "lucide-react";
import Image from "next/image";
import upload from "../../../../public/upload.svg";

export default function CreateProposal() {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    amount: "",
    duration: "",
    objectives: "",
    implementation: "",
    outcomes: "",
  });

  const [attachments, setAttachments] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachments((prev) => [...prev, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (isDraft: boolean) => {
    // API integration point for proposal submission
    const proposalData = {
      ...formData,
      attachments,
      isDraft,
      timestamp: new Date().toISOString(),
    };

    console.log("Submitting proposal:", proposalData);
    // TODO: Integrate with blockchain/API
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Create New Proposal
        </h1>
        <p className="text-gray-600">
          Submit your proposal for the community to vote on. Please provide
          detailed information to help members make informed decisions.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Proposal Title */}
          <div>
            <Label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Proposal Title
            </Label>
            <Input
              id="title"
              placeholder="Enter a clear, concise title"
              value={formData.title}
              onChange={(e: { target: { value: string } }) =>
                handleInputChange("title", e.target.value)
              }
              className="w-full"
            />
          </div>

          {/* Summary */}
          <div>
            <Label
              htmlFor="summary"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Summary
            </Label>
            <Textarea
              id="summary"
              placeholder="Provide a brief summary of your proposal"
              value={formData.summary}
              onChange={(e) => handleInputChange("summary", e.target.value)}
              className="w-full h-24"
            />
          </div>

          {/* Funding Request */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Funding Request
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="amount"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Amount (MGS)
                </Label>
                <Input
                  id="amount"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e: { target: { value: string } }) =>
                    handleInputChange("amount", e.target.value)
                  }
                  type="number"
                />
              </div>
              <div>
                <Label
                  htmlFor="duration"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Duration
                </Label>
                <Select
                  onValueChange={(value: string) =>
                    handleInputChange("duration", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="1 week" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1week">1 week</SelectItem>
                    <SelectItem value="2weeks">2 weeks</SelectItem>
                    <SelectItem value="1month">1 month</SelectItem>
                    <SelectItem value="3months">3 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Detailed Description
            </h3>

            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="objectives"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Objectives
                </Label>
                <Textarea
                  id="objectives"
                  placeholder="List the main objectives of your proposal"
                  value={formData.objectives}
                  onChange={(e) =>
                    handleInputChange("objectives", e.target.value)
                  }
                  className="w-full h-32"
                />
              </div>

              <div>
                <Label
                  htmlFor="implementation"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Implementation Plan
                </Label>
                <Textarea
                  id="implementation"
                  placeholder="Describe how you plan to implement this proposal"
                  value={formData.implementation}
                  onChange={(e) =>
                    handleInputChange("implementation", e.target.value)
                  }
                  className="w-full h-32"
                />
              </div>

              <div>
                <Label
                  htmlFor="outcomes"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Expected Outcomes
                </Label>
                <Textarea
                  id="outcomes"
                  placeholder="What are the expected outcomes and benefits?"
                  value={formData.outcomes}
                  onChange={(e) =>
                    handleInputChange("outcomes", e.target.value)
                  }
                  className="w-full h-32"
                />
              </div>
            </div>
          </div>

          {/* Attachments */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Attachments
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Image
                src={upload}
                className="h-12 w-12 text-gray-400 mx-auto"
                alt="icon"
              />
              <p className="text-gray-600 mb-2">
                Drag and drop files here or click to upload
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Maximum file size: 10MB
              </p>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
            </div>

            {/* Attachment List */}
            {attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                {attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="text-sm text-gray-700">{file.name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAttachment(index)}
                    >
                      {/* <X className="h-4 w-4" /> */}
                      hell
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6">
            <Button
              variant="outline"
              onClick={() => handleSubmit(true)}
              className="px-8 border cursor-pointer"
            >
              Save Draft
            </Button>
            <Button
              onClick={() => handleSubmit(false)}
              className="bg-indigo-600 hover:bg-indigo-700 px-8 cursor-pointer"
            >
              Submit Proposal
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
