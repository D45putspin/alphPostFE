"use client";
import brandImage from "@/../public/image/brand-icon.png";
import marketingImage from "@/../public/image/marketing-icon.png";
import serviceShape from "@/../public/image/service-shape-14.png";
import shape11 from "@/../public/image/shape-11.png";
import shape29 from "@/../public/image/shape-29.png";
import shape53 from "@/../public/image/shape-53.png";
import uxDesignImage from "@/../public/image/ui-ux-icon.png";
import developmentImage from "@/../public/image/web-development-icon.png";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutEducation from "../alo/AboutEducation";
import AboutLetsWorks from "../alo/AboutLetsWorks";
import ProfileCardAbout from "../alo/ProfileCardAbout";

const ServiceBody = () => {
  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="service-body">
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-body__design service-card"
        >
          <h3 className="heading-3 card-title">
            <span className="title-top">Social</span>
            <span className="title-bottom">Network</span>
          </h3>

          <p className="m-t-40px textL font-thin card-text-color">
            We dont aim to be a substitute to any Social Network(at least in short term), we aim to be the ALEPHIUM ECOSYSTEM one,
            <br>
            </br>
            Sometimes We get our feeds so overwhelmed by the tokens we follow, we end up not seeing whats really important in alephium ecosystem.

            Engage with the community in a secure and vibrant space.
            <br></br>Use your NFTs as profile pictures, connect with friends, and share posts that are of the interest of the Alephium community.
          </p>
          <Image
            src={shape11}
            width={99}
            height={99}
            alt="Shape 11"
            className="img-fluid shape-image-service light-mood-image-shape"
          />
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-body__marketing service-card"
        >
          <h3 className="heading-3 card-title">
            <span className="title-top">Task-based</span>
            <span className="title-bottom"> Marketplace</span>
          </h3>

          <p className="m-t-40px textL font-thin card-text-color">
            Unlock your inner creativity and participate in tasks that will reward you.
            A place where ORGS can find skilled individuals.

          </p>
          <Image
            src={serviceShape}
            width={99}
            height={99}
            alt="Service Shape"
            className="img-fluid shape-image-marketing light-mood-image-shape"
          />
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-body__brand-identity service-card"
        >
          <h3 className="heading-3 card-title">
            <span className="title-top">Whats in</span>
            <span className="title-bottom">Scope</span>
          </h3>

          <p className="m-t-40px textL font-thin card-text-color">
            We want to Add as much value to the alephium community as possible, so we aim to incorporate all kinds of social tools as possible.
            name it, we will build it 😎
          </p>
          <Image
            src={shape29}
            width={99}
            height={99}
            alt="Service Shape"
            className="img-fluid shape-image-brand light-mood-image-shape"
          />
        </motion.div>

      </div>

    </div>
  );
};

export default ServiceBody;
