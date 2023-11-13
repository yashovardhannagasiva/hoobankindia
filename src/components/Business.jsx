import React from "react";
import { features } from "../constants";
import Button from "./Button";
import FeedBackCard from "./FeedBackCard";
const FeatureCard = ({ index, icon, title, content }) => (
  <div
    className={`flex flex-row rounded-3xl feature-card ${
      index != features.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    <div className="w-16 h-16 rounded-full flexCenter bg-dimBlue">
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain " />
    </div>
    <div className="flex-1 flex flex-col m1-3">
      <h4 className="font-poppins font-semibold text-white text-lg leading-6 mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-base leading-6 mb-1">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section id="features" className="section flex-wrap">
      <div className="sectionInfo">
        <h2 className="heading2">
          You do the business <br className="sm:block hidden" /> we'll handle
          the money
        </h2>
        <p className="paragraph max-w-[470px] ">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
        </p>
        
        <Button value="Get Started" styles="mt-10" />
      </div>
      <div className="sectionImg flex-col">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
