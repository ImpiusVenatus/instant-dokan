import { Footer } from "@/components/Footer";
import { NavigationMenuBar } from "@/components/NavigationBar";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { Pricing } from "@/components/home/Pricing";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA]">
      <NavigationMenuBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
