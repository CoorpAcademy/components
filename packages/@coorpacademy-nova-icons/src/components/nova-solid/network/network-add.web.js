import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 7h6v6H7zM15 15v1.684A6.047 6.047 0 0 1 16.682 15H15zM20 10a9.95 9.95 0 0 0-.461-3H15v6h4.539A9.95 9.95 0 0 0 20 10zM15 1.354V5h3.646A10.03 10.03 0 0 0 15 1.354zM7 19.54c.947.298 1.955.46 3 .46s2.053-.162 3-.46V15H7v4.54zM7 .461V5h6V.461C12.053.162 11.045 0 10 0S7.947.162 7 .461zM5 18.646V15H1.354A10.022 10.022 0 0 0 5 18.646zM0 10a9.95 9.95 0 0 0 .461 3H5V7H.461A9.95 9.95 0 0 0 0 10zM1.354 5H5V1.354A10.03 10.03 0 0 0 1.354 5zM21 18.998v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
