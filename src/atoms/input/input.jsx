import React from "react";

export const Input = ({ title, type, placeholder, className, ...resProps }) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      {...resProps}
    />
  );
};
