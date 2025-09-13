import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can you get into a top university by yourself?",
    answer:
      "Yes, you can — just like you can fix your own car engine or cut your own hair. Possible? Sure. Recommended? Not really.\n\nMost students who try it alone end up underselling themselves, following random advice, or stressing over every little detail. At Admivo, we've seen strong profiles miss out simply because they weren't positioned right. On the other hand, with the right strategy, even average profiles crack top admits. That's the difference we bring — turning effort into outcomes.",
  },
  {
    question: "How does a counsellor help?",
    answer:
      "A counsellor isn't just someone who edits essays. Think of us as your co-pilot. You're flying the plane; we make sure you don't miss the runway.\n\nAt Admivo, we provide clarity where there's confusion. We help shortlist the right universities, craft essays that highlight your story, prep for scholarships, and keep you on track with deadlines. The result? Less stress, more focus, and a stronger application.",
  },
  {
    question: "What types of counselling services exist?",
    answer:
      "Students usually find three options:\n\nDIY: Blogs, YouTube, and forums. Free but scattered and unreliable.\n\nGeneric Consultants: They process applications and hand you template SOPs. Functional, but not effective.\n\nAdmivo (Premium Counselling): Tailored strategies, data-driven insights, alumni mentorship, and end-to-end support. Here, you're not just another student — you're a unique profile with a customized plan.",
  },
  {
    question: "How is Admivo different from other paid services?",
    answer:
      "Most agencies run on quantity. The more students, the better. Which means, you often feel like just another file.\n\nAdmivo flips that approach. We focus on quality over numbers. With data-backed university selection, alumni mentors, and personalized guidance, your application doesn't just get polished — it gets the competitive edge needed to stand out.",
  },
  {
    question: "How is Admivo different from free consultants?",
    answer:
      "Free consultants are like free airport WiFi — helpful in a pinch, but don't expect speed, depth, or reliability. They'll give you a university list and maybe a basic SOP review.\n\nAdmivo is built for depth. We align universities with your long-term goals, strengthen your application narrative, and prepare you for scholarships and interviews. Free advice can get you started. Admivo gets you results.",
  },
  {
    question: "How is Admivo different from friends/family guidance?",
    answer:
      "Family and friends share experiences, but those are anecdotal. What worked for your cousin in 2019 might not work in 2025.\n\nAdmivo uses updated admissions data, proven strategies, and expert mentors who've cracked the exact universities you're aiming for. Your family can encourage you. We ensure you actually make it.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">Got <span className="text-red-600">Questions?</span> We've Got Answers</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-lg border-2 border-red-200 hover:border-red-300 transition-all duration-300">
              <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left text-black font-semibold hover:no-underline text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 whitespace-pre-line text-sm sm:text-base">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
