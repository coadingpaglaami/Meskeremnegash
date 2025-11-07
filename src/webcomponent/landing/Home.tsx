import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { MemberShipTiers } from "./MemberShipTiers";
import { Navbar } from "./NavBar";
import { PotentialSavings } from "./PotentialSavings";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PotentialSavings />
      <MemberShipTiers />
      <Footer />
    </>
  );
};
