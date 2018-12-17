import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.001c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 15s-5-3-5-6c0-1.655 1-2.999 3-2.999 1 0 2 .999 2 1.999 0-1 1-1.999 2-1.999 2 0 3 1.344 3 2.999 0 3-5 6-5 6z"
    />
  </svg>
);

export default SvgComponent;
