import React from "react";
import PropTypes from "prop-types";

import remove from "../../images/remove.svg";

const BadgeDelete = ({ onClick }) => {
  return (
    <div className="absolute z-10 top-0 right-0 md:right-[20rem] flex items-center">
      <button
        onClick={onClick}
        className=" flex justify-center p-2 rounded-bl-lg"
      >
        <img className="w-4 h-4" src={remove} alt="remove" />
      </button>
    </div>
  );
};

BadgeDelete.propTypes = {
  onClick: PropTypes.object.isRequired,
};

export default BadgeDelete;
