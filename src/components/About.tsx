"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 italic">About Me</h2>
          <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
            <p>
              I am Clark Abou Rjeily, a highly analytical and driven Robotics Engineer currently pursuing my Master of Science in Robotics at the Georgia Institute of Technology, where I maintain a 4.0 GPA.
            </p>
            <p>
              My expertise lies at the intersection of Controls, Artificial Intelligence, and Perception. I am passionate about developing robust, intelligent, and autonomous robotic systems that can collaborate effectively and operate safely in complex environments.
            </p>
            <p>
              With a background in Electrical and Computer Engineering from the American University of Beirut (ranked 1st in my track), I bring a strong foundation in control systems, machine learning, and instrumentations.
            </p>
            <p>
              Beyond technical pursuits, I am a Level VIII certified piano player, which has instilled in me a deep appreciation for rhythm, precision, and dedication—qualities I bring to every engineering challenge I tackle.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 relative w-64 h-64 md:w-96 md:h-96"
        >
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full -z-10" />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/clark-resized-1766412243603.jpg?width=8000&height=8000&resize=contain"
            alt="Clark Abou Rjeily"
            fill
            className="object-cover rounded-2xl border-4 border-white shadow-2xl shadow-blue-500/10"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
