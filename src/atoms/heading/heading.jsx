import React from "react";

export const Heading = ({ title, desc }) => {
  return (
    <section className="heading">
      <h1>{title}</h1>
      <p>{desc}</p>
    </section>
  );
};
