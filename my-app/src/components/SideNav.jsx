import { HiChevronRight, HiOutlineHome } from "react-icons/hi";
import home from "../images/home.svg";

const SideNav = ({ product }) => {
  const { user } = product;
  let name = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;

  return (
    <div className="invisible h-0 w-0 lg:p-4 lg:px-8 lg:h-auto lg:w-auto lg:visible">
      <div className="flex items-center gap-2">
        <img
          className="w-20 h-20 rounded-full"
          src={user?.profilePicture}
          alt=""
        />
        <div>
          <h1 className="font-bold text-base">{name}</h1>
          <h1>{product?.company?.name}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <img src={home} alt="" />
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
