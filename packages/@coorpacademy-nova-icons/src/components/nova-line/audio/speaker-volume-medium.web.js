import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M13 22c-.567 0-1.11-.224-1.526-.72L8.479 17H6c-1.103 0-2-.897-2-2v-4c0-1.102.897-2 2-2h2.479l3.107-4.414a2.02 2.02 0 0 1 2.178-.434A1.992 1.992 0 0 1 15 6v14a1.993 1.993 0 0 1-2 2zM6 11v4h3.521l3.48 4.976L13 6.027 9.521 11H6zM17 16v-2a1.001 1.001 0 0 0 0-2v-2c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
