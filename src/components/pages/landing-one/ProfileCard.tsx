import LinkPrimary from "@/components/shared/LinkPrimary";
import { Be, Instagram } from "iconsax-react";
import ProfileIcon from "./ProfileIcon";
import { IconBrandTelegram, IconBrandTwitter } from "@tabler/icons-react";

const ProfileCard = () => {
  return (
    <div className="card-style profile-card">
      <div className="title-card__title-text ">
        <h2 className="heading-2">Social Links</h2>
      </div>
      <div className="profile-icons" >

        <ProfileIcon icon={<IconBrandTwitter size="40" />} socialLink="https://x.com/alphpost" />
        <ProfileIcon icon={<IconBrandTelegram size="40" />} socialLink="https://t.me/alphPost" />
      </div>

    </div>
  );
};

export default ProfileCard;
