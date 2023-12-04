import React, { useEffect, useState } from "react";
import { Heading, Input } from "../../atoms";
import { FilterProduct, Product, ProductItem } from "../../molecules";
import productsService from "../../service/productsService";
import { addAllProducts } from "../../store/slices/productSlice";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      const productsNew = await productsService();
      setProducts(productsNew);
      dispatch(addAllProducts(productsNew));
    };
    getProducts();
  }, []);

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
      <FilterProduct
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      {filteredProducts.length === 0 ? (
        <Product
          titleHeading="Productos en tendencia"
          descHeading="Puedes consultar los mejores productos de la semana."
          products={products}
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
