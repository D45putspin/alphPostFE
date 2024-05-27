"use client";
import { motion } from "framer-motion";
import ExperienceCardItemAbout from "./ExperienceCardItemAbout";

const ExperienceInNumber = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className=" experience-in-number"
      style={{ marginTop: "100px" }}
    >
      <ExperienceCardItemAbout
        counterNumber={25}
        text="Tokens"
        counterElement=""
        rightElement=" Million"
        color="#007BFF"
      />
      <ExperienceCardItemAbout
        counterNumber={40}
        text="Sell"
        counterElement=""
        rightElement="%"

      />

      <ExperienceCardItemAbout
        counterNumber={5}
        text="to community rewards"
        counterElement=""
        rightElement="%"
      />
      <ExperienceCardItemAbout
        counterNumber={5}
        text="Marketing"
        counterElement=""
        rightElement="%"
      />
      <ExperienceCardItemAbout
        counterNumber={20}
        text="Vested in treasury "
        counterElement=""
        rightElement="%"
      />
      <ExperienceCardItemAbout
        counterNumber={30}
        text="Liquidty "
        counterElement=""
        rightElement="%"
      />
    </motion.div>
  );
};

export default ExperienceInNumber;
