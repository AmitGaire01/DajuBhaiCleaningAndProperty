import React, { useState, useEffect } from "react";
import { Clock, ArrowRight, Mail } from "lucide-react";
import { Container } from "../components/layout/Container";

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const categories = [
    "All Articles",
    "Cleaning Tips",
    "Property Maintenance",
    "Industry News",
    "FAQs",
  ];

  const featuredArticle = {
    title: "Top 10 Property Maintenance Tips for 2024",
    category: "PROPERTY MAINTENANCE",
    readTime: "8 min read",
    description:
      "Stay ahead of the curve with our comprehensive guide to maintaining commercial properties. From seasonal HVAC checks to high-traffic floor care, these preventative strategies will save you time and preserve asset value.",
    image: "/blog-featured-office.png",
    author: {
      name: "Sarah Jenkins",
      role: "Director of Operations",
      avatar: "/sarah-jenkins.jpg",
    },
  };

  const latestPosts = [
    {
      title: "The Science of Microfiber: Why It's Superior for Dusting",
      category: "Cleaning Tips",
      date: "March 12, 2024",
      readTime: "4 min read",
      description:
        "Discover the structural differences that make microfiber cloths the industry standard for trapping dust and allergens compared to traditional cloths.",
      image: "/blog-microfiber.jpg",
    },
    {
      title: "New Eco-Friendly Standards Shaping the Cleaning Industry",
      category: "Industry News",
      date: "March 05, 2024",
      readTime: "6 min read",
      description:
        "A deep dive into the recent EPA guidelines and how shifting to green cleaning solutions benefits both the environment and occupant wellness.",
      image: "/blog-eco-standards.jpg",
    },
    {
      title: "How Often Should You Schedule Commercial Carpet Cleaning?",
      category: "FAQs",
      date: "February 28, 2024",
      readTime: "3 min read",
      description:
        "Answering one of our most common questions. We break down the factors that dictate cleaning frequency, from foot traffic to moisture exposure.",
      image: "/blog-carpet-faq.jpg",
    },
  ];

  const filteredPosts =
    activeCategory === "All Articles"
      ? latestPosts
      : latestPosts.filter((post) => post.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-slate-900 pb-20">
      {/* 1. Hero Header Banner (Full Width Edge-to-Edge) */}
      <section className="relative w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] flex items-center bg-[#002F54] overflow-hidden">
        {/* Leaf with Dew Background */}
        <img
          src="/blog-hero-dew.png"
          alt="Insights, Tips & Industry News"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Ambient Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002F54]/95 via-[#002F54]/80 to-transparent" />

        <Container className="relative z-10 py-16 sm:py-20 lg:py-24 max-w-[1248px]">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#D5EDB7] text-[#2D6B23] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 font-heading">
              OUR JOURNAL
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Insights, Tips & Industry News
            </h1>

            <p className="text-white/85 text-sm sm:text-base lg:text-lg mt-4 font-normal leading-relaxed">
              Expert advice and the latest updates from the forefront of
              professional cleaning and property maintenance.
            </p>
          </div>
        </Container>
      </section>

      <Container className="max-w-[1248px] pt-10 sm:pt-14 space-y-12">
        {/* 2. Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#002F54] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3. Featured Article */}
        {(activeCategory === "All Articles" ||
          activeCategory === "Property Maintenance") && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl font-heading">
              <span className="text-[#2D6B23]">★</span>
              <h2>Featured Article</h2>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 grid grid-cols-1 lg:grid-cols-12 group hover:shadow-xl transition-all duration-300">
              {/* Left Photo */}
              <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[380px] overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#D5EDB7] text-[#2D6B23] font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight group-hover:text-[#1A4670] transition-colors">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {featuredArticle.description}
                  </p>
                </div>

                {/* Author footer */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-2xs"
                    />
                    <div>
                      <div className="font-bold text-slate-900 text-xs sm:text-sm font-heading">
                        {featuredArticle.author.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {featuredArticle.author.role}
                      </div>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-slate-100 text-[#002F54] flex items-center justify-center group-hover:bg-[#002F54] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Latest Posts Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
            Latest Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  {/* Photo Container with Floating Category Badge */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-800 font-bold text-[11px] px-3 py-1 rounded-full shadow-xs">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-2.5">
                    <div className="text-[11px] font-semibold text-slate-400">
                      {post.date} • {post.readTime}
                    </div>

                    <h3 className="font-bold text-slate-900 text-base sm:text-lg font-heading leading-snug group-hover:text-[#1A4670] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2D6B23] group-hover:translate-x-1 transition-transform">
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Stay Spotless Newsletter Card */}
        <div className="bg-[#E5EBF2]/80 rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200/70 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              Stay Spotless
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Join our newsletter for the latest tips, industry news, and
              exclusive offers delivered straight to your inbox.
            </p>
          </div>

          {/* Subscribe Form */}
          <form
            onSubmit={handleSubscribe}
            className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative w-full sm:w-80">
              <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6B23]/20 focus:border-[#2D6B23]"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#2D6B23] hover:bg-[#23581a] active:scale-[0.98] text-white font-bold text-sm px-7 py-3 rounded-xl shadow-md transition cursor-pointer shrink-0"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
