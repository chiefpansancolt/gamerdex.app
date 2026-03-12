import SiteNavbar from "../components/SiteNavbar";
import AboutSection from "../components/sections/AboutSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HeroSection from "../components/sections/HeroSection";
import SiteFooter from "../components/sections/SiteFooter";

export default function Home() {
  return (
    <div className="dark:bg-surface-dark min-h-screen bg-gray-50 text-gray-900 dark:text-gray-100">
      <SiteNavbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <SiteFooter />
    </div>
  );
}
