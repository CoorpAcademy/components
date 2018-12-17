import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <path
      fill="currentColor"
      d="M22 6h-2c0 1.571-.405 3.05-1.116 4.337A10.972 10.972 0 0 0 11 7c-3.323 0-6.969 2.553-9.412 5.003C4.1 14.515 7.517 17 11 17c3.089 0 5.884-1.28 7.884-3.337A8.947 8.947 0 0 1 20 18h2c0-2.212-.656-4.273-1.784-6A10.934 10.934 0 0 0 22 6z"
    />
  </svg>
);

export default SvgComponent;
