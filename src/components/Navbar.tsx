"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [active, setActive] = React.useState("Home")
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px", // Trigger earlier when section enters from bottom
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry that is most visible
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      if (visibleEntry) {
        const id = visibleEntry.target.id
        const item = navItems.find((nav) => nav.href === `#${id}`)
        if (item) {
          setActive(item.name)
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Track all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.href.replace("#", ""))
      if (element) observer.observe(element)
    })

    // Special case for Experience which is inside EducationExperience
    const expElement = document.getElementById("experience")
    if (expElement) observer.observe(expElement)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="text-2xl font-black tracking-tighter text-zinc-900">
        &lt;CA<span className="text-blue-600">/</span>&gt;
      </div>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.name)}
            className={cn(
              "text-sm font-bold transition-all hover:text-blue-600 uppercase tracking-widest",
              active === item.name ? "text-blue-600" : "text-zinc-500"
            )}
          >
            {item.name}
          </Link>
        ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20"
          >
            RESUME
          </Link>
      </div>
      <div className="md:hidden">
        {/* Mobile menu could go here, but omitted for brevity in this layout change */}
      </div>
    </nav>
  )
}
