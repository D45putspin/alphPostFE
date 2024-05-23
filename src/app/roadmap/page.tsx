import AboutTopLeftElement from "@/components/pages/alo/AboutTopLeftElement";
import Footer from "@/components/pages/landing-one/Footer";
import RoadmapBody from "@/components/pages/roadmap/RoadmapBody";
import ServiceBottomRight from "@/components/pages/service/AboutTopLeftElement";

import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service",
    description: "",
};

const Services = () => {
    return (
        <div className="position-relative overflow-hidden">
            <div className="container">
                <Navbar />
                <LinkBackHome />
                <RoadmapBody />
                <Footer />
            </div>
            <AboutTopLeftElement />
            <ServiceBottomRight />
        </div>
    );
};

export default Services;
