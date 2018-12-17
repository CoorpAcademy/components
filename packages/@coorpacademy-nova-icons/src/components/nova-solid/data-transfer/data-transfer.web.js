import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .007h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2.001H4c-1.103 0-2 .897-2 2v16c0 1.102.897 2 2 2h16c1.104 0 2-.898 2-2v-16c0-1.103-.896-2-2-2zm-9 12H5v-6h2v2.586l4.293-4.293 1.414 1.414-4.293 4.293H11v2zm8 2h-2v-2.586l-4.293 4.293-1.414-1.414 4.293-4.293H13v-2h6v6z"
    />
  </svg>
);

export default SvgComponent;
