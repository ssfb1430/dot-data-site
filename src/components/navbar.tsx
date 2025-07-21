import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Dot Data</span>
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link to="/maddata" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              MadData
            </Link>
            <Link to="/board" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Board
            </Link>
            <Link to="/meetings" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Meetings
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Resources
            </Link>
            <Link to="/sponsors" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Sponsors
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 
