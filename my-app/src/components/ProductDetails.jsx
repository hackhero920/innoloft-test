import React from "react";
import PropTypes from "prop-types";
import Badge from "./common/Badge";
import tech from "../images/tech.svg";
import timer from "../images/timer.svg";
import knight from "../images/knight.svg";
import cost from "../images/cost.svg";

const ProductDetails = ({ product }) => {
  const { categories, businessModels, trl, investmentEffort } = product;

  return (
    <div className="flex flex-col border border-[#E5E7EB] rounded-lg px-4 py-6 gap-8">
      <h1 className="font-bold">Offer Details</h1>
      <div className="flex flex-col md:flex-row w-full gap-8">
        {/* Technology */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={tech} alt="" />
            <h1 className="text-base">Technology</h1>
          </div>
          <div className="flex flex-wrap gap-2 ml-6">
            {categories?.map((item) => (
              <Badge key={item.id} label={item.name} />
            ))}
          </div>
        </div>

        {/* Business model */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={knight} alt="" />
            <h1 className="text-base">Business Model</h1>
          </div>
          <div className="flex flex-wrap gap-2 ml-6">
            {businessModels?.map((item) => (
              <Badge key={item.id} label={item.name} />
            ))}
          </div>
        </div>
      </div>

      {/* TRL */}
      <div className="flex flex-col md:flex-row w-full gap-8">
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={timer} alt="" />
            <h1 className="text-base">TRL</h1>
          </div>
          <div className="flex flex-wrap gap-2 ml-6">
            <Badge label={trl?.name} />
          </div>
        </div>

        {/* COST */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={cost} alt="" />
            <h1 className="text-base">Cost</h1>
          </div>
          <div className="flex flex-wrap gap-2 ml-6">
            <Badge label={investmentEffort} />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetails;
