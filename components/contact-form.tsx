'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you as soon as possible.",
    })
  }

  return (
    <section id="contact" className="bg-[#001529] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team of expert CAs.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="Your Name"
                required
                className="border-blue-900/50 text-white"
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="border-blue-900/50 text-white"
              />
            </div>
            <Input
              type="text"
              placeholder="Subject"
              required
              className="border-blue-900/50 text-white"
            />
            <Textarea
              placeholder="Your Message"
              required
              className="border-blue-900/50 text-white"
              rows={6}
            />
            <Button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

