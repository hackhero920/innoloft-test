import Map from "../components/common/Map";
import LogoSecondary from "../components/common/LogoSecondary";
import { CiLocationOn } from "react-icons/ci";
import patent from "../images/patent.svg";
import remove from "../images/remove.svg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProduct, editProduct, fetchProduct } from "../store/productView";
import Button from "./common/Button";

const ProductInfoEdit = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productView.product);

  let name = product.user
    ? `${product.user.firstName} ${product.user.lastName}`
    : "";

  // Extracting the Description
  const extractText = () => {
    if (product.description) {
      const htmlString =
        '<img style="height: 0px" src=a onerror=console.log("secret-cookie-value")>Innoloft <b>creates</b> <script type="text/javascript">console.log("test");</script>the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors.\n\nOur unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world.\nCompanies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition.\n';

      const div = document.createElement("div");
      div.innerHTML = htmlString;

      let extractedText = div.textContent || div.innerText || "";
      extractedText = extractedText.replace('console.log("test");', "");
      return extractedText;
    }
    return;
  };

  // Extracting the Address
  const extractAddress = () => {
    if (product.company) {
      const { address } = product.company;
      const { street, house, zipCode, city, country } = address;
      const fullAddress = `${street} ${house}, ${zipCode} ${city.name}, ${country.name}`;
      return fullAddress;
    }
    return;
  };

  // Edits the Product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedProduct = { ...product, [name]: value };
    dispatch(setProduct(updatedProduct));
  };

  // Handle the cancel button
  const handleCancel = (e) => {
    dispatch(setProduct(product));
  };

  const handleImageDelete = (e) => {
    e.preventDefault();
    const updatedProduct = { ...product, picture: "" };
    dispatch(setProduct(updatedProduct));
  };

  // Handles the PUT request
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(editProduct(product));
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSave}
        className="flex flex-col md:flex-row  border border-[#E5E7EB] rounded-lg relative overflow-hidden"
      >
        <div className="w-full h-auto md:w-4/6 flex flex-col gap-4 border-r-0 border-[#E5E7EB] p-2 border-b md:border-b-0 md:border-r ">
          <div className="absolute top-0 left-0 flex items-center rounded-br-lg">
            <div className=" bg-[#272E71] w-8 h-8 flex justify-center p-2 rounded-br-lg">
              <img src={patent} alt="patent" />
            </div>
            <span className="px-2">Patent</span>
          </div>

          <div className="absolute top-0 right-0 md:right-[20rem] flex items-center">
            <button
              onClick={handleImageDelete}
              className="w-8 h-8 flex justify-center p-2 rounded-bl-lg "
            >
              <img src={remove} alt="remove" />
            </button>
          </div>

          <div className="absolute top-0 left-0 flex items-center rounded-br-lg">
            <div className=" bg-[#272E71] w-8 h-8 flex justify-center p-2 rounded-br-lg">
              <img src={patent} alt="patent" />
            </div>
            <span className="px-2">Patent</span>
          </div>

          <img
            className="h-[10rem] md:h-[15rem] w-full"
            src={product.picture}
          />
          <input
            name="name"
            value={product.name}
            className="p-2 ring-1 rounded ring-[#E5E7EB] font-bold"
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            value={extractText()}
            className="px-2 h-[10rem] ring-1 rounded ring-[#E5E7EB]"
            onChange={handleInputChange}
          />

          <div className="text-right">
            <button className="px-4" onClick={handleCancel}>
              Cancel
            </button>
            <Button label="Save" />
          </div>
        </div>
        <div className="p-4 mx-auto">
          <h1 className="pb-2 font-bold">Offered By</h1>
          <LogoSecondary />
          <div className="py-2 flex items-center gap-2">
            <img
              className="w-20 h-20 rounded-full"
              src={product.user?.profilePicture}
              alt=""
            />
            <div>
              <h1 className="font-bold text-base">{name}</h1>
              <h1>{product?.company?.name}</h1>
            </div>
          </div>
          <div className="py-2 w-2/3 flex">
            <CiLocationOn className="w-5 h-5" />
            {extractAddress()}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductInfoEdit;
