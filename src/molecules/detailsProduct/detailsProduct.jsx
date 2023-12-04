import React, { useEffect, useState } from "react";
import { Heading, Icon, QuantityProduct } from "../../atoms/index";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

export const DetailsProduct = () => {
  const format = new Intl.NumberFormat('es-ES');
  let history = useHistory();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  const productList = useSelector(
    (product) => product.productReducer.productList
  );

  useEffect(() => {
    const filteredProduct = productList.filter((e) => {
      return e.id === parseInt(id);
    })[0];
    if (filteredProduct) {
      setSelectedProduct(filteredProduct);
    } else {
      history.push("/shoppingcart");
    }
  }, [history, id, productList]);

  return (
    <>
      <article>
        {selectedProduct && (
          <section className="detailsproduct">
            <Heading title="Detalle del producto" />
            <section key={selectedProduct.id} className="details_content">
              <figure className="details_content_img">
                <img src={selectedProduct.image} alt="" />
              </figure>
              <section className="details_content_detail">
                <h1>{selectedProduct.title}</h1>
                <div className="rating">
                  <Icon name="FiStar" />
                  <Icon name="FiStar" />
                  <Icon name="FiStar" />
                  <Icon name="FiStar" />
                  <Icon name="FiStar" />
                  <label htmlFor={selectedProduct.id}>
                    (1 opinión del cliente)
                  </label>
                </div>
                <h3>
                  {" "}
                  $
                  {format.format(
                    selectedProduct.price * selectedProduct.quantity
                  )}
                </h3>
                <QuantityProduct
                  id={selectedProduct.id}
                  price={selectedProduct.price}
                  quantity={selectedProduct.quantity}
                />
                <div className="desc">
                  <h4>DESCRIPCIÓN</h4>
                  <p>{selectedProduct.desc}</p>
                  <h4>DETALLE</h4>
                  {selectedProduct.details.map((details, i) => (
                    <ul key={i}>
                      <li>
                        <p>
                          {" "}
                          {details.title}: {details.desc}{" "}
                        </p>
                      </li>
                    </ul>
                  ))}
                </div>
              </section>
            </section>
          </section>
        )}
      </article>
    </>
  );
};
