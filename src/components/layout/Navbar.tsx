import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, Sparkles, Home } from "lucide-react";
import { Container } from "./Container";
import { Button } from "../ui/Button";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  name: string;
  href: string;
  isRoute?: boolean;
  dropdown?: DropdownItem[];
}

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState<string>("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About Us", href: "/about", isRoute: true },
    {
      name: "Services",
      href: "/services",
      isRoute: true,
      dropdown: [
        {
          title: "Cleaning & Property Services",
          description:
            "Residential, commercial, office & specialized bond cleaning solutions",
          href: "/services",
          icon: Sparkles,
        },
        {
          title: "Property & Tenant Management",
          description:
            "Turnover preparation, grounds maintenance & full facility care",
          href: "/property-management",
          icon: Home,
        },
      ],
    },
    { name: "Our Work", href: "/#testimonials" },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update active state based on route & scroll position
  useEffect(() => {
    if (location.pathname === "/contact") {
      setActiveNav("Contact");
      return;
    }
    if (location.pathname === "/about") {
      setActiveNav("About Us");
      return;
    }
    if (
      location.pathname === "/services" ||
      location.pathname === "/property-management"
    ) {
      setActiveNav("Services");
      return;
    }

    const sectionIds = [
      { id: "home", name: "Home" },
      { id: "testimonials", name: "Our Work" },
    ];

    const handleScroll = () => {
      if (location.pathname !== "/") return;
      const scrollY = window.scrollY + 120;
      for (const section of sectionIds) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveNav(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item: NavItem) => {
    setActiveNav(item.name);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);

    if (item.isRoute) {
      navigate(item.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (location.pathname !== "/") {
        navigate(item.href);
      } else {
        const hash = item.href.replace("/", "");
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleDropdownSubClick = (subHref: string) => {
    setActiveNav("Services");
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(subHref);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-200"
      ref={navRef}
    >
      <Container className="h-[80px] flex items-center justify-between">
        {/* Left: Brand logo & text */}
        <Link
          to="/"
          onClick={() => {
            setActiveNav("Home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group shrink-0 focus:outline-none"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden border border-gray-200/80 bg-white shadow-md shadow-[#1A4670]/15 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center p-0.5">
            <img
              src="/logo.png"
              alt="Dajubhai Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#1A4670] leading-none font-heading">
              DAJU BHAI
            </span>
            <span className="text-[10px] font-semibold text-[#4D8C40] tracking-wider uppercase mt-1">
              Cleaning & Property Services
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
          {navItems.map((item) => {
            const hasDropdown = !!item.dropdown;
            const isOpen = hasDropdown && servicesDropdownOpen;
            const isActive = activeNav === item.name;

            if (hasDropdown) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      setServicesDropdownOpen(!servicesDropdownOpen);
                      handleNavClick(item);
                    }}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                      isActive
                        ? "text-[#4D8C40] font-semibold"
                        : "text-gray-700 hover:text-[#1A4670] hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#4D8C40]" : ""
                      } ${isActive ? "text-[#4D8C40]" : ""}`}
                    />

                    {/* Active Indicator Underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2.5px] bg-[#4D8C40] rounded-full transition-all duration-300" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute top-full left-0 pt-2 w-80 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 space-y-1">
                        {item.dropdown?.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <button
                              key={sub.title}
                              onClick={() => handleDropdownSubClick(sub.href)}
                              className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F8F9FA] transition group/sub cursor-pointer"
                            >
                              <div className="p-2 rounded-lg bg-[#4D8C40]/10 text-[#4D8C40] group-hover/sub:bg-[#2D6B23] group-hover/sub:text-white transition shrink-0 mt-0.5">
                                <SubIcon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-bold text-gray-900 group-hover/sub:text-[#1A4670] transition font-heading">
                                  {sub.title}
                                </div>
                                <p className="text-xs text-gray-500 line-clamp-2 mt-0.5 leading-relaxed">
                                  {sub.description}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center focus:outline-none cursor-pointer ${
                  isActive
                    ? "text-[#4D8C40] font-semibold"
                    : "text-gray-700 hover:text-[#1A4670] hover:bg-gray-50"
                }`}
              >
                <span>{item.name}</span>

                {/* Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2.5px] bg-[#4D8C40] rounded-full transition-all duration-300" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Side: Phone and Get a Quote CTA Button */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:1300000000"
            className="flex items-center gap-2.5 text-gray-700 hover:text-[#1A4670] font-semibold text-sm transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-[#1A4670]/10 flex items-center justify-center text-[#1A4670] group-hover:bg-[#1A4670] group-hover:text-white transition-colors duration-200">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-gray-500 font-normal uppercase tracking-wider">
                Call Us Today
              </span>
              <span className="text-sm font-bold text-gray-900 font-heading">
                1300 000 000
              </span>
            </div>
          </a>

          <Link to="/contact">
            <Button
              variant="secondary"
              className="bg-[#2D6B23] hover:bg-[#23581a] text-white shadow-sm font-medium px-5 py-2.5 rounded-full text-sm cursor-pointer"
            >
              Get a Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <Link to="/contact">
            <Button
              variant="secondary"
              size="sm"
              className="bg-[#2D6B23] hover:bg-[#23581a] text-white text-xs px-3.5 py-2 rounded-full"
            >
              Quote
            </Button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-gray-700 hover:text-[#1A4670] hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const hasDropdown = !!item.dropdown;
            const isActive = activeNav === item.name;

            if (hasDropdown) {
              return (
                <div
                  key={item.name}
                  className="border-b border-gray-50 last:border-none pb-1"
                >
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`text-left flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition ${
                        isActive
                          ? "text-[#4D8C40] bg-[#4D8C40]/5"
                          : "text-gray-800 hover:text-[#1A4670]"
                      }`}
                    >
                      {item.name}
                    </button>
                    <button
                      onClick={() =>
                        setMobileServicesExpanded(!mobileServicesExpanded)
                      }
                      className="p-2 text-gray-400 hover:text-gray-700"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesExpanded
                            ? "rotate-180 text-[#4D8C40]"
                            : ""
                        }`}
                      />
                    </button>
                  </div>

                  {mobileServicesExpanded && (
                    <div className="pl-3 pr-2 py-2 space-y-2 bg-gray-50/80 rounded-xl my-1">
                      {item.dropdown?.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <button
                            key={sub.title}
                            onClick={() => handleDropdownSubClick(sub.href)}
                            className="w-full text-left flex items-center gap-3 p-2 rounded-lg text-xs font-semibold text-gray-700 hover:text-[#1A4670] hover:bg-white transition"
                          >
                            <SubIcon className="w-4 h-4 text-[#4D8C40]" />
                            <span>{sub.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition ${
                  isActive
                    ? "text-[#4D8C40] bg-[#4D8C40]/5"
                    : "text-gray-800 hover:text-[#1A4670]"
                }`}
              >
                {item.name}
              </button>
            );
          })}

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:1300000000"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-100 text-gray-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#1A4670]" />
              <span>1300 000 000</span>
            </a>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="secondary"
                className="w-full bg-[#2D6B23] text-white py-3 rounded-xl font-medium"
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
