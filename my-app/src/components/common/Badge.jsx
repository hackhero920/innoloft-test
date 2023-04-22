import React from "react";
import PropTypes from "prop-types";

const Badge = ({ label }) => {
  return (
    <div className="bg-[#E5E7EB] py-1 px-4 rounded-full flex justify-center">
      <span>{label}</span>
    </div>
  );
};

Badge.propTypes = {
  label: PropTypes.object.isRequired,
};

export default Badge;
