import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MadDataPage from "./pages/maddata-page"
import BoardPage from "./pages/board-page"
import MeetingsPage from "./pages/meetings-page"
import OpportunitiesPage from "./pages/opportunities-page"
import ResourcesEncyclopedia from "./pages/resources-encyclopedia"
import SponsorsPage from "./pages/sponsors-page"
import Navbar from "./components/navbar"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route
              path="/"
              element={
                <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Dot Data</h1>
                    <p className="text-gray-600">Your one-stop platform for data science resources and opportunities.</p>
                  </div>
                </div>
              }
            />
            <Route path="/maddata" element={<MadDataPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/meetings" element={<MeetingsPage />} />
            <Route path="/resources" element={<ResourcesEncyclopedia />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App


