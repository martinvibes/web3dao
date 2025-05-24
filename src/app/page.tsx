import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, TrendingUp, TrendingDown, Plus } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Proposals",
      value: "156",
      change: "+12% from last month",
      trend: "up",
    },
    {
      title: "Active Proposals",
      value: "23",
      change: "+5% from last week",
      trend: "up",
    },
    {
      title: "Total Votes Cast",
      value: "45.2K",
      change: "+8% from last month",
      trend: "up",
    },
    {
      title: "Participation Rate",
      value: "76%",
      change: "-3% from last month",
      trend: "down",
    },
  ];

  const activeProposals = [
    {
      id: 1,
      title: "Increase Developer Fund Allocation",
      timeLeft: "2 days",
      yesVotes: 65,
      noVotes: 35,
      voters: [
        { id: 1, avatar: "/placeholder.svg?height=32&width=32&query=voter1" },
        { id: 2, avatar: "/placeholder.svg?height=32&width=32&query=voter2" },
        { id: 3, avatar: "/placeholder.svg?height=32&width=32&query=voter3" },
      ],
    },
    {
      id: 2,
      title: "Community Events Budget",
      timeLeft: "5 days",
      yesVotes: 82,
      noVotes: 18,
      voters: [
        { id: 1, avatar: "/placeholder.svg?height=32&width=32&query=voter4" },
        { id: 2, avatar: "/placeholder.svg?height=32&width=32&query=voter5" },
      ],
    },
  ];

  const recentVotes = [
    {
      user: "Sarah.eth",
      action: "voted Yes",
      amount: "+1,500 MGS",
      time: "2 hours ago",
      avatar: "/placeholder.svg?height=32&width=32&query=sarah",
    },
    {
      user: "Alex.eth",
      action: "voted No",
      amount: "+2,200 MGS",
      time: "3 hours ago",
      avatar: "/placeholder.svg?height=32&width=32&query=alex",
    },
  ];

  const announcements = [
    {
      title: "Quarterly Community Call",
      description: "Join us on March 15, 2025 for updates",
      time: "2 hours ago",
    },
    {
      title: "New Proposal Guidelines",
      description: "Updated documentation available",
      time: "1 day ago",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div
                className={`flex items-center text-sm ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Proposals */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Active Proposals</h2>
          <Link href="/proposals/new">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="h-4 w-4 mr-2" />
              New Proposal
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          {activeProposals.map((proposal) => (
            <Card key={proposal.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {proposal.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      Ends in {proposal.timeLeft}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    Active
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{proposal.yesVotes}% Yes</span>
                    <span>{proposal.noVotes}% No</span>
                  </div>
                  <Progress value={proposal.yesVotes} className="h-2" />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {proposal.voters.map((voter) => (
                      <Avatar
                        key={voter.id}
                        className="h-8 w-8 border-2 border-white"
                      >
                        <AvatarImage src={voter.avatar || "/placeholder.svg"} />
                        <AvatarFallback>V</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Link href={`/proposals/${proposal.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-indigo-600"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      <div className="text-sm font-medium text-gray-900">
                        {vote.user} {vote.action}
                      </div>
                      <div className="text-xs text-gray-500">{vote.time}</div>
                    </div>
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      vote.action.includes("Yes")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {vote.amount}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-4">
                  <div className="text-sm font-medium text-gray-900">
                    {announcement.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {announcement.description}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {announcement.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
