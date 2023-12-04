import React, { useEffect, useState } from "react";
import { Button, Heading } from "../../atoms/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { addToProduct } from "../../store/slices/productSlice";
import { MdStar, MdStarBorder } from "react-icons/md";
import Rating from "react-rating";

export const DetailsProduct = () => {
  const format = new Intl.NumberFormat("es-ES");
  let history = useHistory();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  const productList = useSelector((state) => state.productReducer.products);

  const dispatch = useDispatch();
  const addToProducts = (product) => {
    dispatch(addToProduct({ ...product }));
  };

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
                  <Rating
                    readonly
                    initialRating={selectedProduct.rating.rate}
                    emptySymbol={<MdStarBorder />}
                    fullSymbol={<MdStar />}
                  />
                  <label htmlFor={selectedProduct.id}>
                    ({selectedProduct.rating.count} opinión del cliente)
                  </label>
                </div>
                <h3> ${format.format(selectedProduct.price)}</h3>
                <Button
                  label="Agregar"
                  onClick={() => addToProducts(selectedProduct)}
                  className="button"
                />
                <div className="desc">
                  <h4>CATEGORIA</h4>
                  <p>{selectedProduct.category}</p>
                  <h4>DESCRIPCIÓN</h4>
                  <p>{selectedProduct.description}</p>
                </div>
              </section>
            </section>
          </section>
        )}
      </article>
    </>
  );
};
