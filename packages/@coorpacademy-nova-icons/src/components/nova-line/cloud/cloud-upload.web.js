import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 7c0-3.859-3.141-7-7-7a6.964 6.964 0 0 0-6.438 4.253A4.942 4.942 0 0 0 5 4C2.243 4 0 6.243 0 9s2.243 5 5 5h8c3.859 0 7-3.14 7-7zm-7 5H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.571 0 1.131.166 1.617.48a1.003 1.003 0 0 0 1.518-.613A4.973 4.973 0 0 1 13 2c2.757 0 5 2.243 5 5s-2.243 5-5 5zM23.707 19.292L19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
