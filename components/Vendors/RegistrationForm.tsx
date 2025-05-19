"use client"

import type React from "react"
import DynamicForm, { type FormStep } from "@/components/ReusableComponenets/DynamicForm"
import { ArrowRight } from "lucide-react"

type VendorRegistrationProps = {
  title?: string
  description?: string
  className?: string
}

const VendorRegistration: React.FC<VendorRegistrationProps> = ({
  title = "Vendor Registration Form",
  description = "",
  className = "",
}) => {
  const vendorFormSteps: FormStep[] = [
    {
      title: "Company Details",
      fields: [
        {
          id: "companyName",
          label: "Company Name",
          type: "text",
          placeholder: "Enter company name",
          required: true,
        },
        {
          id: "registeredAddress",
          label: "Registered Address",
          type: "text",
          placeholder: "Enter registered address",
          required: true,
        },
        {
          id: "yearEstablished",
          label: "Year of Establishment",
          type: "select",
          placeholder: "Select year",
          required: true,
          options: Array.from({ length: 100 }, (_, i) => {
            const year = new Date().getFullYear() - i
            return { value: year.toString(), label: year.toString() }
          }),
        },
        {
          id: "gstNumber",
          label: "GST Number",
          type: "text",
          placeholder: "Enter GST number",
          required: true,
        },
        {
          id: "website",
          label: "Website (if any)",
          type: "text",
          placeholder: "www.example.com",
        },
      ],
    },
    {
      title: "Contact Information",
      fields: [
        {
          id: "contactName",
          label: "Contact Person Name",
          type: "text",
          placeholder: "Enter name",
          required: true,
        },
        {
          id: "contactEmail",
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
          required: true,
        },
        {
          id: "contactPhone",
          label: "Phone Number",
          type: "text",
          placeholder: "Enter phone number",
          required: true,
        },
        {
          id: "designation",
          label: "Designation",
          type: "text",
          placeholder: "Enter designation",
          required: true,
        },
      ],
    },
    {
      title: "Product/Service Details",
      fields: [
        {
          id: "productCategory",
          label: "Product/Service Category",
          type: "select",
          placeholder: "Select category",
          required: true,
          options: [
            { value: "furniture", label: "Furniture" },
            { value: "lighting", label: "Lighting" },
            { value: "textiles", label: "Textiles" },
            { value: "flooring", label: "Flooring" },
            { value: "wallCoverings", label: "Wall Coverings" },
            { value: "accessories", label: "Accessories" },
            { value: "other", label: "Other" },
          ],
        },
        {
          id: "productDescription",
          label: "Brief Description of Products/Services",
          type: "textarea",
          placeholder: "Describe your products or services",
          required: true,
        },
        {
          id: "productCatalog",
          label: "Product Catalog/Portfolio",
          type: "file",
          required: true,
        },
      ],
    },
    {
      title: "Business Information",
      fields: [
        {
          id: "businessType",
          label: "Business Type",
          type: "select",
          placeholder: "Select business type",
          required: true,
          options: [
            { value: "manufacturer", label: "Manufacturer" },
            { value: "wholesaler", label: "Wholesaler" },
            { value: "retailer", label: "Retailer" },
            { value: "distributor", label: "Distributor" },
            { value: "serviceProvider", label: "Service Provider" },
          ],
        },
        {
          id: "clientele",
          label: "Major Clientele",
          type: "textarea",
          placeholder: "List your major clients",
        },
        {
          id: "certifications",
          label: "Certifications (if any)",
          type: "text",
          placeholder: "ISO, etc.",
        },
      ],
    },
    {
      title: "Terms & Conditions",
      fields: [
        {
          id: "paymentTerms",
          label: "Preferred Payment Terms",
          type: "select",
          placeholder: "Select payment terms",
          required: true,
          options: [
            { value: "advance", label: "100% Advance" },
            { value: "50-50", label: "50% Advance, 50% on Delivery" },
            { value: "net30", label: "Net 30 days" },
            { value: "net60", label: "Net 60 days" },
            { value: "other", label: "Other" },
          ],
        },
        {
          id: "deliveryTerms",
          label: "Delivery Terms",
          type: "textarea",
          placeholder: "Describe your delivery terms",
          required: true,
        },
        {
          id: "additionalInfo",
          label: "Additional Information",
          type: "textarea",
          placeholder: "Any other information you'd like to share",
        },
      ],
    },
  ]

  const handleSubmit = (data: Record<string, any>) => {
    console.log("Vendor form submitted:", data)
    // Handle form submission logic here
  }

  return (
    <div className={`relative min-h-screen mb-32 ${className}`}>
      {/* Background container */}
      <div className="bg-[#F5F5FE] w-full absolute top-0 left-0 md:h-[85%] h-[95%] z-0" />

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content - Header Section */}
          <div className="flex flex-col justify-center lg:sticky lg:top-10 self-start">
            <h1 className="text-[#040444] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-semibold mb-4 leading-tight md:leading-[1.1]">
              {title}
            </h1>
            {description && <p className="text-black text-base md:text-lg max-w-xl">{description}</p>}
          </div>

          {/* Right Content - Form Section */}
          <div className="lg:mt-[-120px]">
            <div className="bg-white rounded-[23px] shadow-xl">
              <DynamicForm
                steps={vendorFormSteps}
                onSubmit={handleSubmit}
                submitLabel="Submit Application"
                rightArrowIcon={<ArrowRight className="w-4 h-4 text-white" />}
                showStepIndicator={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorRegistration
