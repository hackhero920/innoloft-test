import React from "react";
import PropTypes from "prop-types";
import LogoSecondary from "../components/common/LogoSecondary";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  setProduct,
  extractDescription,
  fetchProduct,
  saveProduct,
} from "../store/productView";
import Button from "./common/Button";
import BadgePatent from "./common/BadgePatent";
import BadgeDelete from "./common/BadgeDelete";
import { useEffect } from "react";

const ProductInfoEdit = ({ product }) => {
  const dispatch = useDispatch();

  const { description } = useSelector((state) => state.productView) || "";

  const newProduct = { ...product };

  const { user, company, picture, name } = newProduct;

  let fullName = user ? `${user.firstName} ${user.lastName}` : "";

  // Extracting the Address
  const extractAddress = () => {
    if (company) {
      const { address } = company;
      const { street, house, zipCode, city, country } = address;
      const fullAddress = `${street} ${house}, ${zipCode} ${city.name}, ${country.name}`;
      return fullAddress;
    }
    return;
  };

  // Edits the Product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedProduct = { ...newProduct, [name]: value };
    dispatch(setProduct(updatedProduct));
  };

  // Handle the cancel button
  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(fetchProduct());
  };

  const handleImageDelete = (e) => {
    e.preventDefault();
    const updatedProduct = { ...newProduct, picture: "" };
    dispatch(setProduct(updatedProduct));
  };

  // Handles the PUT request
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(saveProduct(newProduct));
  };

  useEffect(() => {
    dispatch(extractDescription(product));
  }, [product]);

  return (
    <div>
      <form
        onSubmit={handleSave}
        className="flex flex-col md:flex-row  border border-[#E5E7EB] rounded-lg relative overflow-hidden"
      >
        <div className="w-full h-auto md:w-4/6 flex flex-col gap-4 border-r-0 border-[#E5E7EB] p-2 border-b md:border-b-0 md:border-r ">
          <BadgePatent />
          <BadgeDelete onClick={handleImageDelete} />

          <img className="h-[10rem] md:h-[15rem] w-full" src={picture} />
          <input
            name="name"
            value={name || ""}
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
              src={user?.profilePicture}
              alt=""
            />
            <div>
              <h1 className="font-bold text-base">{fullName}</h1>
              <h1>{company?.name}</h1>
            </div>
          </div>
          <div className="py-2 w-2/3 flex">
            <CiLocationOn className="w-5 h-5" />
            {extractAddress()}
          </div>
        </div>
      </form>
    </div>
  );
};

ProductInfoEdit.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfoEdit;
