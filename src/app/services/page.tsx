import ReviewsSlider from "@/components/Home/Reviews/Slider";
import Testimonials from "@/components/Home/Testimonials";
import Collective from "@/components/Services/Collective";
import Consultation from "@/components/Services/Consultation";
import HeroService from "@/components/Services/HeroService";
import LatestProjects from "@/components/Services/LatestProjects";
import Marquee from "@/components/Services/Marquee";
import OurProcess from "@/components/Services/OurProcess";
import React from "react";

const ServicesPage = () => {
  return (
    <div>
      <HeroService />
      <div className="bg-white">
        <Collective />
        <LatestProjects />
        <Testimonials />
        <OurProcess />
        <Marquee  />
        <ReviewsSlider />
        <Consultation />
      </div>
    </div>
  );
};

export default ServicesPage;
