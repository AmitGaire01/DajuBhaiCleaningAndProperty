import React from "react";
import { Shield, Award, Users, CheckCircle } from "lucide-react";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export const About: React.FC = () => {
  const stats = [
    { label: "Happy Clients", value: "500+" },
    { label: "Bond Return Rate", value: "100%" },
    { label: "Trained Cleaners", value: "25+" },
    { label: "Years Experience", value: "5+" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-y border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="primary" className="inline-flex">
              <Award className="w-3.5 h-3.5" /> Why Choose Dajubhai
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Dedicated to Excellence, Reliability & Complete Satisfaction
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              At Dajubhai Cleaning & Property Services, we treat every home and
              workplace as if it were our own. We combine trained professionals,
              top-grade equipment, and safe eco-friendly materials to deliver
              unmatched cleanliness.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    Fully Insured & Police Checked
                  </h4>
                  <p className="text-xs text-slate-600">
                    Peace of mind knowing your space is handled by vetted,
                    trustworthy cleaners.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    Customized Service Plans
                  </h4>
                  <p className="text-xs text-slate-600">
                    One-off deep cleans, regular weekly visits, or customized
                    commercial schedules.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    Guaranteed Results
                  </h4>
                  <p className="text-xs text-slate-600">
                    If you are not 100% satisfied, we return within 48 hours to
                    re-clean for free.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <Card
                  key={i}
                  className="text-center p-8 bg-white border-slate-200/70 shadow-sm"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-600">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
