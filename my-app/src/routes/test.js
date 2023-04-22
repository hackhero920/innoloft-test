import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store/productView";

const Test = ({ product }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productView);
  const { description } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedProduct = { ...product, [name]: value };
    dispatch(setProduct(updatedProduct));
  };

  // Handle the cancel button
  const handleCancel = (e) => {
    e.preventDefault();
    console.log(originalProducts.name);
    console.log(product.name);
  };
  return (
    <div>
      <textarea
        name="description"
        value={description}
        className="px-2 h-[10rem] ring-1 rounded ring-[#E5E7EB]"
        onChange={handleInputChange}
      />
      <button className="px-4" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default Test;
