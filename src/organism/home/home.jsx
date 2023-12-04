import React from "react";
import { Slider } from "../../atoms";
import { Product } from "../../molecules";

export const Home = () => {
  return (
    <div>
      <Slider />
      <Product
        titleHeading="Productos en tendencia"
        descHeading="Los mejores productos de la semana."
      />
    </div>
  );
};
