import React from "react";
import PropTypes from "prop-types";
import home from "../images/home.svg";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const SideNav = ({ product, config }) => {
  const { user, company } = product || {};
  let name = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;

  const location = useLocation();
  const isProductEditPage = location.pathname.includes("/edit");

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
            <Link className="flex items-center gap-4" to="/">
              <img src={home} alt="" />
              <h1>Home</h1>
            </Link>

            {isProductEditPage && (
              <Link to="/product" className="flex items-center gap-4">
                <IoArrowBack />
                <h1>Back</h1>
              </Link>
            )}
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
