import React from "react";
import PropTypes from "prop-types";
import Map from "../components/common/Map";
import LogoSecondary from "../components/common/LogoSecondary";
import { CiLocationOn } from "react-icons/ci";
import BadgePatent from "./common/BadgePatent";

const ProductInfo = ({ product }) => {
  const { name, type, user, company, picture } = product;

  const fullName = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;

  // Extracting the Description
  const extractDescription = () => {
    if (product.description) {
      const htmlString = product.description;

      const div = document.createElement("div");
      div.innerHTML = htmlString;

      let extractedText = div.textContent || div.innerText || "";
      extractedText = extractedText.replace('console.log("test");', "");
      return extractedText;
    }
    return;
  };

  // Extracting the Address
  const extractAddress = () => {
    if (product.company) {
      const { address } = product.company;
      const { street, house, zipCode, city, country } = address;
      const fullAddress = `${street} ${house}, ${zipCode} ${city.name}, ${country.name}`;
      return fullAddress;
    }
    return;
  };

  return (
    <div className="flex flex-col md:flex-row items-center border border-[#E5E7EB] rounded-lg relative overflow-hidden">
      <div className="w-full md:w-4/6 flex flex-col gap-2 border-r-0 border-[#E5E7EB] p-2 border-b md:border-b-0 md:border-r ">
        <BadgePatent />
        <img className="h-[10rem] md:h-[15rem] w-full" src={picture} alt="" />
        <div className="px-2 font-bold">{name}</div>
        <div className="px-2 font-bold">Type: {type?.name}</div>
        <div className="px-2">{extractDescription()}</div>
      </div>
      <div className="flex flex-col gap-5 p-2 md:p-4 mx-auto">
        <h1 className="font-bold px-2">Offered By</h1>
        <div className="px-2">
          <LogoSecondary />
        </div>
        <div className="flex items-center gap-2 px-2">
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
        <div className="w-2/3 flex px-2">
          <CiLocationOn className="w-5 h-5" />
          {extractAddress()}
        </div>
        <Map />
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
