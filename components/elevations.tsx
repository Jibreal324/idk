'use client'

import { useState } from 'react'

export default function Elevations() {
  const [selectedElevation, setSelectedElevation] = useState('north')

  const elevations = [
    {
      id: 'north',
      name: 'North Elevation',
      description: 'Volume 1 (Living/Kitchen): Large sliding doors & full-height glass. Volume 2 (Master Suite): Dark timber cladding. Volume 3 (Additional Bedrooms): Brick veneer.',
      image: '/north-elevation.jpg'
    },
    {
      id: 'east',
      name: 'East Elevation',
      description: 'Volume 3: East elevation showing staggered logic with varied material finishes and window details. Side facade with connection logic between volumes.',
      image: '/east-elevation.jpg'
    },
    {
      id: 'south',
      name: 'South Elevation',
      description: 'Living/Kitchen area with plaster and glass storefront. External rear patio & sliding doors. Horizontal cedar cladding on upper volumes.',
      image: '/south-elevation.jpg'
    },
    {
      id: 'west',
      name: 'West Elevation',
      description: 'Master Suite side profile and glazing. Volume connection details showing staggered design approach. Horizontal cedar cladding and functional glazing.',
      image: '/west-elevation.jpg'
    }
  ]

  const current = elevations.find(e => e.id === selectedElevation)

  return (
    <section id="elevations" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Architectural Elevations</h2>
          <p className="text-lg text-secondary">Detailed views showcasing the design volumes and material expression</p>
        </div>

        {/* Interactive selector - visible on screen */}
        <div className="grid md:grid-cols-4 gap-4 mb-8 print:hidden">
          {elevations.map(elev => (
            <button
              key={elev.id}
              onClick={() => setSelectedElevation(elev.id)}
              className={`p-4 rounded-lg border-2 transition font-semibold ${
                selectedElevation === elev.id
                  ? 'border-primary bg-gradient-to-br from-[#d4af37]/20 to-[#f4d669]/10 text-primary shadow-lg shadow-[#d4af37]/20'
                  : 'border-primary/30 text-secondary hover:border-primary/70 bg-[#1a1a1a]'
              }`}
            >
              {elev.name}
            </button>
          ))}
        </div>

        {/* Selected elevation - visible on screen */}
        {current && (
          <div className="space-y-6 print:hidden">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-primary/50 rounded-lg overflow-hidden shadow-2xl shadow-[#d4af37]/10">
              <img 
                src={current.image} 
                alt={current.name}
                className="w-full h-auto object-cover"
                crossOrigin="anonymous"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">{current.name}</h3>
              <p className="text-secondary leading-relaxed">{current.description}</p>
            </div>
          </div>
        )}

        {/* All elevations grid - for PDF capture */}
        <div className="pdf-elevations-grid grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {elevations.map(elev => (
            <div key={elev.id} className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-primary/50 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={elev.image} 
                alt={elev.name}
                className="w-full h-auto object-cover"
                crossOrigin="anonymous"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-primary mb-2">{elev.name}</h3>
                <p className="text-secondary text-sm leading-relaxed">{elev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
