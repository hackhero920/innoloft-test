import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConfig } from "../../store/productView";
import { useEffect } from "react";
import patent from "../../images/patent.svg";

const BadgePatent = () => {
  const dispatch = useDispatch();
  const { config } = useSelector((state) => state.productView);

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  return (
    <div className="absolute top-0 left-0 flex items-center rounded-br-lg">
      <div
        style={{ backgroundColor: config.mainColor }}
        className="w-8 h-8 flex justify-center p-2 rounded-br-lg"
      >
        <img src={patent} alt="" />
      </div>
      <span className="px-2">Patent</span>
    </div>
  );
};

export default BadgePatent;
