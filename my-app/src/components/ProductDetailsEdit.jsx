import tech from "../images/tech.svg";
import trl from "../images/trl.svg";
import model from "../images/model.svg";
import cost from "../images/cost.svg";
import { useEffect } from "react";
import Button from "./common/Button";
import BadgeEdit from "./common/BadgeEdit";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  setProduct,
  setCategory,
  setBusinessModel,
} from "../store/productView";

const ProductDetailsEdit = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productView.product);
  const category = useSelector((state) => state.productView.category);
  const model = useSelector((state) => state.productView.model);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(value);

    if (value) {
      if (name === "categories") {
        const newCategory = {
          id: Date.now(),
          name: value.trim(),
        };

        dispatch(
          setProduct({
            ...product,
            categories: [...product.categories, newCategory],
          })
        );

        e.target.value = "";
      }

      if (name === "businessModels") {
        const newBusinessModel = {
          id: Date.now(),
          name: value.trim(),
        };

        dispatch(
          setProduct({
            ...product,
            businessModels: [...product.businessModels, newBusinessModel],
          })
        );

        e.target.value = "";
      }

      if (name === "trl") {
        const newProduct = {
          ...product,
          trl: { ...product.trl, name: e.target.value },
        };
        dispatch(setProduct(newProduct));
        e.target.value = "";
      }

      if (name === "investmentEffort") {
        const newProduct = {
          ...product,
          investmentEffort: e.target.value,
        };
        dispatch(setProduct(newProduct));
        e.target.value = "";
      }
    }
  };

  // Handle the cancel button
  const handleCancel = (e) => {
    dispatch(setProduct(product));
  };

  //   Deletes the Offer Details
  const handleRemove = (e, id, detail) => {
    e.preventDefault();
    let newProduct = { ...product };

    switch (detail) {
      case "businessModels":
        newProduct = {
          ...newProduct,
          businessModels: newProduct.businessModels.filter(
            (model) => model.id !== id
          ),
        };
        break;

      case "categories":
        newProduct = {
          ...newProduct,
          categories: newProduct.categories.filter(
            (category) => category.id !== id
          ),
        };
        break;

      case "trl":
        newProduct = {
          ...newProduct,
          trl: { ...newProduct.trl, name: "" },
        };
        break;

      case "investmentEffort":
        newProduct = {
          ...newProduct,
          investmentEffort: "",
        };
        break;

      default:
        break;
    }

    dispatch(setProduct(newProduct));
  };

  // Handles the PUT request
  const handleSave = async (e) => {
    e.preventDefault();
    dispatch(editProduct(product));
  };

  useEffect(() => {
    dispatch(setProduct(product));
  }, [dispatch, product]);

  return (
    <form
      onSubmit={handleSave}
      className="flex flex-col border border-[#E5E7EB] rounded-lg px-4 py-6 gap-8"
    >
      <h1 className="font-bold">Offer Details</h1>
      <div className="flex flex-col md:flex-row w-full gap-16">
        {/* Technology */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={tech} alt="" />
            <h1 className="text-base">Technology</h1>
          </div>
          <div className="flex ">
            <input
              type="text"
              name="categories"
              onChange={(e) => dispatch(setCategory(e.target.value))}
              className="p-2 rounded ring-1 ring-[#E5E7EB] focus:outline-none"
            />
            <button
              onClick={handleInputChange}
              name="categories"
              value={category}
              className="p-2 rounded ring-1 ring-[#E5E7EB]"
            >
              +
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.categories?.map((item) => (
              <BadgeEdit
                onClick={(e) => handleRemove(e, item.id, "categories")}
                label={item.name}
              />
            ))}
          </div>
        </div>

        {/* Business model */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={model} alt="" />
            <h1 className="text-base">Business Model</h1>
          </div>

          <div className="flex ">
            <input
              type="text"
              name="businessModels"
              onChange={(e) => dispatch(setBusinessModel(e.target.value))}
              className="p-2 rounded ring-1 ring-[#E5E7EB] focus:outline-none"
            />
            <button
              onClick={handleInputChange}
              name="businessModels"
              value={model}
              className="p-2 rounded ring-1 ring-[#E5E7EB]"
            >
              +
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.businessModels?.map((item) => (
              <BadgeEdit
                onClick={(e) => handleRemove(e, item.id, "businessModels")}
                label={item.name}
              />
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
          Copy code
          <select
            className="p-2 rounded ring-1 ring-[#E5E7EB] focus:outline-none"
            name="trl"
            onChange={handleInputChange}
            id="trl"
          >
            <option value="">...</option>
            <option value="TRL 1">TRL 1</option>
            <option value="TRL 2">TRL 2</option>
            <option value="TRL 3">TRL 3</option>
            <option value="TRL 4">TRL 4</option>
            <option value="TRL 5">TRL 5</option>
            <option value="TRL 6">TRL 6</option>
            <option value="TRL 7">TRL 7</option>
            <option value="TRL 8">TRL 8</option>
            <option value="TRL 9">TRL 9</option>
          </select>
          <div className="flex flex-wrap gap-2">
            <BadgeEdit
              onClick={(e) => handleRemove(e, null, "trl")}
              label={product.trl?.name}
            />
          </div>
        </div>

        {/* COST */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={cost} alt="" />
            <h1 className="text-base">Cost</h1>
          </div>

          <select
            className="p-2 rounded ring-1 ring-[#E5E7EB] focus:outline-none"
            name="investmentEffort"
            onChange={handleInputChange}
            id="investmentEffort"
          >
            <option value="">...</option>
            <option value="< 50,000 €">{`< 50,000 €`}</option>
            <option value="< 75,000 €">{`< 75,000 €`}</option>
            <option value="< 100,000 €">{`< 100,000 €`}</option>
          </select>

          <div className="flex flex-wrap gap-2">
            <BadgeEdit
              onClick={(e) => handleRemove(e, null, "investmentEffort")}
              label={product.investmentEffort}
            />
          </div>
        </div>
      </div>
      <div className="text-right">
        <button className="px-4" onClick={handleCancel}>
          Cancel
        </button>
        <Button label="Save" />
      </div>
    </form>
  );
};

export default ProductDetailsEdit;
