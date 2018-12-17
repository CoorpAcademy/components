import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M20 4H10c-1.104 0-2 .898-2 2v1H6c-2.205 0-4 1.794-4 4v6a1 1 0 0 0 1 1h2.185c.414 1.162 1.513 2 2.815 2s2.401-.838 2.816-2h3.368c.414 1.162 1.514 2 2.815 2s2.401-.838 2.816-2H21a1 1 0 0 0 1-1V6c0-1.102-.896-2-2-2zm0 2v10h-.184c-.415-1.162-1.515-2-2.816-2s-2.401.838-2.816 2h-3.367a2.997 2.997 0 0 0-.816-1.219V6H20zM4 11c0-1.103.896-2 2-2h2v5a2.996 2.996 0 0 0-2.816 2H4v-5zm4 7a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm9 0a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z" />
      <path d="M5 10h2v2H5z" />
    </g>
  </svg>
);

export default SvgComponent;
