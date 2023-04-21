import { useEffect, useState } from "react";

const Test = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [businessModel, setBusinessModel] = useState("");

  useEffect(() => {
    setCurrentProduct(product);
  }, [product]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const newBusinessModel = {
      id: Date.now(),
      name: value.trim(),
    };

    setproduct((prevState) => ({
      ...prevState,
      businessModels: [...prevState.businessModels, newBusinessModel],
    }));

    e.target.value = "";
  };

  return (
    <div>
      <input
        type="text"
        name="businessModels"
        onChange={(e) => setBusinessModel(e.target.value)}
        className="p-2 rounded ring-1 ring-[#E5E7EB] focus:outline-none"
      />
      <button
        onClick={handleInputChange}
        name="businessModels"
        value={businessModel}
        className="p-2 rounded ring-1 ring-[#E5E7EB]"
      >
        +
      </button>
    </div>
  );
};

export default Test;
