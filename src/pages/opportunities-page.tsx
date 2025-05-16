import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OpportunitiesPage() {
  // Placeholder data for opportunities
  const opportunities = [
    {
      id: 1,
      title: "Data Science Intern",
      company: "Epic Systems",
      type: "Internship",
      location: "Madison, WI",
      description:
        "Summer internship opportunity working with healthcare data. Gain experience in data analysis, visualization, and machine learning applications in the healthcare industry.",
    },
    {
      id: 2,
      title: "Research Assistant",
      company: "UW-Madison Statistics Department",
      type: "Research",
      location: "On Campus",
      description:
        "Assist faculty with ongoing research projects involving statistical modeling and data analysis. Perfect for students interested in academic research.",
    },
    {
      id: 3,
      title: "Midwest Data Science Conference",
      company: "Midwest Data Association",
      type: "Event",
      location: "Chicago, IL",
      description:
        "Annual conference featuring workshops, presentations, and networking opportunities with data professionals from across the Midwest region.",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "American Family Insurance",
      type: "Internship",
      location: "Madison, WI",
      description:
        "Analyze insurance data to identify trends and patterns. Help develop dashboards and reports for business stakeholders using SQL, Python, and Tableau.",
    },
    {
      id: 5,
      title: "Hackathon: Data for Good",
      company: "Wisconsin Data Initiative",
      type: "Event",
      location: "Memorial Union",
      description:
        "Weekend hackathon focused on using data science to address social and environmental challenges. Open to all skill levels with mentorship available.",
    },
    {
      id: 6,
      title: "Machine Learning Engineer",
      company: "Exact Sciences",
      type: "Full-time",
      location: "Madison, WI",
      description:
        "Develop and implement machine learning models to improve cancer screening technologies. Seeking recent or upcoming graduates with strong Python skills.",
    },
    {
      id: 7,
      title: "Data Visualization Workshop",
      company: "MadData Club",
      type: "Workshop",
      location: "Computer Sciences Building",
      description:
        "Hands-on workshop covering advanced data visualization techniques using Python libraries including Matplotlib, Seaborn, and Plotly.",
    },
    {
      id: 8,
      title: "Business Intelligence Intern",
      company: "CUNA Mutual Group",
      type: "Internship",
      location: "Madison, WI",
      description:
        "Help transform raw data into actionable insights through dashboards and reports. Learn to work with enterprise data warehouses and BI tools.",
    },
  ]

  // Function to get badge color based on opportunity type
  type OpportunityType = "Internship" | "Research" | "Event" | "Workshop" | "Full-time";
  
  const getBadgeColor = (type: OpportunityType) => {
    switch (type) {
      case "Internship":
        return "bg-blue-100 text-blue-800"
      case "Research":
        return "bg-purple-100 text-purple-800"
      case "Event":
        return "bg-green-100 text-green-800"
      case "Workshop":
        return "bg-amber-100 text-amber-800"
      case "Full-time":
        return "bg-rose-100 text-rose-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover internships, research positions, events, and more to advance your data science journey.
          </p>
        </header>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.id} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold">{opportunity.title}</CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${getBadgeColor(opportunity.type as OpportunityType)}`}>
                    {opportunity.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-900">{opportunity.company}</div>
                  <div className="text-sm text-gray-500">{opportunity.location}</div>
                </div>
                <p className="text-gray-700">{opportunity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}