'use client'

import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import ProjectOverview from '@/components/project-overview'
import Elevations from '@/components/elevations'
import FloorPlan from '@/components/floor-plan'
import Innovation from '@/components/innovation'
import Team from '@/components/team'
import Footer from '@/components/footer'
import GoldenDust from '@/components/golden-dust'

export default function Page() {
  return (
    <main className="min-h-screen bg-background relative">
      <GoldenDust />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ProjectOverview />
        <Elevations />
        <FloorPlan />
        <Innovation />
        <Team />
        <Footer />
      </div>
    </main>
  )
}
