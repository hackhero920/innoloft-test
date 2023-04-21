import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { editProduct } from "../services/productService";
import Button from "./common/Button";

const VideoEdit = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle the cancel button
  const handleCancel = (e) => {
    setCurrentProduct(product);
  };

  // Handles the PUT request
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await editProduct(currentProduct.id, currentProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCurrentProduct(product);
  }, [product]);

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
          value={currentProduct.video}
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
