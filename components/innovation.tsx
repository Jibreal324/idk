export default function Innovation() {
  const innovations = [
    {
      title: 'BIM Technology',
      description: 'Building Information Modeling for coordinated design and construction documentation',
      icon: '🏗️'
    },
    {
      title: 'Drone Documentation',
      description: 'Aerial survey and site analysis using unmanned aerial vehicles',
      icon: '🚁'
    },
    {
      title: 'AI-Assisted Design',
      description: 'Machine learning for spatial optimization and design iteration',
      icon: '⚙️'
    },
    {
      title: 'Digital Fabrication',
      description: 'CNC manufacturing and prefabrication for timber and material elements',
      icon: '🔧'
    },
    {
      title: 'Sustainable Materials',
      description: 'Low-impact timber cladding, recycled brick, and energy-efficient glazing',
      icon: '♻️'
    },
    {
      title: 'Smart Integration',
      description: 'IoT-ready infrastructure for future home automation systems',
      icon: '💡'
    }
  ]

  return (
    <section id="innovation" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-primary">Innovation & Digital Construction</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            This project integrates contemporary digital technologies and management approaches in construction and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((item, idx) => (
            <div key={idx} className="bg-card rounded-lg p-6 border border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition space-y-3">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-primary/50 rounded-lg p-8 space-y-4 shadow-xl shadow-primary/10">
          <h3 className="text-2xl font-bold text-primary">Management Innovation Theories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-primary">Diffusion of Innovation (Rogers, 2003)</h4>
              <p className="text-sm text-secondary">
                This project demonstrates the adoption of contemporary digital construction technologies across multiple project phases. BIM technology adoption represents the relative advantage of integrated documentation and coordination systems.
              </p>
            </div>
            <div className="space-y-3 border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-primary">Disruptive Innovation (Christensen, 1997)</h4>
              <p className="text-sm text-secondary">
                AI-assisted design and drone documentation represent disruptive innovations that challenge traditional architectural practice, enabling more efficient design exploration and site analysis methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
