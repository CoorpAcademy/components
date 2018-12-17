import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M11 2h2v5h-2zM8.867 4.571l1.5 2.598-1.732 1-1.5-2.598zM5.572 7.134l2.598 1.5-1 1.732-2.598-1.5zM4.001 11h3v2h-3zM7.171 13.633l1 1.732-2.6 1.5-.999-1.732zM8.636 15.83l1.732.999-1.5 2.598-1.732-1zM11.002 16.997h2v3h-2zM15.367 15.827l1.5 2.597-1.733 1-1.499-2.598zM16.83 13.631l2.598 1.502-1 1.73-2.598-1.5zM16.999 10.997h3v2h-3zM18.426 7.131l1 1.732-2.6 1.5-1-1.732zM15.132 4.57l1.732 1-1.5 2.598-1.732-1z"
    />
  </svg>
);

export default SvgComponent;
