import React, { useEffect } from "react";
import { Contact } from "../components/sections/Contact";

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-2 bg-[#002F54] min-h-screen">
      <Contact />
    </div>
  );
};

export default ContactPage;
