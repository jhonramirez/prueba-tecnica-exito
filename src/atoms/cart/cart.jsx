import React from "react";
import { Link } from "react-router-dom";
import { Button, QuantityProduct } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromProduct } from "../../store/slices/productSlice";


export const Cart = () => {
  const format = new Intl.NumberFormat('es-ES');
  const dispatch = useDispatch();

  const productList = useSelector(
    (product) => product.productReducer.productList
  );

  let priceTotal = 0;
  productList.forEach((product) => {
    priceTotal += product.totalPrice;
  });

  const removeAllCarProduct = (id) => {
    dispatch(removeAllFromProduct(id));
  };
  return (
    <section className="shopping">
      {productList.length ? (
        <section className="details">
          <aside className="details_title">
            <h3>Foto</h3>
            <p>Nombre del producto</p>
            <p>Borrar</p>
          </aside>
          {productList.map((product) => (
            <article key={product.id} className="details_content">
              <figure className="details_content_img">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.image} />
                </Link>
              </figure>
              <section className="details_content_detail">
                <aside className="details_content_detail_price">
                  <p>{product.title.slice(0, 20)}...</p>
                  <p>Precio: ${format.format(product.price)}</p>
                  <QuantityProduct
                    id={product.id}
                    price={product.price}
                    quantity={product.quantity}
                  />
                </aside>
              </section>
              <section className="details_content_detail_icon">
                <Button
                  iconName="FiTrash2"
                  onClick={() => removeAllCarProduct(product.id)}
                />
              </section>
            </article>
          ))}
          <section className="details_total">
            <h4>Total : ${format.format(priceTotal)}</h4>
            <Button label="Pagar" className="button" />
          </section>
        </section>
      ) : (
        <section className="empty">
          <p>Tu carrito esta vacío</p>
        </section>
      )}
    </section>
  );
};
