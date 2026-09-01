import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { PropertyManagementPage } from "./pages/PropertyManagementPage";
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
