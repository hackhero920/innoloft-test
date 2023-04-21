import { useEffect, useState } from "react";
import Button from "./common/Button";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, editProduct, fetchProduct } from "../store/productView";

const VideoEdit = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productView.product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newProduct = { ...product, [name]: value };
    dispatch(setProduct(newProduct));
  };

  // Handle the cancel button
  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(setProduct(product));
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
      className="flex flex-col w-full border border-[#E5E7EB] rounded-lg px-4 py-6 gap-8"
    >
      <h1 className="font-bold">Video</h1>
      <div className="flex flex-col w-full mx-auto gap-4">
        <input
          type="text"
          name="video"
          value={product.video}
          className="p-2 ring-1 rounded ring-[#E5E7EB]"
          onChange={handleInputChange}
        />
        <div className="text-right">
          <button className="px-4" onClick={handleCancel}>
            Cancel
          </button>
          <Button label="Save" />
        </div>
      </div>
    </form>
  );
};

export default VideoEdit;
