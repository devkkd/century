import BestSellers from "@/components/Bestsellers";
import Collections from "@/components/Collections";
import HeroSection from "@/components/Herosection";
import HomeBuildingSection from "@/components/HomeBuildingSection";
import OurCraft from "@/components/Ourcraft";
import Philosophy from "@/components/Philosophy";
import TestimonialsSection from "@/components/Testimonialssection";
import WhyBuyers from "@/components/Whybuyers";



export default function Page() {
  return (
    <main>
    <HeroSection />
    <Philosophy />
    <HomeBuildingSection />
    <Collections />
    <OurCraft />
       <WhyBuyers />
    <BestSellers />
    <TestimonialsSection />
 
   
    </main>
  );
}