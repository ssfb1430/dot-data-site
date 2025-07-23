import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BoardPage() {
  // Placeholder data for board members
  const boardMembers = [
    {
      id: 1,
      name: "Shekhar Shah",
      position: "President",
      bio: "",
      avatar: "SS",
    },
    {
      id: 2,
      name: "Alka Lakadia",
      position: "Vice President",
      bio: "",
      avatar: "AL",
    },
    {
      id: 3,
      name: "Manasvi Khandelwal",
      position: "Secretary",
      bio: "",
      avatar: "DK",
    },
    {
      id: 4,
      name: "Carter Kurzka",
      position: "Events Head",
      bio: "",
      avatar: "CK",
    },
    {
      id: 5,
      name: "Piha Patel",
      position: "Social Media Head",
      bio: "",
      avatar: "MW",
    },
   
  ]

  // Function to get background color based on position
  const getAvatarColor = (position: string) => {
    switch (position) {
      case "President":
        return "bg-red-500"
      case "Vice President":
        return "bg-blue-500"
      case "Secretary":
        return "bg-green-500"
      case "Events Head":
        return "bg-purple-500"
      case "Social Media Head":
        return "bg-yellow-500"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Board</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dotData Executive Board.
          </p>
        </header>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {boardMembers.map((member) => (
            <Card key={member.id} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-col items-center pt-6 pb-2">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={`/placeholder.svg?height=96&width=96`} alt={member.name} />
                  <AvatarFallback className={`text-xl ${getAvatarColor(member.position)}`}>
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{member.name}</h2>
                  <p className="text-sm font-medium text-gray-500">{member.position}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
