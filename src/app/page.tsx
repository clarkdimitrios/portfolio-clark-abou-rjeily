import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { EducationExperience } from "@/components/EducationExperience"
import { Skills, Contact } from "@/components/SkillsContact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-blue-500/30 selection:text-blue-900">
      <Hero />
      <div className="bg-white">
        <About />
        <Projects />
        <EducationExperience />
        <Skills />
        <Contact />
      </div>
      <footer className="py-12 border-t border-zinc-100 bg-white text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Clark Abou-Rjeily. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </main>
  )
}
