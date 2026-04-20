import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

export function FAQ() {
  const faqs = [
    { question: "How quiet is HĀLO really?", answer: "HĀLO operates at less than 30dB on medium settings..." },
    { question: "What's the difference between HĀLO v2 and v1?", answer: "HĀLO v2 LĪNKD features enhanced smart connectivity..." },
    { question: "Does HĀLO work without the app?", answer: "Absolutely. HĀLO comes with a premium remote control..." },
    { question: "What room sizes does HĀLO work best in?", answer: "HĀLO is optimized for rooms up to 450 sq ft..." },
    { question: "What's included in the 2-year warranty?", answer: "Our comprehensive warranty covers all mechanical..." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mb-8">
              Everything you need to know about the product and billing.
            </p>
          </div>
          
          <div className="md:col-span-8">
            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-gray-100 pb-4"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between text-left group">
                      <span className="font-semibold text-lg text-black group-hover:text-gray-600 transition-colors">
                        {faq.question}
                      </span>
                      <Plus className="w-5 h-5 text-gray-400 group-data-[state=open]:rotate-45 transition-transform" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="data-[state=open]:animate-[accordion-down_0.2s_ease-out] data-[state=closed]:animate-[accordion-up_0.2s_ease-out] overflow-hidden">
                    <p className="text-gray-500 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
