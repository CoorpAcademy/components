import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 15H2v-5H0v9c0 1.103.896 2 2 2h6v1H5v2h8v-2h-3v-1h6c1.104 0 2-.897 2-2v-7h-2v3zM2 19v-2h14v2H2zM19 0a5.006 5.006 0 0 0-4.072 2.113A3.877 3.877 0 0 0 14 2c-.348 0-.679.059-1 .143v2.136A1.962 1.962 0 0 1 14 4c.305 0 .611.078.909.232a.997.997 0 0 0 1.368-.473A3.006 3.006 0 0 1 19 2c1.654 0 3 1.346 3 3s-1.346 3-3 3h-5c-1.104 0-2-.897-2-2h-2c0 2.205 1.795 4 4 4h5c2.757 0 5-2.243 5-5s-2.243-5-5-5zM5 10l3-3H6V4h2v2l3-3-3-3v2H5a1 1 0 0 0-1 1v4H2l3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
