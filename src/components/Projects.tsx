"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projectCategories = [
  {
    name: "Current Work",
    projects: [
      {
        title: "LUCID",
        description: "Multimodal DiT pipeline for dynamics-conditioned future 3D LiDAR generation on nuScenes data.",
        tags: ["Dynamics", "LiDAR", "Diffusion", "Python"],
      },
      {
        title: "LLM-Guided Human-Swarm Planning",
        description: "Developing human-swarm interaction frameworks for complex multi-agent coordination tasks.",
        tags: ["Swarm Robotics", "HRI", "Multi-Agent"],
      },
      {
        title: "Dual-Arm Industrial Manipulation",
        description: "Bimanual coordination for industrial tasks using advanced kinematics and force control.",
        tags: ["Manipulation", "Bimanual", "Kinematics"],
        video: "/denso-1767103100925.webm",
        image: "/denso.webp",
      },
    ],
  },
  {
    name: "Previous Work",
    projects: [
      {
        title: "Decentralized ACO (Robotarium)",
        description:
          "Ant Colony Optimization framework for multi-agent cooperation on Georgia Tech's Robotarium integrated with RL.",
        tags: ["Multi-Agent", "ACO", "Robotarium", "RL"],
        video: "/aco-robotarium-1767103100948.webm",
        image: "/aco.png",
      },
      {
        title: "DIAYN + HRL Manipulation",
        description: "Reproduction and validation of DIAYN across benchmarks, extended to a 6-DOF Panda Arm with HRL/VAE.",
        tags: ["Reinforcement Learning", "Panda Arm", "VAE", "PyTorch"],
        video: "/sac_video-1767103100956.webm",
        image: "/sac.png",
      },
      {
        title: "STAR Lab Conflict Resolution",
        description:
          "Multi-agent conflict resolution in constrained environments, focusing on bottleneck management and safe coordination.",
        tags: ["Multi-Agent", "Conflict Resolution", "Navigation"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/conflict-resized-1767098341836.webp?width=800&height=800&resize=contain",
      },
      {
        title: "HRI Emotion-Conveying Robot Sounds",
        description: "Study on how non-verbal robot sounds can convey emotion to improve human-robot interaction.",
        tags: ["HRI", "User Study", "Audio"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/hri-study-participant-1767096280543.jpg?width=8000&height=8000&resize=contain",
      },
      {
        title: "Robot Collective",
        description: "Traffic-Aware Multi-Agent Path Planning with dynamic edge weighing for block-stacking bots in ROS.",
        tags: ["ROS", "Path Planning", "Multi-Agent", "Graph Theory"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/vip-2-1767096046626.jpeg?width=8000&height=8000&resize=contain",
      },
      {
        title: "Mixed Reality Virtual Testbed",
        description: "Unity3D AR application for human-robot collaboration via ROS 2 and MoveIt using HoloLens.",
        tags: ["Unity3D", "AR", "HoloLens", "ROS 2"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/fyp-1767095915247.jpeg?width=8000&height=8000&resize=contain",
      },
      {
        title: "VRL 3D Reconstruction (IROS)",
        description: "3D scene reconstruction from vision data for robotics applications, presented at IROS.",
        tags: ["3D Reconstruction", "Perception", "IROS"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/environment-1767098341397.png?width=8000&height=8000&resize=contain",
      },
      {
        title: "LQR / Optimal Control Projects",
        description: "Implementation of LQR and other optimal control strategies for quadrotor stability and trajectory tracking.",
        tags: ["LQR", "Optimal Control", "Quadrotors"],
        video: "/quadrotor-1767103100953.webm",
        image: "/quadrotor.png",
      },
      {
        title: "Instrumentation Smart Bicycle",
        description: "IoT-enabled bicycle with sensors for performance monitoring and rider safety.",
        tags: ["Instrumentation", "IoT", "Sensors"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/rpm-bike-1-resized-1767095896012.jpeg?width=8000&height=8000&resize=contain",
      },
    ],
  },
]

function ProjectMedia({ project }: { project: any }) {
  const hasImage = project.image && project.image.trim() !== ""

  if (!hasImage) return null

  return (
    <div className="relative h-80 w-full overflow-hidden bg-zinc-50 border-b border-zinc-100">
      <div className="w-full h-full relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
              className={cn(
                "transition-transform duration-700 group-hover:scale-105",
                project.title.includes("STAR Lab") || 
                project.title.includes("VRL") || 
                project.title.includes("Dual-Arm") || 
                project.title.includes("Decentralized ACO") ||
                project.title.includes("LQR") ? "object-contain" : "object-cover"
              )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900">Technical Projects</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            A selection of my work in autonomous systems, robotics perception, and multi-robot coordination.
          </p>
        </div>

        {projectCategories.map((category) => (
          <div key={category.name} className="space-y-8">
            <h3 className="text-2xl font-bold text-zinc-800 border-l-4 border-zinc-900 pl-4">{category.name}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white border-zinc-200 overflow-hidden flex flex-col group hover:border-[#003057]/50 transition-all hover:shadow-2xl h-full">
                    <ProjectMedia project={project} />

                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-900 group-hover:text-zinc-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-zinc-500 text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border-none px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
