import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M15 5c-2.51 0-4.74 1.31-5.979 3.357.966.457 1.996 1.263 2.971 2.646l-.817.576C9.678 9.454 8.393 9 7 9c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.859 0 7-3.14 7-7 0-3.859-3.141-7-7-7z"
    />
  </svg>
);

export default SvgComponent;
