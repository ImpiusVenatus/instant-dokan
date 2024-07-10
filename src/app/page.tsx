import { Footer } from "@/components/Footer";
import { NavigationMenuBar } from "@/components/NavigationBar";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { Onboard } from "@/components/home/Onboard";
import { Pricing } from "@/components/home/Pricing";
import Services from "@/components/home/Services";
import { Testimonial } from "@/components/home/Testimonial";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA]">
      <NavigationMenuBar />
      <Hero />
      <Features />
      <Services />
      <Testimonial />
      <Pricing />
      <Onboard />
      <Footer />
    </main>
  );
}
