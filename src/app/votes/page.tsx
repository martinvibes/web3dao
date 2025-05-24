"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Check, X } from "lucide-react";
import Link from "next/link";

export default function VotePage() {
  // Mock data for the specific proposal
  const proposal = {
    id: 1,
    title: "Increase Developer Fund Allocation",
    status: "active",
    timeLeft: "2 days",
    votes: 234,
    description:
      "We propose to increase the developer fund allocation from 20% to 30% of the treasury to support the growing number of contributors and accelerate protocol development.",
    keyPoints: [
      "Current allocation: 20% (500,000 MGS)",
      "Proposed allocation: 30% (750,000 MGS)",
      "Additional funds will be used for:",
      "Smart contract development",
      "Security audits",
      "Frontend improvements",
    ],
    currentResults: {
      yesPercentage: 65,
      noPercentage: 35,
      totalVotes: 654321,
    },
    userVotingPower: "1,234 MGS",
  };

  const recentVotes = [
    {
      user: "Sarah.eth",
      vote: "Yes",
      amount: "1,500 MGS",
      time: "2 hours ago",
      avatar: "/placeholder.svg?height=32&width=32&query=sarah",
    },
    {
      user: "Alex.eth",
      vote: "No",
      amount: "2,200 MGS",
      time: "3 hours ago",
      avatar: "/placeholder.svg?height=32&width=32&query=alex",
    },
  ];

  const handleVote = async (vote: "yes" | "no") => {
    // API integration point for voting
    console.log(`Voting ${vote} on proposal ${proposal.id}`);
    // TODO: Integrate with blockchain/API
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <nav className="flex space-x-8 mb-8 border-b border-gray-200">
        <Link href="/" className="text-gray-500 hover:text-gray-700 pb-4">
          Dashboard
        </Link>
        <span className="text-indigo-600 border-b-2 border-indigo-600 pb-4 font-medium">
          Vote
        </span>
        <Link
          href="/proposals"
          className="text-gray-500 hover:text-gray-700 pb-4"
        >
          Proposals
        </Link>
      </nav>

      {/* Proposal Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {proposal.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Ends in {proposal.timeLeft}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {proposal.votes} votes
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Active
          </Badge>
        </div>

        <p className="text-gray-700 mb-6">{proposal.description}</p>

        {/* Key Points */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Key Points:</h3>
          <ul className="space-y-2">
            {proposal.keyPoints.map((point, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Current Results */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Results</CardTitle>
          <p className="text-sm text-gray-600">
            {proposal.currentResults.totalVotes.toLocaleString()} MGS Total
            Votes
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-green-600">
                Yes: {proposal.currentResults.yesPercentage}%
              </span>
              <span className="text-red-600">
                No: {proposal.currentResults.noPercentage}%
              </span>
            </div>
            <div className="relative">
              <Progress
                value={proposal.currentResults.yesPercentage}
                className="h-4"
              />
              <div className="absolute inset-0 flex">
                <div
                  className="bg-green-500 h-full rounded-l-md"
                  style={{ width: `${proposal.currentResults.yesPercentage}%` }}
                />
                <div
                  className="bg-red-500 h-full rounded-r-md"
                  style={{ width: `${proposal.currentResults.noPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cast Your Vote */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cast Your Vote</CardTitle>
          <p className="text-sm text-gray-600">
            Your voting power: {proposal.userVotingPower}
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button
              onClick={() => handleVote("yes")}
              className="flex-1 bg-green-600 hover:bg-green-700 h-12"
            >
              <Check className="h-5 w-5 mr-2" />
              Vote Yes
            </Button>
            <Button
              onClick={() => handleVote("no")}
              variant="destructive"
              className="flex-1 h-12"
            >
              <X className="h-5 w-5 mr-2" />
              Vote No
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Votes */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Votes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentVotes.map((vote, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={vote.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{vote.user[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-900">{vote.user}</div>
                    <div className="text-sm text-gray-500">{vote.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`font-medium ${
                      vote.vote === "Yes" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    Voted {vote.vote}
                  </div>
                  <div className="text-sm text-gray-500">{vote.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
