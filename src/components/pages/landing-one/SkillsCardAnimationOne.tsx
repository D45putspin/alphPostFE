"use client";
import { IconBrandWebflow } from "@tabler/icons-react";
import { Figma, Framer, Illustrator, Photoshop, Xd } from "iconsax-react";
import Image from "next/image";
import ANS from "@/../public/image/LOGO_ANS.svg";
const sliderOneData = [
  "ALPHPAD 🚀",
  "ALPH.PRO 🛠️",
  "More to come 🔥",
  "ANS",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "ANS",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "ANS",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "ANS",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "ANS",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "ANS",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "ANS",
  "More to come 🔥",

];

const SkillsCardAnimationOne = () => {

  return (
    <div className="card-style skills-card">
      <span className="heading-4 skills-card__title">Partners</span>
      <div className="skills-card__slider-aria ">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {sliderOneData.map((item, i) => (
                  <span key={i} className="skills-card__slider-text">
                    {item}
                    {item === "ANS" && (
                      <Image src={ANS} alt="ANS Logo" width={20} height={20} />
                    )}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SkillsCardAnimationOne;
