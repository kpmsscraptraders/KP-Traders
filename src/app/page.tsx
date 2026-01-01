import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AchievementsSection } from "@/sections/achievements";
import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { HeroSection } from "@/sections/hero";
import { ProductsSection } from "@/sections/products";
import { ServicesSection } from "@/sections/services";
import { TrustedSection } from "@/sections/trusted";
import { GallerySection } from "@/sections/gallery";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustedSection />
        <ProductsSection />
        <GallerySection />
        <ServicesSection />
        <AchievementsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}


