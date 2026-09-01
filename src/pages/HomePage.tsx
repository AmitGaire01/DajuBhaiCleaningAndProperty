import React from "react";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { Testimonials } from "../components/sections/Testimonials";

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfter />
      <Testimonials />
    </>
  );
};

export default HomePage;
