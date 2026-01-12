"use client"

import { motion } from "motion/react"

const education = [
  {
    institution: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    degree: "M.S. in Robotics",
    period: "08/2024 – 05/2026",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/Georgia_Tech_logo_2021_Cropped-1768185672803.png?width=8000&height=8000&resize=contain",
    details: [
      "Core Areas: Controls, Artificial Intelligence (AI), and Perception",
      "GPA: 4.0/4.0",
      "Coursework: Robotics, Nonlinear & Networked Control, Deep Reinforcement Learning, Computer Vision",
    ],
  },
  {
    institution: "American University of Beirut (AUB)",
    location: "Beirut, Lebanon",
    degree: "B.Eng. in Electrical and Computer Engineering",
    period: "08/2020 – 06/2024",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/aub-logo-1768185672808.jpg?width=8000&height=8000&resize=contain",
    details: [
      "Minor in Business Administration",
      "GPA: 4.0/4.0 | Graduated with High Distinction",
      "Ranked 1st in Track (Control, Robotics, and Intelligence Systems)",
      "Coursework: Autonomous Mobile Robotics, Machine Learning, Modern Control Systems, Instrumentation",
    ],
  },
]

const experience = [
  {
    company: "FACTS Lab, Georgia Tech",
    role: "Research Assistant",
    location: "Atlanta, GA",
    period: "05/2025 – Present",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/Georgia_Tech_logo_2021_Cropped-1768185672803.png?width=8000&height=8000&resize=contain",
    details: [
      "Integrating 6-DOF industrial manipulators for ROS2-based multi-agent collaboration and VLM-driven tasks",
      "Enabling safety-critical bimanual planning and control with Signal Temporal Logic (STL) constraints",
    ],
  },
  {
    company: "STAR Lab, Georgia Tech",
    role: "Research Assistant",
    location: "Atlanta, GA",
    period: "01/2025 – 04/2025",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/Georgia_Tech_logo_2021_Cropped-1768185672803.png?width=8000&height=8000&resize=contain",
    details: [
      "Developed a motion planner using nonlinear optimization for heterogeneous multi-robot coordination",
      "Added a coalition-aware abstraction to improve synchronization control and eliminate inter-robot collisions",
    ],
  },
  {
    company: "Vision and Robotics Lab (VRL), AUB",
    role: "Research Intern",
    location: "Beirut, Lebanon",
    period: "06/2023 – 08/2023",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/aub-logo-1768185672808.jpg?width=8000&height=8000&resize=contain",
    details: [
      "Generated a novel multi-sensor, asynchronous, real, and collaborative 3D reconstruction dataset",
      "Conducted motion capture, experiment design, and sensor fusion using C#, OptiTrack Motive, Cyclone 3DR",
      "Co-authored a research paper for IROS, 2nd author, Didymos-XR Project",
    ],
  },
    {
      company: "American University of Beirut (AUB)",
      role: "Teaching Assistant",
      location: "Beirut, Lebanon",
      period: "09/2022 – 05/2024",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/aub-logo-1768185672808.jpg?width=8000&height=8000&resize=contain",
      details: [
        "Cooperated with professors in teaching Electronics I & II to junior ECE students",
        "Enhanced concept delivery and graded weekly assignments for 50+ students",
      ],
    },
    {
      company: "L’Art de la Musique (School of Music)",
      role: "Teacher",
      location: "Beirut, Lebanon",
      period: "09/2022 – 09/2023",
      details: [
        "Conducted Piano, Music Theory, and Aural Skills courses to students of ages 6 to 30+",
        "Certified Level VIII Piano Performance by the Lebanese National Higher Conservatory",
      ],
    },
    {
      company: "Professional Tutoring",
      role: "Self-Employed",
      location: "Beirut, Lebanon",
      period: "04/2019 – 06/2024",
      details: [
        "Held sessions for Baccalaureate and Electrical Engineering students, improving grades by multiple letters",
        "Focused on Mathematics, Physics, and Core Engineering subjects",
      ],
    },
    {
      company: "Build It Weekend 5.0 (Robotics Competition)",
      role: "Participant (2nd Place)",
      location: "Beirut, Lebanon",
      period: "03/2023 – 04/2023",
      details: [
        "Won 2nd place in a 48-hour robotics competition out of 10 teams, judged by AUB professors",
        "Designed and built a prototype lifeline rescue-bot with IoT control using ESP32",
      ],
    },
    {
      company: "AUB Robotics Club (AUBRC)",
      role: "Member",
      location: "Beirut, Lebanon",
      period: "10/2020 – 05/2024",
      details: [
        "Assisted and participated in several workshops for ROS, Arduino, and Raspberry Pi",
      ],
    },
    {
      company: "Diverse Volunteering",
      role: "Volunteer",
      location: "Beirut, Lebanon",
      period: "12/2016 – 01/2020",
      details: [
        "Provided food, aid and entertainment for elderly homes, childcare centers, and BETA Lebanon’s dog shelter",
      ],
    },
  ]

function TimelineItem({ title, subtitle, period, location, details, index, logo }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0 border-l-2 border-zinc-100"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-lg shadow-blue-500/20" />
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div className="flex gap-4 items-start">
          {logo && (
            <div className="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-zinc-100 p-1 flex items-center justify-center overflow-hidden">
              <img src={logo} alt={title} className="w-full h-full object-contain" />
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900">{title}</h3>
            <p className="text-blue-600 font-semibold text-lg">{subtitle}</p>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-zinc-500 font-mono text-sm font-medium">{period}</p>
          <p className="text-zinc-400 text-sm italic">{location}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-3 text-zinc-600 text-lg">
        {details.map((detail: string, i: number) => (
          <li key={i} className="pl-2 transition-colors hover:text-zinc-900">{detail}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function EducationCard({ title, subtitle, period, location, details, index, logo }: any) {
  const isSecond = index === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative w-full max-w-3xl bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm hover:shadow-md transition-shadow ${
        isSecond ? "md:ml-auto" : ""
      }`}
    >
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {logo && (
          <div className="w-20 h-20 flex-shrink-0 bg-white rounded-xl border border-zinc-50 p-2 flex items-center justify-center overflow-hidden shadow-inner">
            <img src={logo} alt={title} className="w-full h-full object-contain" />
          </div>
        )}
        <div className="flex-1 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 leading-tight">{title}</h3>
              <p className="text-blue-600 font-semibold text-lg">{subtitle}</p>
            </div>
            <div className="sm:text-right">
              <p className="text-zinc-500 font-mono text-sm font-medium">{period}</p>
              <p className="text-zinc-400 text-sm italic">{location}</p>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-2">
            {details.map((detail: string, i: number) => (
              <li key={i} className="flex gap-2 text-zinc-600 text-base leading-relaxed">
                <span className="text-blue-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export function EducationExperience() {
  return (
    <div className="py-24 px-8 md:px-16 lg:px-24 space-y-24 bg-white">
      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 border-b border-zinc-100 pb-4 italic">Education</h2>
        <div className="flex flex-col gap-8">
          {education.map((item, index) => (
            <EducationCard
              key={item.institution}
              title={item.institution}
              subtitle={item.degree}
              period={item.period}
              location={item.location}
              details={item.details}
              logo={item.logo}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 border-b border-zinc-100 pb-4 italic">Experience</h2>
        <div className="space-y-0">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.company + index}
              title={item.company}
              subtitle={item.role}
              period={item.period}
              location={item.location}
              details={item.details}
              logo={(item as any).logo}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
