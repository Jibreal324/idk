'use client';

import PDFDownloadButton from './pdf-download-button';

export default function Team() {
  const teamMembers = [
    {
      name: 'Team Member 1',
      role: 'Project Lead & Design',
      description: 'Add team member details and contributions'
    },
    {
      name: 'Team Member 2',
      role: 'Documentation & Analysis',
      description: 'Add team member details and contributions'
    },
    {
      name: 'Team Member 3',
      role: 'Innovation Research',
      description: 'Add team member details and contributions'
    },
    {
      name: 'Team Member 4',
      role: 'Presentation & Coordination',
      description: 'Add team member details and contributions'
    }
  ]

  return (
    <section id="team" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-primary">Project Team</h2>
          <p className="text-lg text-secondary">Collaborative effort and individual contributions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-card rounded-lg overflow-hidden border border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <p className="text-sm text-secondary">Add Member Photo</p>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-primary">{member.name}</h3>
                <p className="text-sm font-semibold text-secondary">{member.role}</p>
                <p className="text-xs text-secondary/70 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-primary/50 rounded-lg p-8 shadow-xl shadow-primary/10">
          <h3 className="text-2xl font-bold text-primary mb-6">Assessment Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-primary text-lg">Course Details</h4>
              <p className="text-sm text-secondary"><span className="font-semibold">Course:</span> CMA4002</p>
              <p className="text-sm text-secondary"><span className="font-semibold">Assessment:</span> Group Presentation & Design Documentation</p>
              <p className="text-sm text-secondary"><span className="font-semibold">Duration:</span> October 2024</p>
            </div>
            <div className="space-y-3 border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-primary text-lg">Grading Criteria</h4>
              <ul className="text-sm text-secondary space-y-1">
                <li>✓ Design concept and innovation</li>
                <li>✓ Digital technology integration</li>
                <li>✓ Management theory application</li>
                <li>✓ Presentation clarity and engagement</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary/30">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <p className="text-sm text-secondary"><span className="font-semibold text-primary">Presentation Date:</span> April 19, 2026</p>
              </div>
              <PDFDownloadButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
