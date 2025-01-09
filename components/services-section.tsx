import { Calculator, BookOpen, Building2, FileText, PieChart, Scale, Briefcase, LineChart } from 'lucide-react'

const services = [
  {
    icon: Calculator,
    title: "Tax Planning & Compliance",
    description: "Strategic tax planning and complete compliance services to optimize your tax position while ensuring adherence to all regulations."
  },
  {
    icon: BookOpen,
    title: "Bookkeeping & Accounting",
    description: "Comprehensive bookkeeping and accounting services to maintain accurate financial records and ensure smooth business operations."
  },
  {
    icon: Building2,
    title: "Business Registration",
    description: "End-to-end assistance in company registration, incorporation, and other regulatory compliance requirements."
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    description: "Detailed financial reporting services including preparation of financial statements, analysis, and performance metrics."
  },
  {
    icon: PieChart,
    title: "Audit & Assurance",
    description: "Thorough audit services to verify financial accuracy and provide assurance to stakeholders."
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    description: "Expert guidance on legal matters and compliance requirements to keep your business protected."
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Strategic business consulting to help you make informed decisions and grow your business effectively."
  },
  {
    icon: LineChart,
    title: "Investment Planning",
    description: "Professional investment advisory services to help you make sound financial investments and grow your wealth."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#001529] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive financial and business solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#002547] p-6 rounded-xl border border-blue-900/50 hover:border-yellow-400/50 transition-colors duration-300"
            >
              <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

