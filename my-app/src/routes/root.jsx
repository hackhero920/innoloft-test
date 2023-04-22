import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConfig, fetchProduct } from "../store/productView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const dispatch = useDispatch();
  const { config, product } = useSelector((state) => state.productView);

  useEffect(() => {
    dispatch(fetchConfig());
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="text-sm text-[#374151]">
      <NavBar product={product} config={config} />
      <div id="detail">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Root;
