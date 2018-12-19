import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 3H6C4.346 3 3 4.346 3 6v13c0 1.103.896 2 2 2h14c1.104 0 2-.897 2-2V6c0-1.654-1.346-3-3-3zm1 3v1h-3V5h2c.551 0 1 .448 1 1zm-9 1V5h4v2h-4zM6 5h2v2H5V6c0-.552.449-1 1-1zM5 19V9h14v10H5z" />
      <path d="M16.525 10.149a.998.998 0 0 0-.973-.044l-2.895 1.447.895 1.789L15 12.618V18h2v-7c0-.347-.18-.668-.475-.851zM10 11H8v2H6v2h2v2h2v-2h2v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
