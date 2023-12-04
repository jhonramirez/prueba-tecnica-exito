import { Heading } from "../../atoms/index";
import { ProductItem } from "./productItem";

export const Product = ({ titleHeading, descHeading, products }) => {
  return (
    <section className="product">
      <Heading title={titleHeading} desc={descHeading} />
      <ProductItem products={products} />
    </section>
  );
};
