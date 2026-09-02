import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Quote } from "lucide-react";
import { Container } from "../components/layout/Container";
import { BeforeAfterToggleCard } from "../components/ui/BeforeAfterToggleCard";

export const OurWorkPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const caseStudies = [
    {
      title: "Tech Hub Campus Reset",
      badge: "COMMERCIAL",
      badgeColor: "bg-[#1A4670] text-white",
      image: "/casestudy-techhub.jpg",
      description:
        "Comprehensive deep clean and exterior maintenance for a 50,000 sq ft technology park following major renovations. Included facade cleaning, window washing, and workspace disinfection.",
    },
    {
      title: "Luxury Estate Revival",
      badge: "RESIDENTIAL",
      badgeColor: "bg-[#2D6B23] text-white",
      image: "/casestudy-luxury.jpg",
      description:
        "Detailed post-construction cleaning and ongoing maintenance setup for a newly developed luxury residential property, focusing on delicate surfaces, marble polishing, and timber protection.",
    },
    {
      title: "Medical Center Sanitization",
      badge: "SPECIALIZED",
      badgeColor: "bg-[#002F54] text-white",
      image: "/casestudy-medical.jpg",
      description:
        "Strict protocol implementation and deep sanitization for a regional medical facility, ensuring compliance with hospital-grade health standards and infection control requirements.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The level of detail they brought to our corporate headquarters was unprecedented. Not only did they restore the space, but their ongoing maintenance has visibly boosted team morale.",
      author: "Sarah Jenkins",
      role: "Facilities Director, Apex Innovations",
      avatar: "/sarah-jenkins.jpg",
    },
    {
      quote:
        "Reliable, thorough, and highly professional. They handled the post-renovation cleanup of our residential complex with incredible efficiency. Highly recommended.",
      author: "Marcus Thorne",
      role: "Property Manager, Vista Estates",
      avatar: "/marcus-thorne.jpg",
    },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-slate-900 pb-20">
      {/* 1. Hero Header Banner */}
      <section className="relative w-full min-h-[420px] sm:min-h-[480px] flex items-center bg-[#002F54] overflow-hidden">
        <img
          src="/our-work-hero.jpg"
          alt="Exceptional Results in Every Project"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002F54]/95 via-[#002F54]/80 to-transparent" />

        <Container className="relative z-10 py-16 sm:py-24 max-w-[1248px]">
          <div className="max-w-2xl space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Exceptional Results in Every Project
            </h1>

            <p className="text-white/85 text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
              We transform spaces from chaotic to pristine. Explore our
              portfolio of commercial and residential maintenance projects,
              delivering order and value through dedicated service.
            </p>

            <div className="pt-2">
              <button
                onClick={() => scrollToSection("showcase")}
                className="inline-flex items-center gap-2 bg-[#2D6B23] hover:bg-[#23581a] active:scale-[0.98] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition cursor-pointer"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="max-w-[1248px] pt-14 sm:pt-20 space-y-16 sm:space-y-24">
        {/* 2. Before & After Transformation Showcase */}
        <section id="showcase" className="space-y-8 sm:space-y-10">
          <div className="max-w-2xl space-y-2.5">
            <span className="text-[#4D8C40] font-bold text-xs sm:text-sm tracking-wider uppercase font-heading">
              TRANSFORMATION SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Before & After
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Witness the impact of professional maintenance. Click Before and
              After or swipe to reveal the dramatic difference our dedicated
              team makes in restoring spaces to their optimal condition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BeforeAfterToggleCard
              title="Commercial Kitchen"
              beforeImage="/kitchen-before.jpg"
              afterImage="/kitchen-after.jpg"
              beforeTagline="Heavy grease, food residue & chaotic workstations"
              afterTagline="Restored, degreased & hospital-grade stainless steel"
            />

            <BeforeAfterToggleCard
              title="Corporate Office Flooring"
              beforeImage="/carpet-before.jpg"
              afterImage="/carpet-after.jpg"
              beforeTagline="Deep-set stains, heavy traffic dirt & torn surface debris"
              afterTagline="Steam cleaned, refreshed & spotless commercial carpet"
            />
          </div>
        </section>

        {/* 3. Major Transformations (Featured Work) */}
        <section className="bg-[#ECEEF1]/70 rounded-[32px] p-8 sm:p-12 lg:p-14 border border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[#4D8C40] font-bold text-xs sm:text-sm tracking-wider uppercase font-heading">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-1">
              Major Transformations
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed mt-2.5">
              In-depth looks at comprehensive cleaning and maintenance projects
              across diverse properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                      className={`absolute top-3 right-3 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${cs.badgeColor}`}
                    >
                      {cs.badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <h3 className="font-bold text-slate-900 text-lg font-heading leading-snug group-hover:text-[#1A4670] transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {cs.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D6B23] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Client Voices */}
        <section className="space-y-8">
          <div>
            <span className="text-[#4D8C40] font-bold text-xs sm:text-sm tracking-wider uppercase font-heading">
              CLIENT VOICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-1">
              Trusted by Professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-[#ECEEF1]/60 rounded-3xl p-7 sm:p-8 border border-slate-200 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-[#1A4670]/20" />
                  <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-200/80">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-11 h-11 rounded-full object-cover border border-slate-300 shadow-2xs"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">
                      {test.author}
                    </h4>
                    <p className="text-xs text-slate-500">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CTA */}
        <section className="bg-[#002F54] rounded-[32px] p-10 sm:p-14 lg:p-16 text-center text-white relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#D5EDB7]/20 text-[#D5EDB7] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
              Ready for your own transformation?
            </h2>

            <p className="text-white/80 text-xs sm:text-sm sm:text-base leading-relaxed">
              Experience the difference of a professionally maintained
              environment. Contact us today to discuss your specific needs and
              receive a tailored quote.
            </p>

            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#2D6B23] hover:bg-[#23581a] active:scale-[0.98] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default OurWorkPage;
