import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 15c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM24 13h-3v-3h-2v3h-3v2h3v6h2v-6h3zM10 16c-4.71 0-8 2.467-8 6v2h16v-2c0-3.533-3.29-6-8-6zm1.645 2.133a1.997 1.997 0 0 1-3.29 0 10.234 10.234 0 0 1 3.29 0zM4 22c0-1.425.907-2.586 2.402-3.284C7.047 20.062 8.411 21 10 21s2.953-.938 3.598-2.284C15.093 19.414 16 20.575 16 22H4z" />
    </g>
  </svg>
);

export default SvgComponent;
