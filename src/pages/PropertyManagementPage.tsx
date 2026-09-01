import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Building2,
  Building,
  Wrench,
  Headset,
  ShieldCheck,
  Smile,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Container } from "../components/layout/Container";

export const PropertyManagementPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/contact");
  };

  const pillars = [
    {
      title: "Residential Properties",
      description:
        "From single-family homes to large multi-unit complexes, we handle tenant screening, rent collection, and daily operations with meticulous care.",
      icon: Building2,
      badgeBg: "bg-[#1A4670]",
      cornerAccent: "border-t-4 border-r-4 border-[#1A4670]/30",
    },
    {
      title: "Commercial Properties",
      description:
        "Tailored management for retail spaces, offices, and industrial properties, ensuring lease compliance and optimal facility performance.",
      icon: Building,
      badgeBg: "bg-[#76B947]",
      cornerAccent: "border-t-4 border-r-4 border-[#76B947]/30",
    },
    {
      title: "Maintenance Management",
      description:
        "Proactive 24/7 maintenance coordination utilizing our trusted network of contractors to preserve asset value and prevent costly emergencies.",
      icon: Wrench,
      badgeBg: "bg-[#2D6B23]",
      cornerAccent: "border-t-4 border-r-4 border-[#2D6B23]/30",
    },
    {
      title: "Tenant Support",
      description:
        "Dedicated communication channels for prompt conflict resolution, lease inquiries, and fostering a positive community environment.",
      icon: Headset,
      badgeBg: "bg-[#E07A5F]",
      cornerAccent: "border-t-4 border-r-4 border-[#E07A5F]/30",
    },
  ];

  const advantages = [
    {
      title: "Unwavering Reliability",
      description:
        "Consistent, transparent reporting and dependable financial management you can trust month after month.",
      icon: ShieldCheck,
      iconBg: "bg-[#D5EDB7] text-[#2D6B23]",
    },
    {
      title: "High Tenant Satisfaction",
      description:
        "Happy tenants mean lower turnover. We prioritize responsive communication and fair treatment.",
      icon: Smile,
      iconBg: "bg-[#1A4670]/15 text-[#1A4670]",
    },
    {
      title: "Property Value Preservation",
      description:
        "Strategic maintenance plans and regular inspections to identify issues before they become expensive liabilities.",
      icon: TrendingUp,
      iconBg: "bg-[#1A4670] text-white",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-slate-900 pb-20">
      {/* 1. Hero Header Banner */}
      <section className="bg-[#002F54] text-white pt-24 pb-20 sm:pb-28 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#76B947]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A4670]/40 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10 text-left max-w-[1248px]">
          <span className="inline-block text-[#76B947] font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 font-heading">
            PROPERTY MANAGEMENT
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight max-w-3xl">
            Hassle-Free Property & Tenant Management
          </h1>

          <p className="text-white/80 text-sm sm:text-base lg:text-lg mt-5 max-w-2xl font-normal leading-relaxed">
            Comprehensive management solutions designed to maximize your
            property's value while minimizing your daily stress.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#2D6B23] hover:bg-[#23581a] active:scale-[0.98] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition cursor-pointer"
            >
              <span>Discuss Your Property</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 2. Our Management Pillars Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F8FBF6] to-white">
        <Container className="max-w-[1248px]">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A4670] font-heading tracking-tight inline-block relative">
              Our Management Pillars
              <span className="block h-1 w-20 bg-[#76B947] mx-auto mt-2 rounded-full" />
            </h2>
          </div>

          {/* 4 Pillars Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl border border-slate-100/80 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Decorative corner curve badge */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50/80 rounded-bl-3xl border-b border-l border-slate-100 group-hover:bg-[#EBF5E5]/50 transition-colors" />

                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm group-hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: pillar.badgeBg
                        .replace("bg-[", "")
                        .replace("]", ""),
                    }}
                  >
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. The Daju Bhai Advantage ("Why Choose Us for Management?") */}
      <section className="py-16 sm:py-24 bg-[#ECEEF1]/60">
        <Container className="max-w-[1248px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Cluster matching Figma layout */}
            <div className="lg:col-span-6 flex justify-center py-4">
              <div className="relative w-full max-w-[608px] rounded-[32px] bg-[#002F54]/[0.05] p-5 sm:p-6 flex items-center justify-between gap-4 sm:gap-6">
                {/* Left Rounded Square Box: Property Manager */}
                <div className="flex-1 aspect-[280/268] rounded-[28px] overflow-hidden shadow-md bg-white border border-white/60 relative z-0 translate-y-3 sm:translate-y-4">
                  <img
                    src="/pm-manager.jpg"
                    alt="Daju Bhai Property Manager"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Rounded Square Box: Modern Apartment */}
                <div className="flex-1 aspect-[280/268] rounded-[28px] overflow-hidden shadow-md bg-white border border-white/60 relative z-0 -translate-y-3 sm:-translate-y-4">
                  <img
                    src="/pm-apartment.jpg"
                    alt="Managed Modern Living Space"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Absolute Badge in the exact center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[24px] px-5 sm:px-6 py-4 sm:py-5 shadow-2xl border border-slate-100/90 text-center z-20 min-w-[125px] sm:min-w-[145px]">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#2D6B23] font-heading block leading-none">
                    98%
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-widest block mt-2 leading-tight font-heading">
                    TENANT
                    <br />
                    RETENTION
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#4D8C40] font-bold text-xs sm:text-sm tracking-wider uppercase font-heading">
                  THE DAJU BHAI ADVANTAGE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-1">
                  Why Choose Us for Management?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                  We treat your investment as if it were our own. Our systematic
                  approach ensures long-term profitability and peace of mind.
                </p>
              </div>

              {/* 3 Pill Cards */}
              <div className="space-y-4 pt-2">
                {advantages.map((adv, index) => {
                  const Icon = adv.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-all group"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${adv.iconBg}`}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 text-base font-heading">
                          {adv.title}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                          {adv.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Ready to Optimize Your Investment? CTA */}
      <section className="py-16">
        <Container className="max-w-[1248px]">
          <div className="bg-[#002F54] rounded-3xl p-8 sm:p-14 shadow-2xl text-center text-white relative overflow-hidden border border-white/10">
            {/* Background Diagonal Graphic Accent Lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-[150%] h-[150%] -rotate-12 border-t border-b border-white/30 translate-y-12" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight">
                Ready to Optimize Your Investment?
              </h2>

              <p className="text-white/80 text-xs sm:text-sm sm:text-base leading-relaxed">
                Let's discuss how our tailored property management strategies
                can elevate your portfolio.
              </p>

              {/* Email Pill Form Container with perfect vertical centering */}
              <div className="pt-4 max-w-xl mx-auto">
                <form
                  onSubmit={handleInquirySubmit}
                  className="bg-white rounded-3xl sm:rounded-full p-2 shadow-2xl border border-white/20 flex flex-col sm:flex-row items-center gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 w-full bg-transparent px-5 py-3 sm:py-0 h-12 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto h-12 bg-[#2D6B23] hover:bg-[#23581a] active:scale-[0.98] text-white font-bold text-sm px-8 rounded-full shadow-md transition flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    Discuss Your Property
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PropertyManagementPage;
