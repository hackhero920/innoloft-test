import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/common/Button";
import { getProduct } from "../services/productService";
import Map from "../components/common/Map";
import LogoSecondary from "../components/common/LogoSecondary";

const ProductView = () => {
  const [product, setProduct] = useState({});

  const htmlString =
    '<img style="height: 0px" src=a onerror=console.log("secret-cookie-value")>Innoloft <b>creates</b> <script type="text/javascript">console.log("test");</script>the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors.\n\nOur unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world.\nCompanies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition.\n';

  const div = document.createElement("div");
  div.innerHTML = htmlString;

  let extractedText = div.textContent || div.innerText || "";
  extractedText = extractedText.replace('console.log("test");', "");

  console.log(extractedText);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct();
      setProduct(result.data);
    };
    fetchData();
  }, []);
  console.log(product.picture);

  return (
    <div className="flex flex-col max-w-[60rem] justify-center mx-auto p-2 md:p-4 gap-4">
      <div className="flex items-center justify-between w-full">
        <Breadcrumb />
        <Button label="Edit" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 flex flex-col gap-2 p-4 text-sm">
            <img
              className="h-[10rem] md:h-[15rem] w-full"
              src={product.picture}
              alt=""
            />
            <div>{product.name}</div>
            <div>{extractedText}</div>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Offered By</h1>
            <LogoSecondary />
            <Map />
          </div>
        </div>
        <div>B</div>
        <div>C</div>
      </div>
    </div>
  );
};

export default ProductView;
