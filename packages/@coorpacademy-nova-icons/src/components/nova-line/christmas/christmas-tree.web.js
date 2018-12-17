import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24H0z" />
    <path
      d="M20.707 17.293L17.414 14H19a1 1 0 0 0 .707-1.707L16.414 9H17a1 1 0 0 0 .707-1.707l-5-5a.999.999 0 0 0-1.414 0l-5 5A1.002 1.002 0 0 0 7 9h.586l-3.293 3.293A1.002 1.002 0 0 0 5 14h1.586l-3.293 3.293A1.002 1.002 0 0 0 4 19h7v3h2v-3h7a1 1 0 0 0 .707-1.707zM6.414 17l3.293-3.293A1 1 0 0 0 9 12H7.414l3.293-3.293A1 1 0 0 0 10 7h-.586L12 4.414 14.586 7H14a1 1 0 0 0-.707 1.706L16.586 12H15a1 1 0 0 0-.707 1.706L17.586 17H6.414z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
