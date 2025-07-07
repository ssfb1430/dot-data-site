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
      bio: "Senior studying Computer Science and Statistics. Passionate about machine learning and its applications in healthcare. Previously interned at Epic Systems and Google.",
      avatar: "AJ",
    },
    {
      id: 2,
      name: "Maya Patel",
      position: "Vice President",
      bio: "Junior majoring in Data Science. Interested in natural language processing and computational linguistics. Research assistant in the UW NLP lab.",
      avatar: "MP",
    },
    {
      id: 3,
      name: "David Kim",
      position: "Treasurer",
      bio: "Senior in Statistics and Economics. Focused on financial data analysis and predictive modeling. Has experience managing budgets for multiple student organizations.",
      avatar: "DK",
    },
    {
      id: 4,
      name: "Sophia Chen",
      position: "Secretary",
      bio: "Junior studying Information Science. Passionate about data visualization and user experience. Previously worked on data journalism projects with the campus newspaper.",
      avatar: "SC",
    },
    {
      id: 5,
      name: "Marcus Williams",
      position: "Events Coordinator",
      bio: "Senior in Computer Science. Enthusiastic about creating engaging learning experiences. Has organized multiple hackathons and workshops across campus.",
      avatar: "MW",
    },
    {
      id: 6,
      name: "Olivia Rodriguez",
      position: "Outreach Director",
      bio: "Junior double majoring in Communication Arts and Data Science. Skilled in building partnerships with industry professionals and other campus organizations.",
      avatar: "OR",
    },
    {
      id: 7,
      name: "James Wilson",
      position: "Technical Director",
      bio: "Senior in Computer Engineering. Experienced in full-stack development and cloud infrastructure. Maintains the club's technical resources and project repositories.",
      avatar: "JW",
    },
    {
      id: 8,
      name: "Emma Davis",
      position: "Mentorship Chair",
      bio: "Senior in Statistics. Passionate about making data science accessible to beginners. Developed the club's peer mentoring program connecting underclassmen with experienced members.",
      avatar: "ED",
    },
  ]

  // Function to get background color based on position
  const getAvatarColor = (position: string) => {
    switch (position) {
      case "President":
        return "bg-red-500"
      case "Vice President":
        return "bg-blue-500"
      case "Treasurer":
        return "bg-green-500"
      case "Secretary":
        return "bg-purple-500"
      case "Events Coordinator":
        return "bg-yellow-500"
      case "Outreach Director":
        return "bg-pink-500"
      case "Technical Director":
        return "bg-indigo-500"
      case "Mentorship Chair":
        return "bg-teal-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Board</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of student leaders who make MadData possible.
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
