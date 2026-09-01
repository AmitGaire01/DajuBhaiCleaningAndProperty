import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "../layout/Container";

const featuredServices = [
  {
    title: "Residential Cleaning",
    description:
      "Comprehensive home cleaning services tailored to your lifestyle. We handle the dusting, mopping, and detailing so you...",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
    href: "#contact",
  },
  {
    title: "Property Maintenance",
    description:
      "Keep your property in pristine condition year-round. From garden upkeep to minor repairs, our team ensures every...",
    image: "/property-maintenance.png",
    href: "#contact",
  },
  {
    title: "Commercial Services",
    description:
      "Maintain a professional and hygienic workspace for your employees and clients with our robust commercial...",
    image: "/commercial-services.png",
    href: "#contact",
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative z-10 pt-10 sm:pt-14 md:pt-16 pb-20 bg-white"
    >
      <Container>
        {/* Header with Title, Description, and Right View All Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1A4670] font-heading tracking-tight leading-tight">
              Featured Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Discover our range of specialized cleaning and maintenance
              solutions designed to keep your spaces immaculate.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D6B23] hover:text-[#23541b] hover:underline shrink-0 group transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 3 Featured Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-900/5 border border-slate-100/80 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading tracking-tight group-hover:text-[#1A4670] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-3">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Row: Learn More + Chevron Circle */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={service.href}
                    className="text-sm font-bold text-[#1A4670] group-hover:text-[#2D6B23] transition-colors"
                  >
                    Learn More
                  </a>

                  <a
                    href={service.href}
                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#2D6B23] group-hover:text-white transition-all shadow-xs"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
