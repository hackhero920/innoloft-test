import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/common/Button";
import { getProduct } from "../services/productService";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";
import ProductInfoEdit from "../components/ProductInfoEdit";
import VideoEdit from "../components/VideoEdit";
import ProductDetailsEdit from "../components/ProductDetailsEdit";

const ProductEdit = () => {
  const [product, setProduct] = useState({});

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

  const getVideoId = (videoLink) => {
    if (videoLink) {
      const videoId = videoLink.split("v=")[1];
      return videoId;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct();
      setProduct(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <SideNav product={product} />
      <div className="flex flex-col max-w-[55rem] justify-center p-2 md:p-4 gap-4 mx-4">
        <div className="flex items-center justify-between w-full">
          <Breadcrumb />
          <Link to="/product/edit">
            <Button label="Edit" />
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <ProductInfoEdit
            product={product}
            address={extractAddress()}
            description={extractText()}
          />

          {/* Video */}
          <VideoEdit product={product} />

          <ProductDetailsEdit product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
