import React, { useState } from "react";
import { Heading, Input } from "../../atoms";
import { FilterProduct, Product, ProductItem } from "../../molecules";
import { products } from "../../assets/data/data";

export const Search = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const onChange = (e) => {
    setSearchProduct(e.target.value);
    setFilteredProducts(getItemBySearch(e.target.value));
  };

  const getItemBySearch = (searchProduct) => {
    return products.filter((product) => {
      const searchkey = searchProduct.toLowerCase();
      const title = product.title.toLowerCase();
      return searchkey && title.startsWith(searchkey) && title !== searchkey;
    });
  };
  return (
    <>
      <section className="containerSearch">
        <section className="search">
          <span>Todas las categorias</span>
          <hr />
          <Input
            type="text"
            placeholder="Buscar productos..."
            onChange={onChange}
            value={searchProduct}
          />
        </section>
      </section>
      <FilterProduct setFilteredProducts={setFilteredProducts} />
      {filteredProducts.length === 0 ? (
        <Product
          titleHeading="Productos en tendencia"
          descHeading="Puedes consultar los mejores productos de la semana."
        />
      ) : (
        <section className="product">
          <Heading title="Resultado de busqueda..." />
          <ProductItem products={filteredProducts} />
        </section>
      )}
    </>
  );
};
