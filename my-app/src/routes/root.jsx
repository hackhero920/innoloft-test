import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumb from "../components/Breadcrumb";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
