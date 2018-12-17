import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 3.001H5c-1.103 0-2 .897-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-14c0-1.103-.896-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4v-4h2v4h4v2z"
    />
  </svg>
);

export default SvgComponent;
