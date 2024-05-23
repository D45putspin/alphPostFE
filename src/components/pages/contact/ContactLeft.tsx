"use client";
import { motion } from "framer-motion";
import { Call, Location, Send2 } from "iconsax-react";
import Link from "next/link";

const ContactLeft = () => {
  return (
    <div className="contact-section__left">
      <span className="heading-5 contact-sub-title">Contact Info</span>
      <h3 className="heading-2 section-title">Get In Touch</h3>
      <p className="textXL font-thin just-hello">
        Don’t be afraid! Just <br /> say hello
      </p>


    </div>
  );
};

export default ContactLeft;
