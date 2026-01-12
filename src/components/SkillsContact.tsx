"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const skills = {
  "Hard Skills": ["Python", "PyTorch", "C#", "C++", "ROS", "ROS2", "Gazebo", "RViz", "MATLAB", "LabVIEW", "PSpice", "GitHub", "LaTeX"],
  "Languages": ["English (Fluent)", "French (Fluent)", "Arabic (Fluent)", "Korean (Basic)"],
  "Soft Skills": ["Time Management", "Communication", "Problem-solving", "Critical Thinking", "Teamwork", "Collaboration"]
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 italic">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-zinc-900 border-b border-zinc-200 pb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-1 text-sm border-zinc-200 text-zinc-600 hover:text-[#003057] hover:border-blue-500 hover:bg-blue-50 transition-all cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 italic">Get In Touch</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            I'm currently looking for opportunities in the robotics industry. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 group-hover:bg-[#003057] transition-all duration-300">
                <Mail className="h-6 w-6 text-[#003057] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Email</p>
                <Link href="mailto:clarkarjeily@gmail.com" className="text-xl text-zinc-900 font-semibold hover:text-[#003057] transition-colors">
                  clarkarjeily@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 group-hover:bg-[#003057] transition-all duration-300">
                <Phone className="h-6 w-6 text-[#003057] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Phone</p>
                <p className="text-xl text-zinc-900 font-semibold">+1 (240) 608-8192</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 group-hover:bg-[#003057] transition-all duration-300">
                <MapPin className="h-6 w-6 text-[#003057] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Location</p>
                <p className="text-xl text-zinc-900 font-semibold">Atlanta, GA</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <Link
              href="http://www.linkedin.com/in/clark-abou-rjeily"
              target="_blank"
              className="flex items-center justify-between p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-blue-500 hover:bg-white transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <Linkedin className="h-8 w-8 text-[#003057]" />
                </div>
                <span className="text-2xl font-bold text-zinc-900">LinkedIn</span>
              </div>
              <div className="h-12 w-12 rounded-full bg-white border border-zinc-100 flex items-center justify-center group-hover:bg-[#003057] group-hover:text-white transition-all">
                <span className="text-3xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              href="https://github.com/clarkdimitrios"
              target="_blank"
              className="flex items-center justify-between p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-900 hover:bg-white transition-all shadow-sm hover:shadow-xl hover:shadow-zinc-900/5 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <Github className="h-8 w-8 text-zinc-900" />
                </div>
                <span className="text-2xl font-bold text-zinc-900">GitHub</span>
              </div>
              <div className="h-12 w-12 rounded-full bg-white border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                <span className="text-3xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
