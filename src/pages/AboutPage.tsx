import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Shield,
  HeartHandshake,
  Award,
  ArrowRight,
} from "lucide-react";
import { Container } from "../components/layout/Container";

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const values = [
    {
      title: "Unwavering Reliability",
      description:
        "We show up on time, every time. Consistency is the foundation of the trust we build with our clients.",
      icon: Shield,
      bg: "bg-[#1A4670]",
    },
    {
      title: "Absolute Integrity",
      description:
        "Honesty and transparency in all our dealings. We treat your property with the utmost respect and care.",
      icon: HeartHandshake,
      bg: "bg-[#76B947]",
    },
    {
      title: "Relentless Excellence",
      description:
        "We don't settle for 'good enough.' Our rigorous standards ensure a pristine result on every job.",
      icon: Award,
      bg: "bg-[#2D6B23]",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-slate-900 pb-20">
      {/* 1. Hero Banner with Team Photo */}
      <section className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image */}
        <img
          src="/about-team.jpg"
          alt="Daju Bhai Elite Professionals Team"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/75" />

        {/* Hero Content */}
        <Container className="relative z-10 text-center py-20">
          <span className="inline-block text-[#76B947] font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 font-heading">
            THE DAJU BHAI STANDARD
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Elite Professionals <br className="hidden sm:block" />
            Dedicated to Your Property
          </h1>

          <p className="text-white/80 text-sm sm:text-base lg:text-lg mt-5 max-w-2xl mx-auto font-normal leading-relaxed">
            Delivering uncompromising quality in commercial and residential
            cleaning since 2010.
          </p>
        </Container>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Image with Floating 14+ Badge */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/60 bg-white">
                <img
                  src="/about-counter-story.png"
                  alt="Precision cleaning countertop"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
              </div>

              {/* Floating Badge shifted to right side */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 lg:-right-10 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-2xl border border-slate-100 flex items-center gap-3.5 z-10">
                <div className="w-10 h-10 rounded-full bg-[#D5EDB7] flex items-center justify-center text-[#2D6B23] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xl font-heading leading-tight">
                    14+
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Story Text Content */}
            <div className="lg:col-span-7 lg:pl-4 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A4670] font-heading tracking-tight">
                Our Story
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading leading-snug">
                From humble beginnings to industry leaders.
              </h3>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                <p>
                  Founded in 2010, Daju Bhai started with a simple vision: to
                  provide cleaning services that went beyond the surface. We
                  recognized a gap in the market for a truly professional,
                  reliable service that homeowners and property managers could
                  trust implicitly.
                </p>
                <p>
                  Over the years, we've grown from a small local team into a
                  dual-service leader, offering both specialized residential and
                  expansive commercial cleaning solutions. Our growth is a
                  testament to our unwavering commitment to quality and the
                  lasting relationships we've built with our clients.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#002F54] hover:bg-[#002340] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow-md group"
                >
                  <span>Read Our Full Timeline</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Mission & Values Section */}
      <section className="pb-12">
        <Container>
          <div className="bg-gradient-to-b from-[#EBF5E5]/70 to-[#F4F8FA] rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/60 shadow-sm">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A4670] font-heading tracking-tight">
                Mission & Values
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The principles that guide our every action and define the Daju
                Bhai standard of excellence.
              </p>
            </div>

            {/* 3 Values Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {values.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                      <div
                        className={`w-full h-full rounded-xl ${item.bg} flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg font-heading">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
