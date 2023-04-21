import Map from "../components/common/Map";
import LogoSecondary from "../components/common/LogoSecondary";
import { CiLocationOn } from "react-icons/ci";
import patent from "../images/patent.svg";
import remove from "../images/remove.svg";
import { useEffect, useState } from "react";
import { editProduct } from "../services/productService";
import Button from "./common/Button";

const ProductInfoEdit = ({ product, address, description }) => {
  const [currentProduct, setCurrentProduct] = useState({});

  let name = currentProduct.user
    ? `${currentProduct.user.firstName} ${currentProduct.user.lastName}`
    : "";

  // Edits the Product
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

  const handleImageDelete = (e) => {
    setCurrentProduct((prevProduct) => ({
      ...prevProduct,
      picture: "",
    }));
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
    <div>
      <form
        onSubmit={handleSave}
        className="flex flex-col md:flex-row  border border-[#E5E7EB] rounded-lg relative overflow-hidden"
      >
        <div className="w-full h-auto md:w-4/6 flex flex-col gap-4 border-r-0 border-[#E5E7EB] p-2 border-b md:border-b-0 md:border-r ">
          <div className="absolute top-0 left-0 flex items-center rounded-br-lg">
            <div className=" bg-[#272E71] w-8 h-8 flex justify-center p-2 rounded-br-lg">
              <img src={patent} alt="patent" />
            </div>
            <span className="px-2">Patent</span>
          </div>

          <div className="absolute top-0 right-0 md:right-[20rem] flex items-center">
            <button
              onClick={handleImageDelete}
              className="w-8 h-8 flex justify-center p-2 rounded-bl-lg "
            >
              <img src={remove} alt="remove" />
            </button>
          </div>

          <div className="absolute top-0 left-0 flex items-center rounded-br-lg">
            <div className=" bg-[#272E71] w-8 h-8 flex justify-center p-2 rounded-br-lg">
              <img src={patent} alt="patent" />
            </div>
            <span className="px-2">Patent</span>
          </div>

          <img
            className="h-[10rem] md:h-[15rem] w-full"
            src={currentProduct.picture}
          />
          <input
            name="name"
            value={currentProduct.name}
            className="p-2 ring-1 rounded ring-[#E5E7EB] font-bold"
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            value={description}
            className="px-2 h-[10rem] ring-1 rounded ring-[#E5E7EB]"
            onChange={handleInputChange}
          />

          <div className="text-right">
            <button className="px-4" onClick={handleCancel}>
              Cancel
            </button>
            <Button label="Save" />
          </div>
        </div>
        <div className="p-4 mx-auto">
          <h1 className="pb-2 font-bold">Offered By</h1>
          <LogoSecondary />
          <div className="py-2 flex items-center gap-2">
            <img
              className="w-20 h-20 rounded-full"
              src={currentProduct.user?.profilePicture}
              alt=""
            />
            <div>
              <h1 className="font-bold text-base">{name}</h1>
              <h1>{currentProduct?.company?.name}</h1>
            </div>
          </div>
          <div className="py-2 w-2/3 flex">
            <CiLocationOn className="w-5 h-5" />
            {address}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductInfoEdit;
