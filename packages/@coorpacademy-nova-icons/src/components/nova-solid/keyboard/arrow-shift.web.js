import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M12 3l-9 9h5v9h8v-9h5z" />
  </svg>
);

export default SvgComponent;
