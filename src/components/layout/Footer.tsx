import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Clock } from "lucide-react";
import { Container } from "./Container";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#E5E8EC]/90 text-slate-700 pt-16 sm:pt-20 pb-10 border-t border-slate-300/60">
      <Container>
        {/* 4 Equal Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 pb-14">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group shrink-0 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border border-slate-300/80 shadow-xs flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Daju Bhai Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#1A4670] font-heading">
                Daju Bhai
              </span>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed">
              Providing elite cleaning and property maintenance solutions for
              residential and commercial spaces since 2010.
            </p>
          </div>

          {/* Col 2: Our Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 font-heading mb-4">
              OUR SERVICES
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link
                  to="/#services"
                  className="hover:text-[#1A4670] hover:underline transition-colors block"
                >
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="hover:text-[#1A4670] hover:underline transition-colors block"
                >
                  Property Management
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="hover:text-[#1A4670] hover:underline transition-colors block"
                >
                  Garden Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="hover:text-[#1A4670] hover:underline transition-colors block"
                >
                  End of Lease Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 font-heading mb-4">
              CONTACT INFO
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-700 shrink-0" />
                <a
                  href="mailto:hello@dajubhai.com.au"
                  className="hover:text-[#1A4670] hover:underline transition-colors truncate"
                >
                  hello@dajubhai.com.au
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-700 shrink-0" />
                <span>Sydney, NSW Australia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-700 shrink-0" />
                <span>Mon-Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 font-heading mb-2">
              NEWSLETTER
            </h4>
            <p className="text-sm text-slate-600 mb-4">
              Get tips and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-xs text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002F54]"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#002F54] hover:bg-[#00223d] active:scale-[0.99] text-white font-medium text-sm rounded-xl transition-all shadow-sm cursor-pointer"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-300/70 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-600">
          <p>
            © 2024 Daju Bhai Cleaning & Property Services. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/#privacy"
              className="hover:text-slate-900 hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/#terms"
              className="hover:text-slate-900 hover:underline transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/#cookie"
              className="hover:text-slate-900 hover:underline transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
