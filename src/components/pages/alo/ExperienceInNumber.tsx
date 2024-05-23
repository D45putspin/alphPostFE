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
    >
      <ExperienceCardItemAbout
        counterNumber={25}
        text="Tokens"
        counterElement=""
        rightElement=" Million "
        color="#007BFF"
      />
      <ExperienceCardItemAbout
        counterNumber={60}
        text="Circulating supply"
        counterElement=""
        rightElement="%"

      />

      <ExperienceCardItemAbout
        counterNumber={7}
        text="to rewards"
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
        counterNumber={16}
        text="Vested in treasury "
        counterElement=""
        rightElement="%"
      />
      <ExperienceCardItemAbout
        counterNumber={12}
        text="Staking rewards "
        counterElement=""
        rightElement="%"
      />
    </motion.div>
  );
};

export default ExperienceInNumber;
