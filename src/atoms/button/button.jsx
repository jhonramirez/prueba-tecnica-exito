import React from "react";
import { Icon } from "../index";

export const Button = ({
  label,
  iconName,
  className,
  classNameIcon,
  ...resProps
}) => {
  return (
    <button className={className} {...resProps}>
      {iconName ? <Icon name={iconName} className={classNameIcon} /> : ""}

      {label}
    </button>
  );
};
