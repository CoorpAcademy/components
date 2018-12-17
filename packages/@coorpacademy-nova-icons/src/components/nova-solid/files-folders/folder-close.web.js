import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-4.465 9.121l-1.414 1.414L12 15.414l-2.121 2.121-1.414-1.414L10.586 14l-2.121-2.121 1.414-1.414L12 12.586l2.121-2.121 1.414 1.414L13.414 14l2.121 2.121z"
    />
  </svg>
);

export default SvgComponent;
