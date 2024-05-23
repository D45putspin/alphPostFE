"use client";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import { motion } from "framer-motion";
import { Airdrop, Be, Instagram } from "iconsax-react";
import ProfileIcon from "../landing-one/ProfileIcon";

const ProfileCardAbout = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className=" about-card p-32px profile-card"
    >
      <div className="profile-icons">
        <Airdrop />
        <p className="">Community </p>

      </div>
      <div>
        <p className="heading-3">What is a project without its{" "}
          <span style={{ color: "#007BFF" }}> community</span>?
          We want to make sure you stick around,
          so we plan to distribute tokens with you guys,
          via <span style={{ color: "#007BFF" }}>Airdrops</span> /
          <span style={{ color: "#007BFF" }}>Contests</span> /
          <span style={{ color: "#007BFF" }}>Games</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileCardAbout;
