import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do your CA consultants provide?",
    answer: "Our CA consultants provide a wide range of services including tax planning, financial reporting, audit & assurance, business registration, compliance management, bookkeeping, and business advisory services. We cater to both individuals and businesses of all sizes."
  },
  {
    question: "How can I schedule a consultation with a CA?",
    answer: "You can schedule a consultation by filling out the form above, calling our office directly, or sending us an email. Our team will get back to you within 24 hours to arrange a meeting with the most suitable CA for your needs."
  },
  {
    question: "What documents do I need for tax filing?",
    answer: "For tax filing, you typically need income statements (Form 16, if employed), investment proofs, bank statements, property documents (if applicable), and receipts for tax-deductible expenses. The exact requirements may vary based on your income sources and type of filing."
  },
  {
    question: "Do you provide online consultation services?",
    answer: "Yes, we offer online consultation services through video conferencing platforms. This allows us to serve clients regardless of their location while maintaining the same level of professional service and confidentiality."
  },
  {
    question: "What are your fees for CA services?",
    answer: "Our fees vary depending on the type and complexity of services required. We provide transparent pricing and will give you a detailed quote after understanding your specific needs during the initial consultation."
  },
  {
    question: "How do you ensure data security and confidentiality?",
    answer: "We maintain strict confidentiality protocols and use secure, encrypted systems for all client data. Our practices comply with all relevant data protection regulations, and we sign NDAs when required."
  },
  {
    question: "Can you help with business registration and setup?",
    answer: "Yes, we provide comprehensive business setup services including company registration, GST registration, obtaining necessary licenses, setting up accounting systems, and ensuring compliance with all regulatory requirements."
  },
  {
    question: "What industries do you specialize in?",
    answer: "Our team has experience across various industries including manufacturing, IT services, retail, real estate, and startups. We adapt our services to meet the specific requirements and challenges of each industry."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-[#001529] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#002547] border border-blue-900/50 rounded-xl"
              >
                <AccordionTrigger className="text-white hover:text-yellow-400 px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

