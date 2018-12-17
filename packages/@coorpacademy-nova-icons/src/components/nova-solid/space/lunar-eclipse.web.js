import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16c-.516 0-1.016-.06-1.5-.165A7 7 0 0 0 16 12a7 7 0 0 0-5.5-6.835A7 7 0 1 1 12 19z"
    />
  </svg>
);

export default SvgComponent;
