"use client";
import { motion } from "framer-motion";
import { Bill, Import } from "iconsax-react";
import MyExperienceItem from "./MyExperienceItem";

const AboutMyExperience = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card my-experience p-32px"
    >
      <div className="d-flex align-items-center justify-content-between">
        {" "}
        <p className="heading-4">$POST utility</p>
        <p className="heading-8">(every interaction will burn $POST)</p>

      </div>

      <div className="my-experience__content">
        <MyExperienceItem
          time="Orgs"
          title="Task creation"
          company=""
        />
        <MyExperienceItem
          time="Individuals"
          title="Boost Posts"
          company=""
        />
        <MyExperienceItem
          time="Individuals"
          title="Acess to Beta/Paid Features"
          company=""
        />
        <MyExperienceItem
          time="Individuals"
          title="🤫 coming soon"
          company=""
        />
      </div>
    </motion.div>
  );
};

export default AboutMyExperience;
