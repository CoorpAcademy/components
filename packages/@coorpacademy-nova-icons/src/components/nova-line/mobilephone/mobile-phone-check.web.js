import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 23.414l-3.707-3.707 1.414-1.414L18 20.586l4.293-4.293 1.414 1.414zM10 0H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2V2c0-1.104-.897-2-2-2zm0 2v2H2V2h8zm0 4v8H2V6h8zM2 18v-2h8.001v2H2z"
    />
  </svg>
);

export default SvgComponent;
