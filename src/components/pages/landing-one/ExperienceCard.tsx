"use client";
import { motion } from "framer-motion";
import ExperienceCardItem from "./ExperienceCardItem";

const ExperienceCard = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="card-style experience-card"
    >
      <span className="title-card-teamxp heading-4">Team in numbers</span>
      <ExperienceCardItem
        counterNumber={6}
        text="team members"
        counterElement=""
        counterElementAfter=""
      />
      <ExperienceCardItem
        counterNumber={50}
        text="summed experience in development "
        counterElement="+"
        counterElementAfter="years"
      />
      <ExperienceCardItem
        counterNumber={5}
        text="Experience in crypto"
        counterElement="+"
        counterElementAfter="years"
      />
    </motion.div>
  );
};

export default ExperienceCard;
