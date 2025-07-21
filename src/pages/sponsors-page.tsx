import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SponsorsPage() {
  // Placeholder data for sponsors/partners
  const sponsors = [
    {
      id: 1,
      name: "Epic Systems",
      level: "",
      description: "",
      logoUrl: "public/epiclogo.png",
    },
    {
      id: 2,
      name: "Baird",
      level: "",
      description:
        "",
      logoUrl: "public/bairdlogo.png",
    },
    {
      id: 3,
      name: "Grafana",
      level: "",
      description:
        "",
      logoUrl: "public/grafanalogo.png",
    },
    {
      id: 4,
      name: "UW Madison Libraries",
      level: "",
      description:
        "",
      logoUrl: "public/uwmadliblogo.jpg",
    },
    {
      id: 5,
      name: "UW Madison CDIS",
      level: "",
      description:
        "",
      logoUrl: "public/cdislogo.png",
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
                <div className="w-20 h-10 mb-4">
                  <img
                    src={sponsor.logoUrl}
                    alt={`${sponsor.name} logo`}
                    className="w-full h-full object-contain rounded"
                  />
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
