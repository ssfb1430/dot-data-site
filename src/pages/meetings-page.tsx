import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, MapPin } from "lucide-react"

export default function MeetingsPage() {
  // Placeholder data for upcoming meetings
  const upcomingMeetings = [
    {
      id: 1,
      title: "Data Visualization Workshop",
      date: "May 20, 2025",
      time: "4:00 PM - 5:30 PM",
      location: "Computer Sciences Building, Room 1240",
      description: "Learn how to create effective data visualizations using Python and Matplotlib.",
    },
    {
      id: 2,
      title: "Machine Learning Study Group",
      date: "May 27, 2025",
      time: "5:00 PM - 6:30 PM",
      location: "Memorial Union, Tripp Commons",
      description: "Collaborative session focusing on supervised learning algorithms and implementations.",
    },
    {
      id: 3,
      title: "Guest Speaker: Data Ethics",
      date: "June 3, 2025",
      time: "4:30 PM - 6:00 PM",
      location: "Social Sciences Building, Room 5208",
      description: "Special guest lecture on ethical considerations in data science and AI applications.",
    },
  ]

  // Placeholder data for past meetings
  const pastMeetings = [
    {
      id: 4,
      title: "SQL Workshop for Beginners",
      date: "May 6, 2025",
      time: "4:00 PM - 5:30 PM",
      location: "Computer Sciences Building, Room 1221",
      description: "Introduction to SQL queries and database management for data analysis.",
    },
    {
      id: 5,
      title: "Data Cleaning Techniques",
      date: "April 29, 2025",
      time: "5:00 PM - 6:00 PM",
      location: "Memorial Union, Landmark Room",
      description: "Hands-on session covering methods for preparing and cleaning datasets.",
    },
    {
      id: 6,
      title: "Intro to R Programming",
      date: "April 22, 2025",
      time: "4:30 PM - 6:00 PM",
      location: "Van Vleck Hall, Room B102",
      description: "Beginner-friendly introduction to R for statistical analysis and data visualization.",
    },
    {
      id: 7,
      title: "Data Science Career Panel",
      date: "April 15, 2025",
      time: "5:00 PM - 6:30 PM",
      location: "Grainger Hall, Room 1100",
      description: "Panel discussion with industry professionals about careers in data science.",
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
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{meeting.time}</span>
          </div>
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