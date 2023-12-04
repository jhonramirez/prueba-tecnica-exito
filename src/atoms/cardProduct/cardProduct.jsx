import React from "react";
import { Button } from "../button/button";
import { useDispatch } from "react-redux";
import { addToProduct } from "../../store/slices/productSlice";

export const CardProduct = ({ products, onOpenImage }) => {
  const format = new Intl.NumberFormat('es-ES');
  const dispatch = useDispatch();
  const addToProducts = (id, title, price, image, desc, details) => {
    dispatch(addToProduct({ id, title, price, image, desc, details }));
  };
  return (
    <section className="product_items">
      {products.map((product) => (
        <article className="box" key={product.id}>
          <figure className="img">
            <img src={product.image} alt={product.title} />
            <div className="overlay">
              <Button
                iconName="FiShoppingBag"
                className="button"
                onClick={() =>
                  addToProducts(
                    product.id,
                    product.title,
                    product.price,
                    product.image,
                    product.desc,
                    product.details
                  )
                }
              />
              <Button
                iconName="FiSearch"
                className="button"
                onClick={() => onOpenImage(product.image)}
              />
            </div>
          </figure>
          <aside className="details">
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <h4>Precio: ${format.format(product.price)}</h4>
          </aside>
        </article>
      ))}
    </section>
  );
};
