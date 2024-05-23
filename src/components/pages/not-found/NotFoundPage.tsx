import notFoundImage from "@/../public/image/not-found.png";

import Image from "next/image";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="not-found-page">

      <h4 className="m-t-60px heading-2 text-center">Page Not Found.</h4>
      <p className="textXL font-thin text-center not-found-text">
        The page you are looking for doesn&apos;t exist or has been moved
      </p>

    </div>
  );
};

export default NotFoundPage;
