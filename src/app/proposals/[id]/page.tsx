"use client";

import { SetStateAction, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, ArrowLeft, Check, X } from "lucide-react";
import Link from "next/link";

export default function ProposalDetail({ params }: { params: { id: string } }) {
  const [comment, setComment] = useState("");
  const [userVote, setUserVote] = useState<"yes" | "no" | null>(null);

  // Mock data - replace with API call
  const proposal = {
    id: params.id,
    title: "Increase Developer Fund Allocation",
    status: "active",
    timeLeft: "2 days",
    author: "alex.eth",
    description:
      "We propose to increase the developer fund allocation from 20% to 30% of the treasury to support the growing number of contributors and accelerate development initiatives.",
    keyPoints: [
      "Current allocation: 20% (500,000 MGS)",
      "Proposed allocation: 30% (750,000 MGS)",
      "Additional funds will be used for:",
      "Smart contract development",
      "Frontend improvements",
      "Security audits",
    ],
    yesVotes: 65,
    noVotes: 35,
    totalVotes: 654321,
    yesAmount: 450000,
    noAmount: 242000,
    topVoters: [
      {
        id: 1,
        name: "alice.eth",
        amount: "50,000 MGS",
        avatar: "/placeholder.svg?height=32&width=32&query=alice",
      },
      {
        id: 2,
        name: "bob.eth",
        amount: "35,000 MGS",
        avatar: "/placeholder.svg?height=32&width=32&query=bob",
      },
    ],
    comments: [
      {
        id: 1,
        author: "sarah.eth",
        content:
          "This seems like a reasonable increase given the current development needs.",
        time: "3 hours ago",
        avatar: "/placeholder.svg?height=32&width=32&query=sarah",
      },
      {
        id: 2,
        author: "mike.eth",
        content:
          "Could we get more details about the specific allocation within the development initiatives?",
        time: "5 hours ago",
        avatar: "/placeholder.svg?height=32&width=32&query=mike",
      },
    ],
  };

  const handleVote = async (vote: "yes" | "no") => {
    setUserVote(vote);
    // API integration point for voting
    console.log(`Voting ${vote} on proposal ${params.id}`);
    // TODO: Integrate with blockchain/API
  };

  const handleComment = async () => {
    if (!comment.trim()) return;

    // API integration point for comments
    console.log("Adding comment:", comment);
    setComment("");
    // TODO: Integrate with API
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Navigation */}
      <div className="mb-6">
        <Link
          href="/proposals"
          className="flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Proposals
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Proposal Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {proposal.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Ends in {proposal.timeLeft}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Proposed by {proposal.author}
                    </div>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Active
                </Badge>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{proposal.description}</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Points:
                </h3>
                <ul className="space-y-1">
                  {proposal.keyPoints.map((point, index) => (
                    <li key={index} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add Comment */}
              <div className="flex space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32&query=current+user" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e: {
                      target: { value: SetStateAction<string> };
                    }) => setComment(e.target.value)}
                    className="mb-3 text-[#ADAEBC]"
                  />
                  <Button
                    onClick={handleComment}
                    className="bg-[#4F46E5] hover:bg-indigo-700 cursor-pointer"
                    // disabled={!comment.trim()}
                  >
                    Post Comment
                  </Button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-5.5">
                {proposal.comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-gray-900">
                          {comment.author}
                        </span>
                        <span className="text-sm text-gray-500">
                          {comment.time}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Voting Card */}
          <Card>
            <CardHeader>
              <CardTitle>Cast Your Vote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Vote Progress */}
              <div className="space-y-2">
                <Progress value={proposal.yesVotes} className="h-3" />
                <div className="flex justify-between text-sm">
                  <span>
                    {proposal.yesVotes}% Yes (
                    {proposal.yesAmount.toLocaleString()} MGS)
                  </span>
                  <span>
                    {proposal.noVotes}% No ({proposal.noAmount.toLocaleString()}{" "}
                    MGS)
                  </span>
                </div>
              </div>

              {/* Vote Buttons */}
              <div className="space-y-2">
                <Button
                  onClick={() => handleVote("yes")}
                  className={`w-full cursor-pointer ${
                    userVote === "yes"
                      ? "bg-[#10B981]"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                  disabled={userVote !== null}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Vote Yes
                </Button>
                <Button
                  onClick={() => handleVote("no")}
                  variant="destructive"
                  className={`w-full cursor-pointer ${
                    userVote === "no" ? "bg-[#EF4444]" : ""
                  }`}
                  disabled={userVote !== null}
                >
                  <X className="h-4 w-4 mr-2" />
                  Vote No
                </Button>
              </div>

              {userVote && (
                <div className="text-center text-sm text-gray-600 mt-3">
                  You voted {userVote.toUpperCase()}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Top Voters */}
          <Card>
            <CardHeader>
              <CardTitle>Top Voters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {proposal.topVoters.map((voter, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={voter.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{voter.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-gray-900">
                        {voter.name}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        voter.id == 1 ? "text-green-600" : "text-red-600"
                      } `}
                    >
                      {voter.amount}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
