import React from "react";
import PropTypes from "prop-types";
import remove from "../../images/remove.svg";

const BadgeEdit = ({ label, onClick }) => {
  return (
    <div
      className={
        label
          ? "bg-[#E5E7EB] py-1 px-4 rounded-full flex justify-center"
          : "hidden"
      }
    >
      <span>{label}</span>
      <button onClick={onClick} className="w-6">
        <img src={remove} alt="" />
      </button>
    </div>
  );
};

BadgeEdit.propTypes = {
  onClick: PropTypes.object.isRequired,
  label: PropTypes.object.isRequired,
};

export default BadgeEdit;
