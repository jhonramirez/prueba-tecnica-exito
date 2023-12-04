import React from "react";
import { Button } from "../index";
import { useDispatch } from "react-redux";
import { addToProduct, removeFromProduct } from "../../store/slices/productSlice";

export const QuantityProduct = ({ id, price, quantity }) => {
  const dispatch = useDispatch();
  
  const addCarProduct = () => {
    dispatch(addToProduct({ id, price }));
  };

  const removeCarProduct = () => {
    dispatch(removeFromProduct(id));
  };
  return (
    <section className="details_content_qty">
      <Button
        className="buttonqty minus"
        iconName="FiMinus"
        onClick={removeCarProduct}
      />
      <button className="buttonqty">{quantity}</button>
      <Button
        className="buttonqty plus"
        iconName="FiPlus"
        onClick={addCarProduct}
      />
    </section>
  );
};
