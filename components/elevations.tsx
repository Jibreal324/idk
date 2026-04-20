'use client'

import { useState } from 'react'

export default function Elevations() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedName, setSelectedName] = useState<string>('')

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

  const openLightbox = (image: string, name: string) => {
    setSelectedImage(image)
    setSelectedName(name)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedName('')
  }

  return (
    <section id="elevations" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Architectural Elevations</h2>
          <p className="text-lg text-secondary">Detailed views showcasing the design volumes and material expression</p>
          <p className="text-sm text-secondary/70 mt-2">Click on any image to enlarge</p>
        </div>

        {/* All elevations grid */}
        <div className="pdf-elevations-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {elevations.map(elev => (
            <div 
              key={elev.id} 
              className="bg-card border border-primary/50 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
              onClick={() => openLightbox(elev.image, elev.name)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={elev.image} 
                  alt={elev.name}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white/0 group-hover:text-white/90 transition-colors duration-300 text-lg font-semibold">
                    Click to Enlarge
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-primary mb-2">{elev.name}</h3>
                <p className="text-secondary text-sm leading-relaxed">{elev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center">
            <button 
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white text-4xl font-light transition-colors"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-primary mb-4">{selectedName}</h3>
            <img 
              src={selectedImage} 
              alt={selectedName}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-secondary mt-4 text-center">Click anywhere outside to close</p>
          </div>
        </div>
      )}
    </section>
  )
}
