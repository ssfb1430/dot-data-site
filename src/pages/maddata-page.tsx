import React from "react"
import { ArrowRight, BarChart3, Database, FileSpreadsheet } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MadDataPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            MadData
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MadData is dotData's annual data science hackathon. This competition happens in February, is open to all students at UW-Madison, and is free to enter. MadData is a 
            great way for students to find innovative solutions for modern problems using data. It is a great way to gain real-world experience working with data science tools. 
          </p>
        </header>

        {/* Projects/Datasets Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">2025 MadData Winners</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>ClaimReady</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Computer Vision AI to help homeowners scan, value, and protect their belongings 
                  from forest fire losses—making the insurance claims process faster and less stressful.
                </p>
              </CardContent>
              <CardFooter>
                <a href="https://devpost.com/software/claimready?_gl=1*i70yaq*_gcl_au*MTc2MDUxODY0MC4xNzUyOTQxNTc5*_ga*MTAxMjU0MjAwOS4xNzA3NDA0MTg3*_ga_0YHJK3Y10M*czE3NTMwNzIyNTEkbzckZzEkdDE3NTMwNzI0MzkkajI5JGwwJGgw" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="gap-1">
                Learn more <ArrowRight className="h-4 w-4" />
                </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Project Card 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>NodeTree</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Boost Your Thought Journey
                </p>
              </CardContent>
              <CardFooter>
                <a href="https://devpost.com/software/nodetree?_gl=1*1246msf*_gcl_au*MTc2MDUxODY0MC4xNzUyOTQxNTc5*_ga*MTAxMjU0MjAwOS4xNzA3NDA0MTg3*_ga_0YHJK3Y10M*czE3NTMwNzIyNTEkbzckZzEkdDE3NTMwNzI3NDQkajYwJGwwJGgw" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="gap-1">
                Learn more <ArrowRight className="h-4 w-4" />
                </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Project Card 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <FileSpreadsheet className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Ai-Interviewer</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our project was inspired by the challenges and stress people face during job interviews. We recognized the need for a tool that 
                  could help candidates practice and improve their interview skills in a low-pressure environment.
                </p>
              </CardContent>
              <CardFooter>
                <a href="https://devpost.com/software/nodetree?_gl=1*796znj*_gcl_au*MTc2MDUxODY0MC4xNzUyOTQxNTc5*_ga*MTAxMjU0MjAwOS4xNzA3NDA0MTg3*_ga_0YHJK3Y10M*czE3NTMwNzIyNTEkbzckZzEkdDE3NTMwNzI4MzMkajMzJGwwJGgw" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="gap-1">
                Learn more <ArrowRight className="h-4 w-4" />
                </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Featured Dataset */}
  
  )
} 
