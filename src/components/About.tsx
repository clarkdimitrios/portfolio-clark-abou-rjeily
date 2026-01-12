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
              My name is Clark, and I am an electrical, computer, and robotics engineer with a strong interest in building intelligent systems that can reason, adapt, and operate reliably in complex real-world environments. I am currently completing my Master of Science in Robotics at{" "}
              <span className="text-[#B3A369] font-medium">
                Georgia Institute of Technology
              </span>
              , where I focus on bridging theory with hands-on system development.
            </p>

            <p>
              My technical interests sit at the intersection of controls, artificial intelligence, and perception. Through my work with Georgia Tech’s FACTS Lab, I have explored problems in multi-robot coordination and autonomy, with an emphasis on designing systems that are robust, scalable, and grounded in real-world constraints.
            </p>

            <p>
              I earned my undergraduate degree in Electrical and Computer Engineering from the{" "}
              <span className="text-[#850132] font-medium">
                American University of Beirut
              </span>
              , where I built a strong foundation in control systems, machine learning, and instrumentation through research-driven projects and engineering-focused coursework.
            </p>

            <p>
              Outside of robotics, I am a Level VIII certified{" "}
              <span className="text-[#683a1b] font-medium">
                piano
              </span>{" "}
              player. Years of musical training taught me discipline and attention to detail. Also, I love skiing, and most of my vacation days will align with good powder days!
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
