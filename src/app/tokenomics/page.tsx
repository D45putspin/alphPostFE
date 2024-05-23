import AboutTopLeftElement from "@/components/pages/alo/AboutTopLeftElement";
import AboutUsBody from "@/components/pages/alo/Tokenomics";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import aboutOne from "@/../public/image/logo-bio.png"
import TokenomicsBody from "@/components/pages/alo/Tokenomics";
import logoImgBurn from "@/../public/image/logo-burnpage.png"
export const metadata: Metadata = {
  title: "About Us"
};

const AboutUs = () => {
  return (
    <div className="position-relative overflow-hidden ">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <TokenomicsBody image={logoImgBurn} />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AboutUs;
