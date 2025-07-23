import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

export default function BoardPage() {
  const boardMembers = [
    {
      id: 1,
      name: "Shekhar Shah",
      position: "President",
      avatar: "SS",
      email: "sshah77@wisc.edu",
      linkedin: "https://www.linkedin.com/in/shekhar-shah-72b4311b3/",
    },
    {
      id: 2,
      name: "Alka Lakadia",
      position: "Vice President",
      avatar: "AL",
      email: "alakadia@wisc.edu",
      linkedin: "https://www.linkedin.com/in/alka-lakadia/",
    },
    {
      id: 3,
      name: "Manasvi Khandelwal",
      position: "Secretary",
      avatar: "MK",
      email: "mkhandelwal6@wisc.edu",
      linkedin: "https://www.linkedin.com/in/manasvi-khandelwal-21416a281/",
    },
    {
      id: 4,
      name: "Carter Kurzka",
      position: "Events Head",
      avatar: "CK",
      email: "ckurzka@wisc.edu",
      linkedin: "https://www.linkedin.com/in/carter-kurzka-9056342b6/",
    },
    {
      id: 5,
      name: "Piha Patel",
      position: "Social Media Head",
      avatar: "PP",
      email: "phpatel7@wisc.edu",
      linkedin: "https://www.linkedin.com/in/piha-patel-461633281/",
    },
  ]

  const getAvatarColor = (position: string) => {
    switch (position) {
      case "President":
        return "bg-gradient-to-br from-red-500 to-red-600"
      case "Vice President":
        return "bg-gradient-to-br from-blue-500 to-blue-600"
      case "Secretary":
        return "bg-gradient-to-br from-green-500 to-green-600"
      case "Events Head":
        return "bg-gradient-to-br from-purple-500 to-purple-600"
      case "Social Media Head":
        return "bg-gradient-to-br from-yellow-500 to-orange-500"
      default:
        return "bg-gradient-to-br from-gray-500 to-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Executive Board
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders driving dotData's mission to promote data science education and community at
            UW-Madison.
          </p>
        </header>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <Card
              key={member.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="flex flex-col items-center pt-8 pb-4">
                <Avatar className="h-28 w-28 mb-6 ring-4 ring-white shadow-lg">
                  <AvatarImage src={`/placeholder.svg?height=112&width=112`} alt={member.name} />
                  <AvatarFallback className={`text-2xl font-bold text-white ${getAvatarColor(member.position)}`}>
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h2>
                  <p className="text-sm font-semibold text-blue-600 mb-4">{member.position}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex gap-2 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                    onClick={() => window.open(`mailto:${member.email}`, "_blank")}
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                    onClick={() => window.open(member.linkedin, "_blank")}
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

