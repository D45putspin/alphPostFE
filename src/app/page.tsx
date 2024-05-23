import EllipseShapeLandingOneBottomRight from "@/components/pages/landing-one/EllipseShapeLandingOneBottomRight";
import EllipseShapeLandingOneTopLeft from "@/components/pages/landing-one/EllipseShapeLandingOneTopLeft";
import Footer from "@/components/pages/landing-one/Footer";
import LandingOneBody from "@/components/pages/landing-one/LandingOneBody";
import Navbar from "@/components/shared/Navbar";
import Snowfall from "@/components/shared/Snowfall";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home One ",

};

const page = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LandingOneBody />
        <Footer />
        <Snowfall />
      </div>
      <EllipseShapeLandingOneTopLeft />
      <EllipseShapeLandingOneBottomRight />
    </div>
  );
};

export default page;
