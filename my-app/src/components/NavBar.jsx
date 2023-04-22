import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Logo from "./common/Logo";

const NavBar = ({ config, product }) => {
  const [open, setOpen] = useState(false);
  const { mainColor, hasUserSection } = config;
  const { user } = product;

  const navItems = [
    {
      id: 0,
      item: "Home",
      link: "/",
    },

    {
      id: 1,
      item: "Product",
      link: "/product",
    },
  ];

  return (
    <nav
      style={{ backgroundColor: mainColor }}
      className={`text-gray-200 flex-wrap w-full flex items-center tracking-tight justify-between py-2 px-2 lg:px-[8rem] transition-all duration-300 ease-in-out delay-150`}
    >
      <Logo />
      <TiThMenu
        className={`${
          !open ? "ring-1" : "ring-2"
        } h-8 w-8 ring-gray-300 rounded lg:hidden`}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <section
        className={`${
          open ? "block" : "hidden"
        } w-full lg:flex lg:items-center lg:w-2/3 lg:justify-between px-4 md:px-8 lg:px-20 `}
      >
        <div className="lg:flex lg:justify-between ">
          <ul className="lg:flex lg:gap-2 items-center text-sm w-full">
            {navItems.map((nav) => (
              <li
                key={nav.id}
                className="p-2 lg: md:px-2 block text-start border-b-[0.5px] lg:border-0 border-neutral-800"
              >
                <a
                  className="hover:text-slate-400 active:text-slate-500"
                  href={nav.link}
                >
                  {nav.item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {hasUserSection && (
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-full"
              src={user?.profilePicture}
              alt=""
            />
            <div>
              {user?.firstName} {user?.lastName}
            </div>
          </div>
        )}
      </section>
    </nav>
  );
};

NavBar.propTypes = {
  config: PropTypes.shape({
    mainColor: PropTypes.string,
    hasUserSection: PropTypes.bool,
  }).isRequired,
  product: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      profilePicture: PropTypes.string,
    }),
  }).isRequired,
};

export default NavBar;
