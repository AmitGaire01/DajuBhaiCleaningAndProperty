import React from "react";
import {
  Star,
  Store,
  Building2,
  Home,
  UtensilsCrossed,
} from "lucide-react";
import { Container } from "../layout/Container";

export const Testimonials: React.FC = () => {
  const industries = [
    {
      name: "Retail & Commercial",
      icon: Store,
    },
    {
      name: "Corporate Offices",
      icon: Building2,
    },
    {
      name: "Real Estate Agencies",
      icon: Home,
    },
    {
      name: "Hospitality Venues",
      icon: UtensilsCrossed,
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA]">
      <Container>
        {/* Large Rounded Testimonial & Industry Card */}
        <div className="bg-white rounded-3xl sm:rounded-[32px] shadow-xl shadow-slate-900/5 border border-slate-100/90 p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          
          {/* Giant Ambient Quote Mark Watermark */}
          <div className="absolute top-4 right-8 sm:top-6 sm:right-12 text-slate-100/90 text-8xl sm:text-9xl font-serif font-black leading-none select-none pointer-events-none z-0">
            &rdquo;
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-center">
            
            {/* Left Column: Featured Review */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* 5 Green Outline/Filled Stars */}
                <div className="flex items-center gap-1.5 text-[#2D6B23]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#2D6B23] fill-transparent stroke-[2.2]"
                    />
                  ))}
                </div>

                {/* Main Quote Statement */}
                <blockquote className="mt-6 text-xl sm:text-2xl lg:text-[28px] font-heading font-extrabold text-slate-900 leading-[1.3] tracking-tight">
                  &ldquo;Daju Bhai transformed our office space. Their attention
                  to detail is unmatched, and their team is always punctual and
                  professional. Highly recommended for any serious business
                  looking for reliable cleaning services.&rdquo;
                </blockquote>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3.5 mt-8 pt-2">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=140&h=140&q=80"
                  alt="Sarah Jenkins"
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-xs"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-base leading-snug">
                    Sarah Jenkins
                  </span>
                  <span className="text-slate-500 text-xs sm:text-sm">
                    Facilities Manager, TechFlow Inc.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Trusted By Industries */}
            <div className="lg:col-span-5 lg:border-l lg:border-slate-100 lg:pl-10 xl:pl-14 pt-8 lg:pt-0 border-t lg:border-t-0 border-slate-100">
              <span className="text-[#1A4670] font-bold text-xs sm:text-sm tracking-wider uppercase block mb-6 font-heading">
                TRUSTED BY INDUSTRIES
              </span>

              <div className="space-y-4">
                {industries.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 group cursor-default"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#1A4670]/10 group-hover:text-[#1A4670] transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm sm:text-base group-hover:text-slate-900 transition-colors">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
