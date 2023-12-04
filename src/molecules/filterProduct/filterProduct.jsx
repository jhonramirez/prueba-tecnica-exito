import React from "react";
import { Button } from "../../atoms";

export const FilterProduct = ({ setFilteredProducts, products }) => {
  const allCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
      return;
    }
    const newCategory = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(newCategory);
  };
  return (
    <section className="filterButtons">
      <section className="category">
        {allCategories.map((category, i) => (
          <Button
            className="button"
            key={i}
            label={category}
            iconName="FiFilter"
            onClick={() => handleFilter(category)}
          />
        ))}
      </section>
    </section>
  );
};
