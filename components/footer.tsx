export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-secondary py-12 px-6 border-t border-primary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-primary">Architecture</h3>
            <p className="text-sm opacity-80">CMA4002 Contemporary Architecture Project</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#overview" className="hover:text-primary transition">Overview</a></li>
              <li><a href="#elevations" className="hover:text-primary transition">Elevations</a></li>
              <li><a href="#innovation" className="hover:text-primary transition">Innovation</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Resources</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#" className="hover:text-primary transition">Design Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition">Technical Docs</a></li>
              <li><a href="#" className="hover:text-primary transition">PDF Report</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Contact</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>Email: project@example.com</li>
              <li>Date: April 19, 2026</li>
              <li>Assessment: October 2024</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; {currentYear} CMA4002 Architecture Project. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Use</a>
            <a href="#" className="hover:text-primary transition">Assessment Rubric</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
