import Collective from "@/components/Home/Collective";
import ContactHome from "@/components/Home/ContactHome";
import DesignAndBuild from "@/components/Home/DesignAndBuild";
import Hero from "@/components/Home/Hero";
import OurPartners from "@/components/Home/OurPartners";
import Services from "@/components/Home/Services";


export default function Home() {
  return (
   <>
 <Hero/>
 <Collective/>
 <Services/>
 <DesignAndBuild/>
 <ContactHome/>
 <OurPartners/>
   </>
  );
}
