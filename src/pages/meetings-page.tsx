import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, MapPin } from "lucide-react"

export default function MeetingsPage() {

  const IMAGES = {
    kickoff: "/kickoff.png", // replace with "/kickoff.png" if you add one
    pwc: "/pWc.png", // replace with "/pwc.png" when you add it
    madData: "/madData.png", // replace with "/maddata.png" if you add one
  }

  interface Meeting {
    id: number
    title: string
    date: string
    time: string
    location: string
    description: string
    image?: string
    imageFit?: "cover" | "contain"
    imageBg?: string // tailwind class for background behind contain images
  }

  // Upcoming meetings (Heartland Farms stays upcoming + add attached meetings)
  const upcomingMeetings: Meeting[] = [
    {
      id: 101,
      title: "Industry Event with Heartland Farms",
      date: "3rd December 2025",
      time: "6:00pm",
      location: "Morgridge Hall 2516",
      description:
        "Join us for a conversation with Heartland Farms as they discuss their computer-vision potato sorter project, machine learning algorithms, SQL database design, and real-world supply & manufacturing applications.",
      // no image (optional)
    },
    {
      id: 102,
      title: "Kickoff",
      date: "28th January 2026",
      time: "",
      location: "Morgridge Hall 2516",
      image: IMAGES.kickoff,
      imageFit: "contain", // logos look nicer as contain
      imageBg: "bg-white",
      description:
        "Spring ’25 kickoff meeting: launch MadData, share a roadmap of upcoming meetings, introduce the board, and kick things off with food, music, and icebreakers.",
    },
    {
      id: 103,
      title: "PwC",
      date: "11th February 2026",
      time: "",
      location: "Morgridge Hall 2516",
      image: IMAGES.pwc,
      imageFit: "contain",
      imageBg: "bg-white",
      description:
        "PwC will present about the company and may provide food. They plan to bring 1–2 engineers to share data projects (details to be confirmed with the board).",
    },
    {
      id: 104,
      title: "MadData Team Building",
      date: "18th February 2026",
      time: "",
      location: "Morgridge Hall 2516",
      description:
        "MadData logistics + mixer. Come meet teammates if you don’t have a group yet, and we’ll review winning submissions with tips and hints.",
      // no image (optional)
    },
    {
      id: 105,
      title: "MadData Hackathon",
      date: "21st–22nd February 2026",
      time: "",
      location: "Morgridge Hall 2516",
      image: IMAGES.madData,
      imageFit: "cover", // if this is a banner/photo, cover is best
      imageBg: "bg-gray-100",
      description:
        "The wait is over—MadData Hackathon is here! Get ready for 48 hours of intense coding, collaboration, and creativity. Be sure to bring your A-game as you work with your team to solve real-world challenges.",
    },
  ]

  // Past meetings (moved all current upcoming except Heartland Farms)
  const pastMeetings: Meeting[] = [
    {
      id: 201,
      title: "Matthew Bruehl NVIDIA Data Analytics & Big Data Tech Lead",
      date: "12th November 2025",
      time: "6:00pm",
      location: "Morgridge Hall 2532",
      description:
        "Matthew will be presenting about AI in Industry and How to Prepare for the future with AI — covering key skills, trends, and what companies are looking for as AI continues to grow.",
    },
    {
      id: 202,
      title: "Resume Review and Exec Panel AMA",
      date: "19th November 2025",
      time: "6:00pm",
      location: "Morgridge Hall 2532",
      description:
        "Join us for a Resume Review and a Panel with all the Exec Members of dotData to ask us any questions about courses, internships, the club, etc.",
    },
    {
      id: 203,
      title: "Christmas Social",
      date: "10th December 2025",
      time: "6:00pm",
      location: "Morgridge Hall 2532",
      description:
        "Make some gingerbread houses with the board and fellow members as we wrap up the semester.",
    },
    {
      id: 204,
      title: "Matthew Bruehl NVIDIA Data Analytics & Big Data Tech Lead",
      date: "April 9, 2025",
      time: "",
      location: "Computer Sciences Building, Room 1240",
      description: "Guest speaker session with NVIDIA's Data Analytics & Big Data Tech Lead.",
    },
    {
      id: 205,
      title: "Capture the Flag Event",
      date: "April 2, 2025",
      time: "",
      location: "Computer Sciences Building, Room 1240",
      description: "Data science themed capture the flag competition.",
    },
    {
      id: 206,
      title: "Darrell Director of Analytics at Aurora",
      date: "October 30, 2024",
      time: "",
      location: "Computer Sciences Building, Room 1240",
      description: "Insights from Aurora's Director of Analytics on industry applications.",
    },
    {
      id: 207,
      title: "American Airlines: Operations and Analysis",
      date: "October 11, 2024",
      time: "",
      location: "Computer Sciences Building, Room 1240",
      description: "Learn about data analytics applications in airline operations and analysis.",
    },
  ]

  const MeetingCard = ({ meeting, isUpcoming }: { meeting: Meeting; isUpcoming: boolean }) => {
    const fit = meeting.imageFit ?? "cover"
    const bg = meeting.imageBg ?? "bg-gray-100"

    return (
      <Card
        className={`mb-4 overflow-hidden ${
          isUpcoming ? "border-l-4 border-l-blue-500" : "border-l-4 border-l-gray-400"
        }`}
      >
        {meeting.image && (
  <div className={`flex justify-center ${bg}`}>
    <img
      src={meeting.image}
      alt={meeting.title}
      className="h-24 max-w-[220px] object-contain"
      loading="lazy"
    />
  </div>
)}


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
  }

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
