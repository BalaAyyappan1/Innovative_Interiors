"use client"
import Diamond from "@/public/diamond.svg"
import FAQSection from "../ReusableComponenets/FaqSection"

const ContactFaq = () => {
  const contactFAQs = [
    {
      question: "I already have an architect and design. Can Innovative Interiors execute our project?",
      answer:
        "Yes, we can work collaboratively with your existing architect and design team to execute your project. We’ll ensure that the construction and implementation align perfectly with the provided designs.",
    },
    {
      question: "I need to build a space from scratch, including design. Can Innovative help with that too?",
      answer:
        "Absolutely! We offer end-to-end interior solutions, from design conceptualization to final execution. Our team will guide you through the entire process, ensuring your vision is brought to life.",
    },
    {
      question: "I have a property that needs renovation. Does Innovative take up renovation works?",
      answer:
        "Yes, we specialize in renovation projects. Whether it's a single room or an entire property, we can transform your existing space to match your new preferences and functionality needs.",
    },
    {
      question: "Do you take up projects outside Chennai or Tamil Nadu?",
      answer:
        "Yes, we undertake projects across India depending on the scale and requirements. Contact us with your project details, and we’ll let you know how we can collaborate.",
    },
  ]

  return (
    <div className="container mx-auto">
      <FAQSection title="Frequently Asked Questions" items={contactFAQs} diamondIcon={Diamond} />
    </div>
  )
}

export default ContactFaq
