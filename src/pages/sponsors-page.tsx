import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SponsorsPage() {
  // Placeholder data for sponsors/partners
  const sponsors = [
    {
      id: 1,
      name: "DataTech Solutions",
      level: "Platinum Partner",
      description:
        "Leading provider of data analytics software supporting student workshops and providing internship opportunities for club members.",
      logoColor: "bg-gradient-to-br from-blue-500 to-purple-600",
      logoText: "DT",
    },
    {
      id: 2,
      name: "Midwest Analytics",
      level: "Gold Partner",
      description:
        "Regional data consulting firm offering mentorship programs and technical resources for student projects and competitions.",
      logoColor: "bg-gradient-to-br from-amber-400 to-amber-600",
      logoText: "MA",
    },
    {
      id: 3,
      name: "UW Statistics Department",
      level: "Academic Partner",
      description:
        "Departmental support providing faculty advisors, workshop spaces, and academic resources for club activities and events.",
      logoColor: "bg-gradient-to-br from-red-500 to-red-700",
      logoText: "UW",
    },
    {
      id: 4,
      name: "QuantumData Inc.",
      level: "Silver Partner",
      description:
        "Tech startup founded by UW alumni offering cloud computing resources and guest speakers for technical workshops.",
      logoColor: "bg-gradient-to-br from-gray-400 to-gray-600",
      logoText: "QD",
    },
    {
      id: 5,
      name: "Madison Tech Alliance",
      level: "Community Partner",
      description:
        "Local technology consortium connecting students with the broader tech community through networking events and job fairs.",
      logoColor: "bg-gradient-to-br from-green-500 to-green-700",
      logoText: "MTA",
    },
    {
      id: 6,
      name: "Badger Innovations",
      level: "Bronze Partner",
      description:
        "Campus innovation hub providing workspace, equipment, and seed funding for student-led data science projects.",
      logoColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      logoText: "BI",
    },
    {
      id: 7,
      name: "Global Data Institute",
      level: "Research Partner",
      description:
        "International research organization collaborating on data science research projects and providing access to unique datasets.",
      logoColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      logoText: "GDI",
    },
    {
      id: 8,
      name: "TechStart Foundation",
      level: "Nonprofit Partner",
      description:
        "Nonprofit organization supporting diversity in tech by funding scholarships and inclusive programming for underrepresented students.",
      logoColor: "bg-gradient-to-br from-teal-500 to-teal-700",
      logoText: "TSF",
    },
  ]

  // Function to get border color based on partnership level
  type PartnerLevel = "Platinum Partner" | "Gold Partner" | "Silver Partner" | "Bronze Partner" | "Academic Partner" | "Community Partner" | "Research Partner" | "Nonprofit Partner";
  
  const getBorderColor = (level: PartnerLevel) => {
    switch (level) {
      case "Platinum Partner":
        return "border-purple-200"
      case "Gold Partner":
        return "border-amber-200"
      case "Silver Partner":
        return "border-gray-200"
      case "Bronze Partner":
        return "border-orange-200"
      case "Academic Partner":
        return "border-red-200"
      case "Community Partner":
        return "border-green-200"
      case "Research Partner":
        return "border-indigo-200"
      case "Nonprofit Partner":
        return "border-teal-200"
      default:
        return "border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sponsors / Partnerships</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're grateful to these organizations for their support in advancing data science education and
            opportunities for our members.
          </p>
        </header>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sponsors.map((sponsor) => (
            <Card
              key={sponsor.id}
              className={`border-2 ${getBorderColor(sponsor.level as PartnerLevel)} hover:shadow-md transition-shadow`}
            >
              <CardHeader className="flex flex-col items-center pt-6 pb-2">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 ${sponsor.logoColor}`}
                >
                  {sponsor.logoText}
                </div>
                <div className="text-center">
                  <CardTitle className="text-xl">{sponsor.name}</CardTitle>
                  <CardDescription className="text-sm font-medium">{sponsor.level}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm text-center">{sponsor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}