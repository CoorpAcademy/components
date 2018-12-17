import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zM15.5 20L12 17.502 8.5 20l1.5-4.002L7 14h3.5l1.507-4 1.493 4H17l-3 1.998L15.5 20z"
    />
  </svg>
);

export default SvgComponent;
