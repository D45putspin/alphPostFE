"use client";
import EllipseShapeLandingOneBottomRight from "@/components/pages/landing-one/EllipseShapeLandingOneBottomRight";
import EllipseShapeLandingOneTopLeft from "@/components/pages/landing-one/EllipseShapeLandingOneTopLeft";
import Footer from "@/components/pages/landing-one/Footer";
import LandingOneBody from "@/components/pages/landing-one/LandingOneBody";
import Navbar from "@/components/shared/Navbar";
import Snowfall from "@/components/shared/Snowfall";
import { Metadata } from "next";
import { useState, useEffect } from "react";



const UseIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width according to your definition of mobile
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return isMobile;
};


const page = () => {
  const isMobile = UseIsMobile();

  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LandingOneBody />
        <Footer />
        {!isMobile && <Snowfall />}
      </div>
      <EllipseShapeLandingOneTopLeft />
      <EllipseShapeLandingOneBottomRight />
    </div>
  );
};

export default page;
