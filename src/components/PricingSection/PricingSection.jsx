// PricingSection.jsx
import { pricingPlans } from "../../utils/pricingData";
import PricingCard from "../common/PricingCard";

const PricingSection = () => {
  return (
   <div className = "min-h-[800px] bg-[#4B59F7] text-center p-8" >
        <h1 className="text-4xl font-bold mt-18"> OUR SERVICES </h1>

      <div className="flex justify-center items-center p-8 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
