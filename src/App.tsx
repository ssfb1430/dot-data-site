import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import MadDataPage from "./pages/maddata-page"
import BoardPage from "./pages/board-page"
import MeetingsPage from "./pages/meetings-page"
import OpportunitiesPage from "./pages/opportunities-page"
import ResourcesEncyclopedia from "./pages/resources-encyclopedia"
import SponsorsPage from "./pages/sponsors-page"
import Navbar from "./components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen, Network, Target } from "lucide-react"

function App() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Interdisciplinary Community",
      description:
        "Connect with students across all majors and departments, discovering how data science fits into diverse fields and careers.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: "Educational Excellence",
      description:
        "Learn from faculty and industry professionals through seminars covering computer science, statistical analysis, and domain expertise.",
    },
    {
      icon: <Network className="h-8 w-8 text-green-600" />,
      title: "Professional Networking",
      description:
        "Attend networking events with professionals working on data-driven projects in sociology, finance, biology, public health, and more.",
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Real-World Applications",
      description:
        "Explore practical applications of data science, big data, and machine learning technologies across various industries.",
    },
  ]

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route
              path="/"
              element={
                <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
                  {/* Hero Section */}
                  <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                      <div className="flex justify-center mb-8 relative">
                        <img
                          src="/dotdata-logo.png"
                          alt="dotData Logo"
                          className="w-32 h-32 rounded-2xl shadow-lg relative z-10"
                        />
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
                      </div>

                      <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                          dotData
                        </span>
                      </h1>

                      <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
                        UW-Madison's premier data science student organization
                      </p>

                      <p className="text-lg text-gray-700 mb-8 max-w-5xl mx-auto leading-relaxed">
                        We promote education and discussion around data science, big data, and machine learning
                        technologies. Our interdisciplinary approach combines computer science, statistical analysis,
                        and domain expertise to inspire, teach, and connect students across campus, regardless of major
                        or department.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link to="/meetings">
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                          >
                            Join Our Next Event
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                        <Link to="/board">
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
                          >
                            Meet Our Team
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </section>

                  {/* Features Section */}
                  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join dotData?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Discover how our interdisciplinary approach to data science can enhance your academic journey
                          and career prospects
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                          <Card
                            key={index}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                          >
                            <CardHeader className="pb-4">
                              <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-gray-50">{feature.icon}</div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="text-gray-700 text-base leading-relaxed">
                                {feature.description}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* What We Do Section */}
                  <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          From seminars to hackathons, we provide diverse opportunities for learning and growth
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
                          <CardHeader>
                            <CardTitle className="text-xl text-blue-800">Seminars & Workshops</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700">
                              Regular seminars by faculty and industry professionals covering interdisciplinary,
                              data-driven projects spanning sociology, finance, biology, public health, and more.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
                          <CardHeader>
                            <CardTitle className="text-xl text-purple-800">MadData Hackathon</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700">
                              Our annual data science hackathon where students collaborate to find innovative solutions
                              for modern problems using data science tools and techniques.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
                          <CardHeader>
                            <CardTitle className="text-xl text-green-800">Resource Sharing</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700">
                              We find and share the most effective resources for learning data science, creating a
                              collaborative environment for knowledge exchange.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </section>

                  {/* CTA Section */}
                  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
                      <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Whether you're a beginner or experienced in data science, there's a place for you in dotData.
                        Connect with like-minded students and industry professionals today.
                      </p>
                      <Link to="/maddata">
                        <Button
                          size="lg"
                          className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
                        >
                          Explore MadData
                        </Button>
                      </Link>
                    </div>
                  </section>
                  {/* Contact Section */}
                      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
                        <div className="max-w-4xl mx-auto text-center">
                          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                          <p className="text-lg text-gray-600 mb-8">
                            Have questions, ideas, or want to collaborate? We’d love to hear from you.
                          </p>
                          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <a
                              href="mailto:dotdatauw@gmail.com"
                              className="text-blue-600 hover:text-blue-800 text-lg font-medium flex items-center gap-2"
                            >
                              <svg
                                className="w-5 h-5 text-blue-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1112.21 3" />
                              </svg>
                              dotdatauw@gmail.com
                            </a>

                            <a
                              href="https://www.instagram.com/dotdatascience/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-600 hover:text-pink-800 text-lg font-medium flex items-center gap-2"
                            >
                              <svg
                                className="w-5 h-5 text-pink-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4 7.75A3.75 3.75 0 017.75 4h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5z" />
                                <path d="M12 8.25A3.75 3.75 0 1015.75 12 3.75 3.75 0 0012 8.25zM12 14a2 2 0 112-2 2 2 0 01-2 2zM17.5 6.75a.75.75 0 11-.75-.75.75.75 0 01.75.75z" />
                              </svg>
                              @dotdatascience
                            </a>
                          </div>
                        </div>
                      </section>

                </div>
              }
            />
            <Route path="/maddata" element={<MadDataPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/meetings" element={<MeetingsPage />} />
            <Route path="/resources" element={<ResourcesEncyclopedia />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

