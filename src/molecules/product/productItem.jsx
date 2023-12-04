import React, { useState } from "react";
import { Button, CardProduct } from "../../atoms";

export const ProductItem = ({ products }) => {
  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("");

  const onOpenImage = (src) => {
    setImg(src);
    setOpenImage(true);
  };
  return (
    <>
      <CardProduct products={products} onOpenImage={onOpenImage} />
      <section className={openImage ? "modelOpen" : "modelClose"}>
        <figure className="onClickImage">
          <img src={img} alt={img} />
          <Button
            className="button"
            iconName="FiX"
            onClick={() => setOpenImage(false)}
          />
        </figure>
      </section>
    </>
  );
};
