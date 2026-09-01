import React, { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
} from "lucide-react";
import { Container } from "../layout/Container";

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    address: "",
    details: "",
  });

  const faqs = [
    {
      question: "Do you provide your own cleaning supplies?",
      answer:
        "Yes, our professional teams come fully equipped with all commercial-grade, eco-friendly cleaning solutions and modern equipment. If you prefer us to use specific products on sensitive surfaces, simply let us know.",
    },
    {
      question: "What areas do you currently service?",
      answer:
        "We service residential and commercial properties throughout the entire metropolitan area and surrounding suburbs. Contact us with your address to confirm immediate availability.",
    },
    {
      question: "Are your staff insured and bonded?",
      answer:
        "Yes, absolutely. All Daju Bhai cleaning professionals are comprehensively insured, police background-checked, and rigorously trained to deliver top-tier service with complete peace of mind.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#002F54] text-slate-900">
      <Container className="max-w-[1248px]">
        {/* Top Section: Form on Left + Sidebar on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Request a Quote Form Card (686px approx) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 md:p-11 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D5EDB7] text-[#2D6B23]">
                  Fast & Accurate
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A4670] font-heading tracking-tight">
                Request a Quote
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5 mb-7">
                Tell us about your property and service needs. Our team will
                review your request and get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-[#EAF7DC] border border-[#2D6B23]/30 rounded-2xl p-6 text-center my-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#2D6B23] text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A4670]">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-slate-700 max-w-sm mx-auto">
                    Thank you! Our team is reviewing your requirements and will
                    reach out to you promptly with your personalized quote.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        serviceType: "",
                        address: "",
                        details: "",
                      });
                    }}
                    className="mt-2 text-xs font-bold text-[#2D6B23] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 font-heading">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 bg-[#F8F9FA] rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6B23] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 font-heading">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 bg-[#F8F9FA] rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6B23] transition"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 font-heading">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 bg-[#F8F9FA] rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6B23] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 font-heading">
                        Service Type
                      </label>
                      <select
                        required
                        value={formData.serviceType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-[#F8F9FA] rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6B23] transition"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Services</option>
                        <option value="property">Property Maintenance</option>
                        <option value="bond">End of Lease / Bond Clean</option>
                        <option value="carpet">Carpet & Steam Cleaning</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Property Address */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5 font-heading">
                      Property Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      placeholder="123 Main St, City, State, ZIP"
                      className="w-full px-4 py-3 bg-[#F8F9FA] rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6B23] transition"
                    />
                  </div>

                  {/* Row 4: Additional Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5 font-heading">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      placeholder="Tell us more about square footage, specific requirements, or preferred schedule..."
                      className="w-full px-4 py-3 bg-[#F8F9FA] rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6B23] transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-[#2D6B23] hover:bg-[#24581c] active:scale-[0.98] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <span>Submit Quote Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Info Card + Map Card (457px approx) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Contact Information */}
            <div className="bg-[#00223D]/95 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-white/10 text-white shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-heading tracking-tight">
                  Contact Information
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mt-1.5 mb-6 leading-relaxed">
                  Reach out directly for immediate assistance or general
                  inquiries.
                </p>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-white/60 tracking-wider uppercase">
                        PHONE
                      </span>
                      <a
                        href="tel:5559876543"
                        className="text-base sm:text-lg font-bold text-white font-heading hover:text-white/80 transition-colors"
                      >
                        (555) 987-6543
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-white/60 tracking-wider uppercase">
                        EMAIL
                      </span>
                      <a
                        href="mailto:hello@cleanproperty.com"
                        className="text-sm font-medium text-white/90 hover:underline"
                      >
                        hello@cleanproperty.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-white/60 tracking-wider uppercase">
                        BUSINESS HOURS
                      </span>
                      <span className="block text-xs sm:text-sm text-white/90 font-medium">
                        Mon - Fri: 8:00 AM - 6:00 PM
                      </span>
                      <span className="block text-xs text-white/60 mt-0.5">
                        Sat - Sun: Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Interactive Location Map Card */}
            <div className="rounded-3xl overflow-hidden relative shadow-xl border border-white/10 flex-grow min-h-[260px] bg-slate-800 flex flex-col justify-end">
              {/* Background Map Image */}
              <img
                src="/contact-map.png"
                alt="Chicago Headquarters Map"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Floating Headquarters Address Card */}
              <div className="relative z-10 bg-white rounded-2xl p-4 sm:p-4.5 m-3.5 sm:m-4 shadow-xl border border-slate-100">
                <span className="block text-xs font-extrabold text-slate-900 font-heading">
                  Headquarters
                </span>
                <span className="block text-xs sm:text-sm text-slate-600 mt-0.5">
                  456 Corporate Blvd, Suite 200
                </span>
                <span className="block text-xs sm:text-sm text-slate-600">
                  Chicago, IL 60601
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Full-Width Card: Frequently Asked Questions */}
        <div className="bg-[#CFD7DE] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl border border-white/20 text-center mt-8 sm:mt-10 lg:mt-12">
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 font-heading tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2 mb-8 sm:mb-10 max-w-xl mx-auto">
            Quick answers to common questions about our services and process.
          </p>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden text-left transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 font-heading text-sm sm:text-base hover:text-[#1A4670] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-[#1A4670]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
};
