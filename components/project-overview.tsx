'use client';

import PDFDownloadButton from './pdf-download-button';

export default function ProjectOverview() {
  return (
    <section id="overview" className="py-20 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">Project Overview</h2>
              <p className="text-lg text-secondary leading-relaxed">
                This project presents a contemporary 3-bedroom residential dwelling designed with innovative digital construction technologies and modern material applications. The design integrates multiple design volumes with distinct architectural expressions while maintaining functional coherence.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-3">
                <h3 className="font-semibold text-primary mb-1">Key Features</h3>
                <ul className="text-secondary space-y-2 text-sm">
                  <li>• Multi-volume design strategy with staggered connections</li>
                  <li>• Mixed material palette: brick, timber, glass, and plaster</li>
                  <li>• Large sliding glass doors and full-height glazing systems</li>
                  <li>• Integrated outdoor living spaces and patio areas</li>
                  <li>• Sustainable material selection and innovative finishes</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-primary/50 rounded-lg p-4 text-center hover:border-primary transition">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <p className="text-xs text-secondary mt-1">Bedrooms</p>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-primary/50 rounded-lg p-4 text-center hover:border-primary transition">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <p className="text-xs text-secondary mt-1">Design Volumes</p>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-primary/50 rounded-lg p-4 text-center hover:border-primary transition">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <p className="text-xs text-secondary mt-1">Levels</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <PDFDownloadButton />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden h-96">
            <img 
              src="/perspective-hero.jpg" 
              alt="3D visualization of the bungalow design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
