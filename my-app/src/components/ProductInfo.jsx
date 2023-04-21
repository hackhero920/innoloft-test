import Map from "../components/common/Map";
import LogoSecondary from "../components/common/LogoSecondary";
import { CiLocationOn } from "react-icons/ci";
import patent from "../images/patent.svg";

const ProductInfo = ({ product, address, description }) => {
  let name = `${product.user?.firstName ?? ""} ${product.user?.lastName ?? ""}`;
  return (
    <div className="flex flex-col md:flex-row items-center border border-[#E5E7EB] rounded-lg relative overflow-hidden">
      <div className="w-full md:w-4/6 flex flex-col gap-2 border-r-0 border-[#E5E7EB] p-2 border-b md:border-b-0 md:border-r ">
        <div className="absolute top-0 left-0 flex items-center rounded-br-lg">
          <div className=" bg-[#272E71] w-8 h-8 flex justify-center p-2 rounded-br-lg">
            <img src={patent} alt="" />
          </div>
          <span className="px-2">Patent</span>
        </div>
        <img
          className="h-[10rem] md:h-[15rem] w-full"
          src={product.picture}
          alt=""
        />
        <div className="px-2 font-bold">{product.name}</div>
        <div className="px-2 font-bold">Type: {product.type?.name}</div>
        <div className="px-2">{description}</div>
      </div>
      <div className="flex flex-col gap-5 p-4 mx-auto">
        <h1 className="font-bold">Offered By</h1>
        <LogoSecondary />
        <div className="flex items-center gap-2">
          <img
            className="w-20 h-20 rounded-full"
            src={product.user?.profilePicture}
            alt=""
          />
          <div>
            <h1 className="font-bold text-base">{name}</h1>
            <h1>{product?.company?.name}</h1>
          </div>
        </div>
        <div className="w-2/3 flex">
          <CiLocationOn className="w-5 h-5" />
          {address}
        </div>
        <Map />
      </div>
    </div>
  );
};

export default ProductInfo;
