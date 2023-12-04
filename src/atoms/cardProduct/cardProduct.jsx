import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "../../store/slices/productSlice";

export const CardProduct = ({ products, onOpenImage }) => {
  const format = new Intl.NumberFormat("es-ES");
  const dispatch = useDispatch();
  const addToProducts = (product) => {
    dispatch(addToProduct({ ...product }));
  };
  return (
    <section className="product_items">
      {products.map((product) => (
        <article className="box" key={product.id}>
          <figure className="img">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            </Link>
            <div className="overlay">
              <Button
                iconName="FiShoppingBag"
                className="button"
                onClick={() => addToProducts(product)}
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
            <p>{product.description}</p>
            <h4>Precio: ${format.format(product.price)}</h4>
          </aside>
        </article>
      ))}
    </section>
  );
};
