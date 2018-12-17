import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 13H8v3l-6 6h2.414L8 18.415V22h2v-3.585L13.586 22H16l-6-6z" />
      <path d="M5 11h3v-.008l4 2.725V4.283l-4 2.71v.008H5A2 2 0 1 0 5 11zM18 8h3v2h-3zM19.307 2.77l.888 1.792-2.687 1.333-.89-1.791zM19.306 15.23l-2.688-1.334.89-1.792 2.687 1.333zM15 12V6c0-.693-.359-1.337-.949-1.701A1.999 1.999 0 0 0 13 4.011v9.981c.366 0 .73-.09 1.051-.288.59-.367.949-1.01.949-1.704z" />
    </g>
  </svg>
);

export default SvgComponent;
