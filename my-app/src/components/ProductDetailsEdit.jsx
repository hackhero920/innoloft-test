import React from "react";
import PropTypes from "prop-types";
import tech from "../images/tech.svg";
import timer from "../images/timer.svg";
import cost from "../images/cost.svg";
import knight from "../images/knight.svg";
import { useEffect } from "react";
import Button from "./common/Button";
import BadgeEdit from "./common/BadgeEdit";
import { useDispatch, useSelector } from "react-redux";
import {
  saveProduct,
  setProduct,
  setCategory,
  setBusinessModel,
  fetchTrl,
} from "../store/productView";

const ProductDetailsEdit = ({ product }) => {
  const { categories, investmentEffort, businessModels } = product;
  const dispatch = useDispatch();

  const { trl, category, model } = useSelector((state) => state.productView);

  // Handles the Input Change
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
            categories: [...categories, newCategory],
          })
        );
        dispatch(setCategory(""));
      }

      if (name === "businessModels") {
        const newBusinessModel = {
          id: Date.now(),
          name: value.trim(),
        };

        dispatch(
          setProduct({
            ...product,
            businessModels: [...businessModels, newBusinessModel],
          })
        );
        dispatch(setBusinessModel(""));
      }

      if (name === "trl") {
        const selectedTrl = trl.find((item) => item.name === value);
        const newProduct = {
          ...product,
          trl: { ...product.trl, name: value, id: selectedTrl.id },
        };
        dispatch(setProduct(newProduct));
      }

      if (name === "investmentEffort") {
        const newProduct = {
          ...product,
          investmentEffort: e.target.value,
        };
        dispatch(setProduct(newProduct));
      }
    }
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
          trl: { ...newProduct.trl, name: "", id: "" },
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
    dispatch(saveProduct(product));
  };

  useEffect(() => {
    dispatch(fetchTrl());
  }, [product]);

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
              value={category}
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
            {categories?.map((item) => (
              <BadgeEdit
                key={item.id}
                onClick={(e) => handleRemove(e, item.id, "categories")}
                label={item.name}
              />
            ))}
          </div>
        </div>

        {/* Business model */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex gap-2">
            <img src={knight} alt="" />
            <h1 className="text-base">Business Model</h1>
          </div>

          <div className="flex ">
            <input
              type="text"
              name="businessModels"
              value={model}
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
            {businessModels?.map((item) => (
              <BadgeEdit
                key={item.id}
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
            <img src={timer} alt="" />
            <h1 className="text-base">TRL</h1>
          </div>

          <select
            className="p-2 rounded ring-1 ring-[#E5E7EB] focus:outline-none"
            name="trl"
            onChange={handleInputChange}
          >
            <option value="">...</option>
            {trl.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name.length > 10
                  ? item.name.substr(0, 35) + "..."
                  : item.name}
              </option>
            ))}
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
              label={investmentEffort}
            />
          </div>
        </div>
      </div>
      <div className="text-right">
        <Button label="Save" />
      </div>
    </form>
  );
};

ProductDetailsEdit.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetailsEdit;
