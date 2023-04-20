import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <div className="w-[10rem] my-auto h-8">
      <a href="/">
        <img src={logo} alt="" />
      </a>
    </div>
  );
};

export default Logo;
