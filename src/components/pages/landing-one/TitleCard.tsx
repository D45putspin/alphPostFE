import titleCardShape from "@/../public/image/title-card-shape.png";
import Image from "next/image";
const TitleCard = () => {
  return (
    <div className="card-style title-card">
      <span className="title-card__title-sub-text heading-4">Task-based</span>
      <div className="title-card__title-text ">
        <h2 className="heading-2">Social Network</h2>
      </div>
      <Image
        src={titleCardShape}
        width={58}
        height={58}
        alt="Title Card Shape"
        className="title-card__shapes-image light-mood-image-shape"
      />
    </div>
  );
};

export default TitleCard;
