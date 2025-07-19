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
      bio: "Shekhar is a rising junior studying Computer Science and Statistics. He's interested in data science applications in sports, finance and healthcare. He currently works with the Wisconsin Football team as a Football Personnel Intern. ",
      avatar: "SS",
    },
    {
      id: 2,
      name: "Alka Lakadia",
      position: "Vice President",
      bio: "Junior majoring in Data Science. Interested in natural language processing and computational linguistics. Research assistant in the UW NLP lab.",
      avatar: "AL",
    },
    {
      id: 3,
      name: "Manasvi Khandelwal",
      position: "Secretary",
      bio: "Senior in Statistics and Economics. Focused on financial data analysis and predictive modeling. Has experience managing budgets for multiple student organizations.",
      avatar: "DK",
    },
    {
      id: 4,
      name: "Carter Kurzka",
      position: "Events Head",
      bio: "Junior studying Information Science. Passionate about data visualization and user experience. Previously worked on data journalism projects with the campus newspaper.",
      avatar: "CK",
    },
    {
      id: 5,
      name: "Piha Patel",
      position: "Social Media Head",
      bio: "Senior in Computer Science. Enthusiastic about creating engaging learning experiences. Has organized multiple hackathons and workshops across campus.",
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
