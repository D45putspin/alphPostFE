import bioImage from "@/../public/image/logo-bio.png";
import bioRoundImage from "@/../public/image/bio-round-text.png";

import LinkPrimary from "@/components/shared/LinkPrimary";
import Image from "next/image";

const BioCard = () => {
  return (
    <div className="card-style d-flex flex-column bio-card">
      <div className="bio-rounded-image">
        <Image
          src={bioRoundImage}
          width={204}
          height={204}
          alt="Bio rounded Image"
          className="bio-rounded-text-image light-mood-image-shape"
        />
        <Image
          src={bioImage}
          width={158}
          height={158}
          alt="Bio Image"
          className="bio-image position-absolute"
        />
      </div>

      <LinkPrimary linkText="All About us" link="/allAbout" />
    </div>
  );
};

export default BioCard;
