import React from "react";
import { ArrowRight, ShieldCheck, Sparkles, Headphones } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative z-20 overflow-hidden bg-white pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16"
    >
      {/* Top Dark Hero Background (Stops right across the icon badges of the 3 cards) */}
      <div className="absolute top-0 left-0 right-0 h-[calc(100%-145px)] sm:h-[calc(100%-155px)] md:h-[calc(100%-165px)] bg-slate-900 overflow-hidden pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Clean Interior"
          className="w-full h-full object-cover object-center opacity-40 filter blur-[1px]"
        />
        {/* Soft cool-to-deep-navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#94a9be]/75 via-[#264b6e]/85 to-[#0e273f]/95 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e273f] via-transparent to-transparent opacity-80" />
      </div>

      <Container className="relative z-10">
        {/* Frosted Glass Hero Card */}
        <div className="max-w-2xl bg-white/25 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-11 shadow-2xl shadow-slate-950/20">
          {/* Tag / Badge */}
          <div className="mb-4 sm:mb-5">
            <span className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-[#D5EDB7] text-[#2D6B23] shadow-xs">
              EXPERT PROPERTY SOLUTIONS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-slate-900 font-heading leading-[1.18] tracking-tight">
            Your Trusted Partner <br className="hidden xs:inline" />
            for Expert Cleaning & <br className="hidden xs:inline" />
            Property Maintenance.
          </h1>

          {/* Subtext */}
          <p className="text-slate-900 font-medium text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 max-w-lg">
            From sparkling homes to well-maintained properties, Daju Bhai
            delivers excellence you can trust. We manage the mess, so you can
            manage your life.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-7 pt-1">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto justify-center"
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get a Quote
            </Button>

            <Button
              variant="secondary"
              size="md"
              className="w-full sm:w-auto justify-center bg-white/40 hover:bg-white/70 text-slate-800 border-white/60 backdrop-blur-md px-6 py-3 h-[48px] sm:h-[56px]"
              onClick={() => {
                const el = document.getElementById("services");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Services
            </Button>
          </div>
        </div>

        {/* 3 Feature Boxes: Sitting over the dark-to-white dividing line at the green mark */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {/* Box 1: Professional Team */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl md:shadow-2xl shadow-slate-900/10 border border-slate-100/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E2EAF2] flex items-center justify-center text-[#1A4670] mb-5 sm:mb-6">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#1A4670]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A4670] font-heading tracking-tight">
                Professional Team
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5 sm:mt-3">
                Fully vetted, insured, and extensively trained professionals
                dedicated to delivering top-tier service on every visit.
              </p>
            </div>

            {/* Box 2: Comprehensive Services */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl md:shadow-2xl shadow-slate-900/10 border border-slate-100/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#EAF7DC] flex items-center justify-center text-[#2D6B23] mb-5 sm:mb-6">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#2D6B23]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A4670] font-heading tracking-tight">
                Comprehensive Services
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5 sm:mt-3">
                From deep residential cleans to ongoing commercial property
                maintenance, we offer tailored solutions for every need.
              </p>
            </div>

            {/* Box 3: Reliable Support */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl md:shadow-2xl shadow-slate-900/10 border border-slate-100/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E5EFE2] flex items-center justify-center text-[#3D6B35] mb-5 sm:mb-6">
                <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-[#3D6B35]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A4670] font-heading tracking-tight">
                Reliable Support
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5 sm:mt-3">
                Exceptional customer care with transparent communication,
                flexible scheduling, and a satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
