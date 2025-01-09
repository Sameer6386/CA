import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { LinkedinIcon, TwitterIcon } from 'lucide-react'

const teamMembers = [
  {
    name: "Vikram Patel",
    position: "Senior CA, Tax Specialist",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    name: "Neha Gupta",
    position: "Audit & Assurance Expert",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    name: "Rajesh Kumar",
    position: "Business Advisory Lead",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    name: "Anjali Singh",
    position: "Corporate Finance Specialist",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  }
]

export function TeamSection() {
  return (
    <section id="team" className="bg-[#001529] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our team of experienced chartered accountants is dedicated to providing you with the best financial advice and services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-[#002547] border border-blue-900/50">
              <CardContent className="p-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-lg mb-4 w-full"
                />
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{member.position}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    <LinkedinIcon size={20} />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

