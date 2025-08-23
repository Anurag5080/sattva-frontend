"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// FAQ Data
const faqData = [
  {
    section: "Shopping and Delivery",
    content: [
      {
        q: "How can I reach Sattva Attar for queries or support?",
        a: "You can contact us via email at sattvaattar@gmail.com or call us at 8685846810 during our business hours, 9 AM to 7 PM IST.",
      },
    ],
  },
  {
    section: "Returns, Refunds, and Exchange",
    content: [],
  },
  {
    section: "Account",
    content: [],
  },
  {
    section: "Product Queries",
    content: [],
  },
  {
    section: "Contact Us",
    content: [
      {
        q: "Q : How can I reach Sattva Attar for queries or support ?",
        a: "You can contact us via email at sattvaattar@gmail.com or call us at 8685846810 during our business hours, 9 AM to 7 PM IST.",
      },
      {
        q: "Q : Where is Sattva Attar located ?",
        a: "We are based in Kannauj, India, the hub of traditional attar making.",
      },
      {
        q: "Q : Do you have a physical store ?",
        a: "No, we are currently an online-only store, delivering premium-quality attars to your doorstep.",
      },
      {
        q: "Q : Can I collaborate with Sattva Attar ?",
        a: "Yes, we welcome collaboration opportunities. Email us at sattvaattar@gmail.com with your proposal.",
      },
      {
        q: "Q : How quickly will I receive a response to my inquiry ?",
        a: "We strive to respond to all inquiries within 24-48 business hours.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-[#836F25] flex justify-center items-center mt-20">
      <div className="max-w-4xl w-full bg-black text-[#BEB634] rounded-4xl px-30 pt-20 border-2 border-[#BEB634]">
        <h1 className="text-4xl font-bold text-center mb-8" style={{ fontFamily: 'samarkan, sans-serif' }}>FAQ’s</h1>

        {faqData.map((item, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left py-2 cursor-pointer mb-2"
            >
              <span className="font-semibold text-xl">{item.section}<span className="text-white ml-1 text-xl">.</span></span>
              {openIndex === index ? (
                <Minus className="w-7 h-7 text-white" />
              ) : (
                <Plus className="w-7 h-7" />
              )}
            </button>

            <hr className="h-px border-0 w-full bg-gradient-to-r from-transparent via-[#D9DC75] to-transparent" />

            {/* Content */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden pl-2 mt-6"
                >
                  {item.content.length > 0 ? (
                    item.content.map((faq, i) => (
                      <div key={i} className="my-4">
                        <p className="font-semibold text-lg text-yellow-300 mb-2">{faq.q}</p>
                        <p className="text-md text-gray-200">{faq.a}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 italic">
                      No FAQs available yet.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
