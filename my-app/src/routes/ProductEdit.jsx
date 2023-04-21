import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/common/Button";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";
import ProductInfoEdit from "../components/ProductInfoEdit";
import VideoEdit from "../components/VideoEdit";
import ProductDetailsEdit from "../components/ProductDetailsEdit";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/productView";

const ProductEdit = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productView.product);

  const getVideoId = (videoLink) => {
    if (videoLink) {
      const videoId = videoLink.split("v=")[1];
      return videoId;
    }
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      <SideNav product={product} />
      <div className="flex flex-col max-w-[55rem] justify-center p-2 md:p-4 gap-4 mx-4">
        <div className="flex items-center justify-between w-full">
          <Breadcrumb />
          <Link to="/product/edit">
            <Button label="Edit" />
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <ProductInfoEdit product={product} />

          {/* Video */}
          <VideoEdit product={product} />

          <ProductDetailsEdit product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
