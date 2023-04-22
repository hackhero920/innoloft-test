import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchConfig } from "../../store/productView";
import { useEffect } from "react";

const Button = ({ label }) => {
  const dispatch = useDispatch();
  const { config } = useSelector((state) => state.productView);

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  return (
    <button
      style={{ backgroundColor: config.mainColor }}
      className="py-2 px-3  text-white rounded"
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.object.isRequired,
};

export default Button;
