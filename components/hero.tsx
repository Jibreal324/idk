export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/perspective-hero.jpg" 
          alt="Project perspective"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/50"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Contemporary Architectural Design
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A modern 3-bedroom bungalow with innovative digital construction technologies and sustainable design principles
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a 
            href="#overview"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            View Project
          </a>
          <a
            href="#innovation"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
          >
            Innovation Details
          </a>
        </div>

        <div className="pt-12 text-sm text-muted-foreground space-y-2">
          <p>CMA4002 Assessment - October 2024</p>
          <p>Academic Presentation</p>
        </div>
      </div>
    </section>
  )
}
