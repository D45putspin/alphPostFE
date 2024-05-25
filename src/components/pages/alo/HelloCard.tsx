"use client";
import image from "@/../public/image/shape-11.png";
import { motion } from "framer-motion";
import Image from "next/image";

const HelloCard = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card card-hello"
    >
      <span className="heading-3">Our</span>
      <h2 className="heading-3">Token</h2>

      <p className="text">

        <br></br>
        $POST will power the ALPHpost ecosystem.
        <br></br>
        <b>Join the Fun:</b>

        Use $POST to engage with the community and unlock new features.
        <br></br>
        <b>Create Value: </b>
        Each $POST you spend is burned, making the remaining tokens more valuable and scarce.
        <br></br>

      </p>
      <Image
        src={image}
        width={99}
        height={99}
        alt="Shape"
        className="card-hello__shape light-mood-image-shape"
      />
    </motion.div>
  );
};

export default HelloCard;
