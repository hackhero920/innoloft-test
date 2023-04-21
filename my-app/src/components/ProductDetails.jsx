import Badge from "./common/Badge";
import tech from "../images/tech.svg";
import trl from "../images/trl.svg";
import model from "../images/model.svg";
import cost from "../images/cost.svg";

const ProductDetails = ({ product }) => {
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
            {product.categories?.map((item) => (
              <Badge label={item.name} />
            ))}
          </div>
        </div>

        {/* Business model */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={model} alt="" />
            <h1 className="text-base">Business Model</h1>
          </div>
          <div className="flex flex-wrap gap-2 ml-6">
            {product.businessModels?.map((item) => (
              <Badge label={item.name} />
            ))}
          </div>
        </div>
      </div>

      {/* TRL */}
      <div className="flex flex-col md:flex-row w-full gap-8">
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={trl} alt="" />
            <h1 className="text-base">TRL</h1>
          </div>
          <div className="flex flex-wrap gap-2 ml-6">
            <Badge label={product.trl?.name} />
          </div>
        </div>

        {/* COST */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={cost} alt="" />
            <h1 className="text-base">Cost</h1>
          </div>
          <div className="flex flex-wrap gap-2 ml-6">
            {product.categories?.map((item) => (
              <Badge label={item.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
