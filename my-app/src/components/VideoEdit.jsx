import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setProduct } from "../store/productView";

const VideoEdit = ({ product }) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newProduct = { ...product, [name]: value };
    dispatch(setProduct(newProduct));
  };

  return (
    <div className="flex flex-col w-full border border-[#E5E7EB] rounded-lg px-4 py-6 gap-8">
      <h1 className="font-bold">Video</h1>
      <div className="flex flex-col w-full mx-auto gap-4">
        <input
          type="text"
          name="video"
          value={product.video || ""}
          className="p-2 ring-1 rounded ring-[#E5E7EB]"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

VideoEdit.propTypes = {
  product: PropTypes.object.isRequired,
};

export default VideoEdit;
