import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h17.999v4H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h10v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <path d="M22 15c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-3 1c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1zM19 18c-2.757 0-5 2.244-5 5v1h2v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5z" />
    </g>
  </svg>
);

export default SvgComponent;
