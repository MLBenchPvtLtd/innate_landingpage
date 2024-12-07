import Collective from "@/components/Home/Collective";
import Confidence from "@/components/Home/Confidence";
import ContactHome from "@/components/Home/ContactHome";
import DesignAndBuild from "@/components/Home/DesignAndBuild";
import Hero from "@/components/Home/Hero";
import OurPartners from "@/components/Home/OurPartners";
import Philosophy from "@/components/Home/Philosophy";
import Reviews from "@/components/Home/Reviews/Index";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Collective />
      <Services />
      <DesignAndBuild />
      <div className="bg-white">
        <Philosophy />
        <Reviews />
        <Testimonials />
        <Confidence/>
      </div>
      <ContactHome />
      <OurPartners />
    </>
  );
}
