import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M14.293 15.293L12 17.586V13h3v-2h-3v-1h3V8h-3V2h-2v6H7v2h3v1H7v2h3v4.586l-2.293-2.293-1.414 1.413L11 21.414l4.707-4.708z"
    />
  </svg>
);

export default SvgComponent;
