import getInTouchShape from "@/../public/image/get-in-touch-shape.png";
import LinkPrimary from "@/components/shared/LinkPrimary";
import Image from "next/image";

const GetInTouchCard = () => {
  return (
    <div className="card-style get-in-touch-card">

      <p className="heading-4">Partner up!!</p>


      <LinkPrimary
        linkText="Get in Touch"
        link="/contact"
        className="get-in-touch-card__link"
      />
      <Image
        src={getInTouchShape}
        width={32}
        height={32}
        alt="Get In Touch Shape"
        className="get-in-touch-card__image-shape scale-up-down light-mood-image-shape"
      />
    </div>
  );
};

export default GetInTouchCard;
