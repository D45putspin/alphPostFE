import ReactCounterUp from "@/components/shared/ReactCounterUp";

const ExperienceCardItemAbout = ({
  counterNumber,
  counterElement,
  rightElement,
  decimals,
  text,
  color
}: {
  counterNumber: number;
  counterElement?: string;
  rightElement?: string;
  decimals?: number;
  text: string;
  color?: string;
}) => {
  return (
    <div className="experience-in-number__item">
      <p className="experience-in-number__item-number heading-1" style={{ color: color && color }}>
        {counterElement}



        <ReactCounterUp end={counterNumber} decimals={decimals} />
        {rightElement}
      </p>
      <p className="textL experience-in-number__item-text ">{text}</p>
    </div >
  );
};

export default ExperienceCardItemAbout;
