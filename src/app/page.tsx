import SiteNavbar from "../components/SiteNavbar";
import AboutSection from "../components/sections/AboutSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HeroSection from "../components/sections/HeroSection";
import SiteFooter from "../components/sections/SiteFooter";
import { GAME_CARDS } from "../components/GameCard";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gamerdex.app/#organization",
      name: "GamerDex",
      url: "https://gamerdex.app",
      logo: "https://gamerdex.app/gamerdex-logo.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://gamerdex.app/#website",
      name: "GamerDex",
      url: "https://gamerdex.app",
      publisher: { "@id": "https://gamerdex.app/#organization" },
    },
    ...GAME_CARDS.map((card) => ({
      "@type": "SoftwareApplication",
      name: card.title.join(" "),
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      url: card.href,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    })),
  ],
};

export default function Home() {
  return (
    <div className="dark:bg-surface-dark min-h-screen bg-gray-50 text-gray-900 dark:text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNavbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <SiteFooter />
    </div>
  );
}
