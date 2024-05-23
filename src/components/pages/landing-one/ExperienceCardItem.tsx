import ReactCounterUp from "@/components/shared/ReactCounterUp";

const ExperienceCardItem = ({
  counterNumber,
  counterElement,
  counterElementAfter,
  decimals,
  text,
}: {
  counterNumber: any;
  counterElement?: string;
  decimals?: number;
  counterElementAfter?: string;
  text: string;
}) => {
  return (
    <div className="experience-card__item">
      <p className="experience-card__item-number display-4">
        {counterElement}
        <ReactCounterUp end={counterNumber} decimals={decimals} />
        {counterElementAfter}
      </p>
      <p className="experience-card__item-text textM">{text}</p>
    </div>
  );
};

export default ExperienceCardItem;
