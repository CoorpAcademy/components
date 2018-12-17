import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 11c0-4.963-4.038-9-9-9s-9 4.037-9 9a9.008 9.008 0 0 0 3.181 6.856L4.523 22h14.954l-1.658-4.144A9.008 9.008 0 0 0 21 11zm-9 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
    />
  </svg>
);

export default SvgComponent;
