import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { PropertyManagementPage } from "./pages/PropertyManagementPage";
import { OurWorkPage } from "./pages/OurWorkPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 overflow-x-hidden w-full">
        <Navbar />
        <main className="flex-grow overflow-x-hidden w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/property-management" element={<PropertyManagementPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/work" element={<Navigate to="/our-work" replace />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
