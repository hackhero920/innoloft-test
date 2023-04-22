import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/common/Button";
import Video from "../components/Video";
import ProductInfo from "../components/ProductInfo";
import ProductDetails from "../components/ProductDetails";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";
import { fetchConfig, fetchProduct } from "../store/productView";

const ProductView = () => {
  const dispatch = useDispatch();
  const { product, config } = useSelector((state) => state.productView);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchConfig());
  }, [dispatch]);

  return (
    <div className="flex justify-center px-8">
      {/* SideNav */}
      <SideNav product={product} config={config} />
      <div className="flex flex-col max-w-[55rem] justify-center p-2 md:p-4 gap-4 mx-4">
        <div className="flex items-center justify-between w-full">
          <Breadcrumb />
          <Link to="/product/edit">
            <Button label="Edit" />
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          {/* Product Info Section */}
          <ProductInfo product={product} />

          {/* Video Section*/}
          <Video product={product} />

          {/* Product Details Section */}
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
