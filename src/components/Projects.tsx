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
        title: "LUCID: Look-ahead Unified Camera-LiDAR Inference and Diffusion",
        description: "LUCID is a deep learning project for autonomous driving that predicts future LiDAR readings from current multimodal sensor inputs (LiDAR, camera, radar, and vehicle state). By generating look-ahead sensor data, the system enables vehicles to anticipate their surroundings earlier; improving reaction time, long-horizon planning, and overall safety.\n\nTL;DR: Multimodal DiT pipeline for dynamics-conditioned future 3D LiDAR generation on nuScenes data. ",
        tags: ["Autonomous Driving", "Dynamics", "LiDAR", "Diffusion", "Transformer", "Python"],
      },
      {
        title: "LLM-Guided Heterogeneous Swarm Navigation & Negotiation",
        description:
          // "LLM-guided swarm navigation and negotiation for resilient multi-robot missions.\n\n" +
          "This capstone studies how humans can specify complex heterogeneous multi-robot objectives in natural language and execute them reliably in dynamic environments. High-level intent is translated into formal task constraints, enabling decentralized planning, execution, and real-time monitoring of swarm behavior.\n\n" +
          "When missions become infeasible due to environmental changes or conflicting constraints, an LLM-driven negotiation layer proposes minimal task revisions while preserving the original intent.\n\n" +
          "TL;DR: Natural language tasking → formal constraints → swarm planning → LLM/VLM-based task repair.",
        tags: ["Swarm Robotics", "Navigation", "Task Planning", "LLM/VLM", "Multi-Agent", "Temporal Logic"],
      },
      {
        title: "Dual-Arm Industrial Manipulation",
        description: "Ground up implementation of bimanual coordination for ROS-based tasks using advanced kinematics and force control, using DENSO VM-60B1 arms.",
        tags: ["Manipulation", "Bimanual", "Kinematics", "ROS 2", "CAD", "SolidWorks", "Blender", "Gazebo", "RViz"],
        video: "/denso-1767103100925.webm",
        image: "/denso.webp",
      },
    ],
  },
  {
    name: "Previous Work",
    projects: [
      {
        title: "Decentralized Heterogeneous ACO",
        description:
          "Ant Colony Optimization framework for capability-based multi-agent cooperation on Georgia Tech's Robotarium integrated with Reinforcement Learning and reward shaping, adapted for lower communication ranges and decentralized operation. Customized control barrier functions are used for collision avoidance through quadratic programming; RL results in emergent per-agent role specialization, i.e. exploration vs. exploitation",
        tags: ["Multi-Agent", "ACO", "Robotarium", "QP", "Online RL"],
        video: "/aco-robotarium-1767103100948.webm",
        image: "/aco.png",
      },
      {
        title: "DIAYN with Human-Relevant Skills",
        description: "Reproduction and validation of Diversity Is All You Need (DIAYN) across benchmarks, extended to 6-DOF Panda Arm Manipulation in robosuite with HRL/VAE.",
        tags: ["Deep RL", "Panda Arm", "SAC", "VAE", "PyTorch", "MuJoCo"],
        video: "/sac_video-1767103100956.webm",
        image: "/sac.png",
      },
      {
        title: "Multi-Robot Conflict Resolution",
        description:
          "Multi-agent planning in constrained environments, focusing on bottleneck management and safe coordination. Coalition-aware abstraction to improve synchronization and eliminate inter-robot collisions.",
        tags: ["Multi-Agent", "Collision Avoidance", "Navigation", "MAPF"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/conflict-resized-1767098341836.webp?width=800&height=800&resize=contain",
      },
      {
        title: "HRI Emotion-Conveying Robot Sounds",
        description: "Study on how non-verbal robot sounds can convey emotion to improve human-robot interaction. The study evaluated the performance of our emotional sounds-generating diffusion model against different modalities.",
        tags: ["HRI", "User Study", "Diffusion", "Audio"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/hri-study-participant-1767096280543.jpg?width=8000&height=8000&resize=contain",
      },
      {
        title: "The Robot Collective",
        description: "Traffic-Aware Multi-Agent Path Planning with dynamic edge weighing for block-stacking bots in ROS. Emergent learned traffic flow over time.",
        tags: ["ROS", "Path Planning", "A*", "Multi-Agent", "Graph Theory", "Control"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/vip-2-1767096046626.jpeg?width=8000&height=8000&resize=contain",
      },
      {
        title: "Mixed Reality Mobile Manipulator Virtual Testbed",
        description: "Unity3D AR application for human-robot collaboration via ROS 2 and MoveIt using a HoloLens2. We used a virtual UR5e arm mounted on a real Clearpath Husky.",
        tags: ["Unity3D", "AR", "HoloLens", "ROS 2", "HRC"],
        zoom: true,
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/fyp-1767095915247.jpeg?width=8000&height=8000&resize=contain",
      },
      {
        title: "Sensor Fusion for 3D Reconstruction",
        description: "3D scene reconstruction from vision data for robotics and SLAM applications, used to generate a novel multi-sensor 3D reconstruction dataset with the use of motion capture.",
        tags: ["3D Recon", "Perception", "Mocap", "OptiTrack", "C#"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/0c96ce6b-4e6e-401c-9a07-642e0ed15a13/environment-1767098341397.png?width=8000&height=8000&resize=contain",
      },
      {
        title: "Resilient Quadrotor Control",
        description: "Implementation of LQR and other optimal control strategies for quadrotor stability, disturbance rejection, and trajectory tracking.",
        tags: ["LQR", "Optimal Control", "Quadrotors", "Simulink"],
        video: "/quadrotor-1767103100953.webm",
        image: "/quadrotor.png",
      },
      {
        title: "Instrumentation Smart Bicycle",
        description: "IoT-enabled bicycle with sensors for performance monitoring and rider safety, using an Arduino Uno.",
        tags: ["Instrumentation", "Arduino", "IoT", "Sensors", "CAD"],
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
                "transition-transform duration-700",
                project.zoom
                  ? "object-cover scale-115 group-hover:scale-120"
                  : project.title.includes("Multi-Robot") ||
                    project.title.includes("3D Reconstruction") ||
                    project.title.includes("Dual-Arm") ||
                    project.title.includes("ACO") ||
                    project.title.includes("LQR")
                    ? "object-contain group-hover:scale-105"
                    : "object-cover group-hover:scale-105"
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
                      <CardDescription className="text-zinc-500 text-sm leading-relaxed whitespace-pre-line break-words">
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
