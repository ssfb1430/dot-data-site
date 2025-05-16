import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResourcesEncyclopedia() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resources Encyclopedia</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of learning resources, tools, and references for data science enthusiasts.
          </p>
        </header>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Resources are being curated and will be available soon.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}