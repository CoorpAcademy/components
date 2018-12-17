import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 1.354V5h3.646A10.03 10.03 0 0 0 15 1.354zM7 .461V5h6V.461C12.053.162 11.045 0 10 0S7.947.162 7 .461zM7 7h6v6H7zM19.539 7H15v6h3.277a1.997 1.997 0 0 1 1.518-.982A9.938 9.938 0 0 0 20 10a9.95 9.95 0 0 0-.461-3zM1.354 5H5V1.354A10.03 10.03 0 0 0 1.354 5zM15 18.646a10.062 10.062 0 0 0 3-2.672V15h-3v3.646zM7 19.54c.947.298 1.955.46 3 .46s2.053-.162 3-.46V15H7v4.54zM5 18.646V15H1.354A10.022 10.022 0 0 0 5 18.646zM0 10a9.95 9.95 0 0 0 .461 3H5V7H.461A9.95 9.95 0 0 0 0 10zM20 13.998h2v6h-2z" />
      <circle cx={21} cy={21.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
