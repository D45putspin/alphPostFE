import AboutTopLeftElement from "@/components/pages/alo/AboutTopLeftElement";
import NotFoundPage from "@/components/pages/not-found/NotFoundPage";
import ServiceBottomRight from "@/components/pages/service/AboutTopLeftElement";

const NotFound = () => {
  return (
    <>
      <NotFoundPage />
      <AboutTopLeftElement />
      <ServiceBottomRight />
      <div className="bg-bgColorOne"></div>
    </>
  );
};

export default NotFound;
