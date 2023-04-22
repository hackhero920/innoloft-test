import React from "react";
import PropTypes from "prop-types";
import home from "../images/home.svg";

const SideNav = ({ product, config }) => {
  const { user, company } = product || {};
  let name = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;

  return (
    <>
      {config.hasUserSection && (
        <div className="invisible h-0 w-0 lg:p-4 lg:px-8 lg:h-auto lg:w-auto lg:visible">
          <div className="flex items-center gap-6">
            <img
              className="w-20 h-20 rounded-full"
              src={user?.profilePicture}
              alt=""
            />
            <div>
              <h1 className="font-bold text-base">{name}</h1>
              <h1>{company?.name}</h1>
              <h1>{user?.position}</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center gap-4">
              <img src={home} alt="" />
              <h1>Home</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

SideNav.propTypes = {
  product: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};

export default SideNav;
