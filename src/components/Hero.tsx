"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, FileText, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/26758-resized-1767095936948.jpg?width=8000&height=8000&resize=contain"
            alt="Professional background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4"
        >
          <div className="text-zinc-500 font-mono text-sm tracking-widest uppercase font-bold">
            &lt;developer&gt;
          </div>

          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-black text-[#003057] tracking-tighter uppercase drop-shadow-sm md:whitespace-nowrap">
              Clark Abou-Rjeily
            </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Let's build <span className="text-zinc-500">robots!</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#B3A369]">
            Georgia Institute of Technology
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-xl leading-relaxed">
            I specialize in Controls, AI, and Perception.
            <br />
            I build intelligent autonomous systems through multi-robot coordination, deep reinforcement learning, and vision-based control.
            <br /> 
            I'm currently completing my Master's degree at <span className="text-zinc-500">Georgia Tech</span>.
          </p>
        </div>

        <div className="text-zinc-500 font-mono text-sm tracking-widest uppercase font-bold">
          &lt;/developer&gt;
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild className="rounded-full px-10 py-7 text-lg bg-zinc-900 text-white hover:bg-zinc-800 shadow-xl transition-all hover:scale-105 active:scale-95">
            <Link href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>
          <Button variant="outline" asChild className="rounded-full px-10 py-7 text-lg border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-all hover:scale-105 active:scale-95 group">
            <Link href="#projects">
              <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Projects
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 pt-8">
          <Link href="mailto:clarkarjeily@gmail.com" className="text-zinc-400 hover:text-zinc-900 transition-colors transform hover:scale-110">
            <Mail className="h-7 w-7" />
          </Link>
          <Link href="http://www.linkedin.com/in/clark-abou-rjeily" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors transform hover:scale-110">
            <Linkedin className="h-7 w-7" />
          </Link>
            <Link href="https://github.com/clarkdimitrios" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors transform hover:scale-110">
            <Github className="h-7 w-7" />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-300 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  )
}

