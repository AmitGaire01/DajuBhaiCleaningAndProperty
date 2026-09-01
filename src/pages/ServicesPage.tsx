import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Home,
  Building2,
  Building,
  Droplets,
  KeyRound,
  Wind,
  AppWindow,
  Flame,
  Wrench,
  TreePine,
  Hammer,
  Layers,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "../components/layout/Container";

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const cleaningServices = [
    {
      title: "Residential",
      description:
        "Routine and detail-oriented house cleaning services designed to keep your home immaculate.",
      image: "/services-residential.jpg",
      icon: Home,
    },
    {
      title: "Commercial",
      description:
        "Comprehensive cleaning solutions for retail spaces, hospitality venues, and offices.",
      image: "/services-commercial.jpg",
      icon: Building,
    },
    {
      title: "Office Cleaning",
      description:
        "Daily or weekly office janitorial services to maintain a productive and healthy environment.",
      image: "/services-office.jpg",
      icon: Building2,
    },
    {
      title: "Deep Cleaning",
      description:
        "Intensive cleaning that targets hard-to-reach areas, removing built-up grime and allergens.",
      image: "/services-deep-cleaning.png",
      icon: Droplets,
    },
    {
      title: "End of Lease",
      description:
        "Guaranteed bond-back cleaning services covering every requirement set by agents.",
      image: "/services-end-of-lease.png",
      icon: KeyRound,
    },
    {
      title: "Carpet Cleaning",
      description:
        "Professional steam cleaning and stain removal to revitalize your carpets and rugs.",
      image: "/services-carpet-cleaning.png",
      icon: Wind,
    },
    {
      title: "Window Cleaning",
      description:
        "Streak-free interior and exterior window washing for residential and commercial properties.",
      image: "/services-window-cleaning.png",
      icon: AppWindow,
    },
    {
      title: "Pressure Washing",
      description:
        "High-pressure exterior cleaning for driveways, pathways, building facades, and decks.",
      image: "/services-pressure-washing.png",
      icon: Flame,
    },
  ];

  const propertyServices = [
    {
      title: "Property Maintenance",
      description:
        "Ongoing upkeep and preventative care to ensure your property remains in optimal condition.",
      image: "/property-maintenance-card.png",
      icon: Building2,
    },
    {
      title: "Garden & Lawn",
      description:
        "Professional landscaping, lawn mowing, pruning, and green waste removal services.",
      image: "/property-garden-lawn.jpg",
      icon: TreePine,
    },
    {
      title: "Building Maintenance",
      description:
        "Structural repairs, painting, and general maintenance for residential and commercial complexes.",
      image: "/property-building-maintenance.jpg",
      icon: Hammer,
    },
    {
      title: "Handyman Services",
      description:
        "Quick, reliable fixes for those small but essential repair jobs around the home or office.",
      image: "/property-handyman.png",
      icon: Wrench,
    },
    {
      title: "Facility Management",
      description:
        "End-to-end management of commercial facilities, ensuring operational efficiency and compliance.",
      image: "/property-facility-management.png",
      icon: Layers,
    },
    {
      title: "Property Inspection",
      description:
        "Thorough pre-purchase or periodic inspections providing detailed reports on property conditions.",
      image: "/property-inspection.png",
      icon: ClipboardCheck,
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-slate-900 pb-20">
      {/* 1. Hero Header Banner */}
      <section className="bg-[#002F54] text-white pt-24 pb-20 sm:pb-24">
        <Container className="text-center">
          <span className="inline-block text-[#76B947] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3.5 font-heading">
            [ ELITE PROPERTY SOLUTIONS ]
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight max-w-4xl mx-auto">
            Our Comprehensive Services
          </h1>

          <p className="text-white/80 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
            From meticulous deep cleans to full-scale property maintenance, we
            deliver tailored solutions that elevate the standard of your
            residential and commercial spaces.
          </p>
        </Container>
      </section>

      <Container className="max-w-[1248px] -mt-8 sm:-mt-10 space-y-12">
        {/* 2. Cleaning Services Section Card */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 lg:p-12 shadow-xl border border-slate-100">
          {/* Header */}
          <div className="flex items-start gap-4 mb-8 sm:mb-10">
            <div className="w-12 h-12 rounded-2xl bg-[#1A4670]/10 text-[#1A4670] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                Cleaning Services
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Expert cleaning tailored to your specific environment. We use
                industry-leading equipment and eco-friendly products to ensure a
                pristine finish every time.
              </p>
            </div>
          </div>

          {/* 8 Cleaning Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleaningServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F8F9FA] rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between border border-slate-100 hover:shadow-md hover:bg-white transition-all group"
                >
                  <div>
                    <div className="rounded-xl overflow-hidden mb-4 h-36 w-full relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#1A4670] shadow-xs">
                        {Icon && <Icon className="w-4 h-4" />}
                      </div>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base font-heading mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A4670] group-hover:text-[#4D8C40] transition-colors mt-auto pt-2"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Property Services Section Card */}
        <div className="bg-gradient-to-b from-[#EBF5E5]/60 to-[#F4F8FA] rounded-3xl p-7 sm:p-10 lg:p-12 shadow-sm border border-slate-200/70">
          {/* Header */}
          <div className="flex items-start gap-4 mb-8 sm:mb-10">
            <div className="w-12 h-12 rounded-2xl bg-[#2D6B23]/10 text-[#2D6B23] flex items-center justify-center shrink-0 mt-0.5">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                Property Services
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Comprehensive maintenance and management solutions designed to
                preserve and enhance the value of your physical assets.
              </p>
            </div>
          </div>

          {/* 6 Property Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-slate-100 shadow-2xs hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="rounded-xl overflow-hidden mb-4 h-40 w-full relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#2D6B23] shadow-xs">
                        {Icon && <Icon className="w-4 h-4" />}
                      </div>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base sm:text-lg font-heading mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D6B23] hover:text-[#1A4670] transition-colors mt-auto pt-2"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Need a Custom Solution? CTA Card */}
        <div className="bg-[#002F54] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 text-white relative overflow-hidden">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight">
              Need a Custom Solution?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Every space is unique. If you have specific requirements that fall
              outside our standard packages, our team can design a bespoke
              service plan tailored exactly to your needs.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 bg-[#2D6B23] hover:bg-[#24581c] active:scale-[0.98] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg flex items-center gap-2 transition cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ServicesPage;
