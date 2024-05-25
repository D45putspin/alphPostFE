"use client";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import { motion } from "framer-motion";
import { Airdrop, Be, DollarSquare, Instagram } from "iconsax-react";
import ProfileIcon from "../landing-one/ProfileIcon";
import LinkPrimary from "@/components/shared/LinkPrimary";
import { IconEyeDollar, IconWorldDollar } from "@tabler/icons-react";

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
        <IconWorldDollar />
        <p className=""></p>

      </div>
      <div style={{ marginTop: "30px" }}>
        <p className="heading-3">Token{" "}
          <span style={{ color: "#007BFF" }}>Sale</span>


        </p>
        <p style={{ marginTop: "20px" }}>
          <b>Initial price: </b>0.005
        </p>
        <p style={{ marginTop: "5px" }}>
          <b>Minimum raise:</b> 30k alph
        </p>
        <p style={{ marginTop: "5px" }}>
          <b>Maximum raise:</b> 50k alph
        </p>
        <p style={{ marginTop: "5px" }}>
          Buyers will be capped depending on the number of registered accounts.
        </p>

        <LinkPrimary linkText="overview on team funding and token allocations" link="https://alphpost.github.io/" />
      </div>
    </motion.div>
  );
};

export default ProfileCardAbout;
