import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M23 2.001h-1.382L20.894.554a1 1 0 0 0-.895-.553h-4a.997.997 0 0 0-.894.553l-.724 1.447H13a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-5 6A2 2 0 1 1 18.001 4 2 2 0 0 1 18 8zM20 24.001c.588 0 1.107-.254 1.425-.695s.394-1.014.208-1.57l-1.288-3.734H1.655L.367 21.736c-.186.557-.109 1.129.208 1.57s.837.695 1.425.695h18zm-7-2H9v-2h4v2z" />
      <path d="M13 13.001c-1.654 0-3-1.346-3-3H8l-3 3-3-3.172v7.172h18v-4h-7z" />
      <path d="M8 .001v2H5a1 1 0 0 0-1 1v4H2l3 3 3-3H6v-3h2v2l3-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
