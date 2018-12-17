import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M6.814 8.982a6.959 6.959 0 0 0-1.631 5.11 6.947 6.947 0 0 0 1.778 4.096l-2.92 3.383 1.514 1.307 2.947-3.414a6.993 6.993 0 0 0 3.66 1.049c2.07 0 4.022-.906 5.355-2.486C20.069 15.01 20.771 6.946 21 3c-3.235.876-11.967 3.356-14.186 5.982zm9.176 7.755a5.001 5.001 0 0 1-3.828 1.776 4.992 4.992 0 0 1-2.329-.591l5.764-6.676-1.514-1.306-5.802 6.72a4.975 4.975 0 0 1-1.105-2.735 4.974 4.974 0 0 1 1.166-3.652C9.597 8.788 14.95 6.83 18.813 5.684c-.307 3.302-1.157 9.083-2.823 11.053z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
