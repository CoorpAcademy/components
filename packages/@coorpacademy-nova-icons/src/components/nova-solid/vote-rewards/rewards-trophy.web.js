import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M6.484 3.485l4.243 1.819 3.03-3.031-.407 4.835L18 8.939l-5.034 1.027L11.938 15l-1.831-4.65-4.836.407 3.032-3.029zM7 20h10v2H7zM16 19v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3h8z"
    />
  </svg>
);

export default SvgComponent;
