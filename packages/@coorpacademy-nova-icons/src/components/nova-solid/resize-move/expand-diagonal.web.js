import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.293 6.292L12 10.585 6.414 4.999H9v-2H3v6h2V6.413l5.586 5.586-4.293 4.293 1.414 1.414L12 13.413l5.586 5.586H15v2h6v-6h-2v2.586l-5.586-5.586 4.293-4.293z"
    />
  </svg>
);

export default SvgComponent;
