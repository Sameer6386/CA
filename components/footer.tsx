import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#00264d] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">CA Consult</h3>
            <p className="mb-4">Providing expert financial consultation and accounting services since 2005.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Tax Planning</Link></li>
              <li><Link href="#" className="hover:text-white">Audit & Assurance</Link></li>
              <li><Link href="#" className="hover:text-white">Business Advisory</Link></li>
              <li><Link href="#" className="hover:text-white">Financial Reporting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-white">Home</Link></li>
              <li><Link href="#services" className="hover:text-white">Services</Link></li>
              <li><Link href="#team" className="hover:text-white">Our Team</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <p>123 Finance Street</p>
            <p>Mumbai, Maharashtra 400001</p>
            <p>Phone: +91 22 1234 5678</p>
            <p>Email: info@caconsult.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2023 CA Consult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

