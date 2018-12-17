import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.002H0z" />
    <path
      d="M20 19c0 .449-.551 1-1 1h-1.883l1.877-16.89A1 1 0 0 0 18 2H6a.997.997 0 0 0-.994 1.11L6.883 20H5c-.449 0-1-.551-1-1H2c0 1.542 1.458 3 3 3h14c1.542 0 3-1.458 3-3h-2zm-4.34-4H8.34l-.111-1h7.543l-.112 1zm1.223-11l-.889 8H8.006l-.889-8h9.766zM8.895 20l-.333-3h6.877l-.333 3H8.895z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
