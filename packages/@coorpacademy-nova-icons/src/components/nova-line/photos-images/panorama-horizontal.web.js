import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M1 3.492v17.013c7.252-3.057 13.512-3.578 22 0V3.492c-7.364 3.103-13.606 3.536-22 0zM21 17.54c-2.855-1.011-5.937-1.542-9-1.542s-6.145.531-9 1.542V6.457c5.71 2.023 12.29 2.023 18 0V17.54z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
