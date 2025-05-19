import Image from "next/image"
import { cn } from "@/lib/utils"

type TeamMember = {
  id: number
  name: string
  role: string
  bio: string
  imageUrl: string
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Full-Stack Developer",
      bio: "Experienced in building complete web applications with expertise in both frontend and backend technologies.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Jamie Chen",
      role: "Frontend Developer",
      bio: "Passionate about creating beautiful, responsive user interfaces with modern frameworks and design systems.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Sam Wilson",
      role: "Backend Developer",
      bio: "Specializes in building robust server-side applications, APIs, and database architecture.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "Taylor Reed",
      role: "UI/UX Designer",
      bio: "Creates intuitive and engaging user experiences through thoughtful design and user research.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      name: "Jordan Smith",
      role: "DevOps Engineer",
      bio: "Ensures smooth deployment and operation of applications through automation and infrastructure management.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      name: "Casey Zhang",
      role: "Project Manager",
      bio: "Coordinates team efforts and ensures projects are delivered on time and within scope.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Background flares */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-20 blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-20 blur-[150px] translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-500 rounded-full opacity-10 blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The talented individuals behind iSoftwareStudios who bring creativity, expertise, and passion to every
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl transition-all duration-500 transform group-hover:-translate-y-2">
        {/* Glass effect card */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={member.imageUrl || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          <div className="p-6 relative">
            {/* Role badge with glass effect */}
            <span
              className={cn(
                "absolute -top-4 right-6 px-4 py-1 rounded-full text-sm font-medium",
                "backdrop-blur-md bg-white/20 border border-white/30 shadow-lg",
              )}
            >
              {member.role}
            </span>

            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-gray-300">{member.bio}</p>

            {/* Social links */}
            <div className="mt-4 flex space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
