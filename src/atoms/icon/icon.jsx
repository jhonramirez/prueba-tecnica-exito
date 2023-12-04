import React from "react";
import * as FIcon from "react-icons/fi";

export const Icon = ({ name, className, color }) => {
  return <i className={className}>{React.createElement(FIcon[name])}</i>;
};
