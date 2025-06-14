"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import people from "../../../public/people.svg";
import statistics from "../../../public/statistics.svg";

export default function ProposalsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: "All Proposals", count: 23 },
    { id: "active", label: "Active", count: 8 },
    { id: "pending", label: "Pending", count: 5 },
    { id: "completed", label: "Completed", count: 10 },
  ];

  const proposals = [
    {
      id: 1,
      title: "Increase Developer Fund Allocation",
      description:
        "Proposal to increase the developer fund by 10% to support new protocol upgrades and security audits.",
      status: "active",
      timeLeft: "2 days left",
      votes: 145,
      quorum: "65% Quorum",
      author: "alex.eth",
    },
    {
      id: 2,
      title: "Community Events Budget",
      description:
        "Allocate 50,000 MGS tokens for community events and hackathons in Q2 2025.",
      status: "active",
      timeLeft: "5 days left",
      votes: 89,
      quorum: "82% Quorum",
      author: "sarah.eth",
    },
    {
      id: 3,
      title: "Protocol Upgrade Implementation",
      description:
        "Implement new security features and optimize gas consumption for core protocol functions.",
      status: "active",
      timeLeft: "1 week left",
      votes: 234,
      quorum: "71% Quorum",
      author: "mike.eth",
    },
  ];

  const filteredProposals = proposals.filter((proposal) => {
    const matchesTab = activeTab === "all" || proposal.status === activeTab;
    const matchesSearch =
      proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proposal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Active Proposals</h1>
          <p className="text-gray-600 mt-1">23 proposals currently active</p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search and Filters */}
          <div className="">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search proposals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 max-w-md"
              />
            </div>
          </div>

          <Link href="/proposals/new">
            <Button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700">
              <Plus className="h-4 w-4 mr-2" />
              New Proposal
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className=" rounded bg-white mb-6">
        <nav className="-mb-px flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-3 border-b-2 cursor-pointer rounded-md font-medium text-sm ${
                activeTab === tab.id
                  ? "bg-[#E0E7FF] text-[#4F46E5]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-[#E0E7FF]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Proposals List */}
      <div className="space-y-6">
        {filteredProposals.map((proposal) => (
          <Card
            key={proposal.id}
            className="border-none shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {proposal.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-[#D1FAE5] text-[#059669]"
                    >
                      Active
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{proposal.description}</p>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {proposal.timeLeft}
                    </div>
                    <div className="flex items-center">
                      <Image src={people} alt="icon" className="h-4 w-4 mr-1" />
                      {proposal.votes} votes
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={statistics}
                        alt="icon"
                        className="h-4 w-4 mr-1"
                      />
                      {proposal.quorum}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 ml-6">
                  <div className="flex space-x-2">
                    <Button className="bg-[#10B981] cursor-pointer hover:bg-green-700">
                      Vote Yes
                    </Button>
                    <Button className="bg-[#EF4444] cursor-pointer hover:bg-[#ef4a44] ">
                      Vote No
                    </Button>
                  </div>
                  <Link href={`/proposals/${proposal.id}`}>
                    <button className="w-full text-right text-xs cursor-pointer text-indigo-600">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-[#6B7280]">Showing 1-3 of 23 proposals</p>
        <div className="flex space-x-2">
          <Button variant="outline" className="cursor-not-allowed border">
            Previous
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
