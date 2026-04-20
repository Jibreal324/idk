'use client'

import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-primary/50 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-[#f4d669] rounded-lg flex items-center justify-center shadow-lg shadow-primary/50">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="text-lg font-bold text-primary">Architecture</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#overview" className="text-sm text-secondary hover:text-primary transition font-medium">Overview</a>
          <a href="#elevations" className="text-sm text-secondary hover:text-primary transition font-medium">Elevations</a>
          <a href="#floorplan" className="text-sm text-secondary hover:text-primary transition font-medium">Floor Plan</a>
          <a href="#innovation" className="text-sm text-secondary hover:text-primary transition font-medium">Innovation</a>
          <a href="#team" className="text-sm text-secondary hover:text-primary transition font-medium">Team</a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-primary/50 bg-background/98">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#overview" className="text-sm text-secondary hover:text-primary font-medium">Overview</a>
            <a href="#elevations" className="text-sm text-secondary hover:text-primary font-medium">Elevations</a>
            <a href="#floorplan" className="text-sm text-secondary hover:text-primary font-medium">Floor Plan</a>
            <a href="#innovation" className="text-sm text-secondary hover:text-primary font-medium">Innovation</a>
            <a href="#team" className="text-sm text-secondary hover:text-primary font-medium">Team</a>
          </div>
        </div>
      )}
    </nav>
  )
}
