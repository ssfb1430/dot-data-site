import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, MapPin } from "lucide-react"

export default function MeetingsPage() {
  // Real upcoming meetings
  const upcomingMeetings = [
    {
      id: 1,
      title: "Google Activation X Tech Exploration Lab X DotData",
      date: "TBD",
      time: "",
      location: "TBD",
      description: "Collaborative event with Google and Tech Exploration Lab.",
    },
  ]

  // Real past meetings
  const pastMeetings = [
    {
      id: 4,
      title: "Matthew Bruehl NVIDIA Data Analytics & Big Data Tech Lead",
      date: "April 9, 2025",
      time: "",
      location: "Computer Sciences Building, Room 1240",
      description: "Guest speaker session with NVIDIA's Data Analytics & Big Data Tech Lead.",
    },
    {
      id: 5,
      title: "Capture the Flag Event",
      date: "April 2, 2025",
      time: "",
      location: "Computer Sciences Building, Room 1240",
      description: "Data science themed capture the flag competition.",
    },
    {
      id: 6,
      title: "Darrell Director of Analytics at Aurora",
      date: "October 30, 2024",
      time: "",
      location: "Computer Sciences Building, Room 1240",
      description: "Insights from Aurora's Director of Analytics on industry applications.",
    },
    {
      id: 7,
      title: "American Airlines: Operations and Analysis",
      date: "October 11, 2024",
      time: "",
      location: "Computer Sciences Building, Room 1240",
      description: "Learn about data analytics applications in airline operations and analysis.",
    },
  ]

  // Meeting card component
  interface Meeting {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
  }

  const MeetingCard = ({ meeting, isUpcoming }: { meeting: Meeting; isUpcoming: boolean }) => (
    <Card className={`mb-4 ${isUpcoming ? "border-l-4 border-l-blue-500" : "border-l-4 border-l-gray-400"}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{meeting.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span>{meeting.date}</span>
          </div>
          {meeting.time && (
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span>{meeting.time}</span>
            </div>
          )}
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{meeting.location}</span>
          </div>
          <p className="text-sm text-gray-700 mt-2">{meeting.description}</p>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming and Past Meetings</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for our regular meetings and events to learn, collaborate, and grow your data science skills.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upcoming Meetings Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <span className="w-2 h-6 bg-blue-500 mr-3 rounded-sm"></span>
              Upcoming Meetings
            </h2>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <MeetingCard key={meeting.id} meeting={meeting} isUpcoming={true} />
              ))}
            </div>
          </div>

          {/* Past Meetings Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <span className="w-2 h-6 bg-gray-400 mr-3 rounded-sm"></span>
              Past Meetings
            </h2>
            <div className="space-y-4">
              {pastMeetings.map((meeting) => (
                <MeetingCard key={meeting.id} meeting={meeting} isUpcoming={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
