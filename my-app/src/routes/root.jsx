import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumb from "../components/Breadcrumb";
import SideNav from "../components/SideNav";

const Root = () => {
  return (
    <div className="text-sm text-[#374151]">
      <NavBar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
