import { ProductDetails } from "./Product-details";
import { Gallery } from "./Image-gallery";
import "./product.scss";
const ProductContainer = () => {
  return (
    <>
      <div className="container">
        <div className="product-container">
          <Gallery />
          <ProductDetails />
        </div>
      </div>
    </>
  );
};

export { ProductContainer };
