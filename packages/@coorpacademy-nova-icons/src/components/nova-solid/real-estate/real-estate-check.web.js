import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zM11 20.414l-3.707-3.708 1.414-1.413L11 17.586l4.293-4.293 1.414 1.413L11 20.414z"
    />
  </svg>
);

export default SvgComponent;
