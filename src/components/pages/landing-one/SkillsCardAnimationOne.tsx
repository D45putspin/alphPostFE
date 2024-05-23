"use client";
import { IconBrandWebflow } from "@tabler/icons-react";
import { Figma, Framer, Illustrator, Photoshop, Xd } from "iconsax-react";

const sliderOneData = [
  "ALPHPAD 🚀",
  "ALPH.PRO 🛠️",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
  "More to come 🔥",
  "ALPH.PRO 🛠️",
  "ALPHPAD 🚀",
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
