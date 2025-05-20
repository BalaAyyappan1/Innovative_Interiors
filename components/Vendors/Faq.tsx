"use client"
import Diamond from "@/public/diamond.svg"
import FAQSection from "../ReusableComponenets/FaqSection"

const Faq = () => {
  const vendorFAQs = [
    {
      question: "How can I become a vendor for Innovative Interiors?",
      answer:
        "To become a vendor, you'll need to complete our vendor application form, provide samples of your products, and meet our quality standards. Once approved, you'll be added to our vendor database and contacted for relevant projects.",
    },
    {
      question: "What type of products do you source from vendors?",
      answer:
        "We source a wide range of products including furniture, lighting fixtures, textiles, wall coverings, flooring materials, decorative accessories, and custom-made items. We prioritize high-quality, unique, and sustainable products that meet our clients' specifications.",
    },
    {
      question: "Do you require vendors to provide samples before approval?",
      answer:
        "Yes, we typically require product samples to evaluate quality, finish, and suitability for our projects. These samples help us ensure that all products meet our standards before we recommend them to our clients.",
    },
    {
      question: "What documents are needed for registration?",
      answer:
        "For registration, you'll need to provide business registration documents, tax identification information, product catalogs, pricing structures, manufacturing capabilities, and references from previous clients or projects.",
    },
    {
      question: "Do you charge a registration or onboarding fee?",
      answer:
        "No, we don't charge vendors any registration or onboarding fees. Our vendor program is free to join, though vendors are responsible for any costs associated with providing samples or meeting our quality standards.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "Our standard payment terms are net 30 days after delivery and acceptance of products. For custom or large orders, we may offer different payment schedules, including deposits and milestone payments.",
    },
    {
      question: "Can I opt out or pause my vendor status?",
      answer:
        "Yes, you can request to pause or terminate your vendor status at any time by contacting our vendor management team. This won't affect any ongoing orders or contracts already in place.",
    },
    {
      question: "Do you offer long-term vendor partnerships?",
      answer:
        "Yes, we value long-term relationships with reliable vendors. For consistent high performers, we offer preferred vendor status, which may include priority on new projects, featured placement in our materials library, and collaborative product development opportunities.",
    },
  ]

  return (
    <div className="container mx-auto my-10 mb-40">
      <FAQSection title="Vendor Services FAQ" items={vendorFAQs} diamondIcon={Diamond} />
    </div>
  )
}

export default Faq
