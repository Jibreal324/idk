export default function FloorPlan() {
  return (
    <section id="floorplan" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary">Floor Plan Documentation</h2>
            <p className="text-lg text-secondary">Detailed spatial organization and functional layout</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-primary/50 rounded-lg p-6 hover:border-primary transition">
                <h3 className="text-xl font-bold text-primary mb-3">Level 1 Overview</h3>
                <ul className="text-secondary space-y-2 text-sm">
                  <li>• Master Suite with ensuite bathroom</li>
                  <li>• Open plan living/kitchen area</li>
                  <li>• Island bench and dining integration</li>
                  <li>• Laundry and utility spaces</li>
                  <li>• Direct outdoor patio access</li>
                  <li>• Circulation core with stairs</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-primary/50 rounded-lg p-6 hover:border-primary transition">
                <h3 className="text-xl font-bold text-primary mb-3">Additional Features</h3>
                <ul className="text-secondary space-y-2 text-sm">
                  <li>• Bedroom 1: 4000mm x 3800mm</li>
                  <li>• Bedroom 2: 3800mm x 3000mm</li>
                  <li>• Bedroom 4: Additional sleeping space</li>
                  <li>• Shared bathroom facilities</li>
                  <li>• Wardrobe and storage integration</li>
                  <li>• WLC (Wet Licensed area)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden border border-primary/50 shadow-2xl shadow-[#d4af37]/10">
            <img 
              src="/floor-plan.jpg" 
              alt="Level 1 Floor Plan"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-primary/50 rounded-lg p-4 text-center hover:border-primary transition">
              <p className="text-sm text-secondary">Total Bedrooms</p>
              <p className="text-2xl font-bold text-primary mt-2">3-4</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-primary/50 rounded-lg p-4 text-center hover:border-primary transition">
              <p className="text-sm text-secondary">Living Spaces</p>
              <p className="text-2xl font-bold text-primary mt-2">4</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-primary/50 rounded-lg p-4 text-center hover:border-primary transition">
              <p className="text-sm text-secondary">Bathrooms</p>
              <p className="text-2xl font-bold text-primary mt-2">2+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
