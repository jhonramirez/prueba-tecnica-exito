import { Heading } from "../../atoms/index";
import { products } from "../../assets/data/data";
import { ProductItem } from "./productItem";

export const Product = ({ titleHeading, descHeading }) => {
  return (
      <section className="product">
        <Heading title={titleHeading} desc={descHeading} />
        <ProductItem products={products} />
      </section>
  );
};
