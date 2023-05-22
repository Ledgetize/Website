import { NavLink } from "react-router-dom";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row justify-between m-9 p-3 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } text-center`}
  >
    <div className="flex-1 flex flex-col">
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[23px] mb-2 text-gradient">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`flex`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
