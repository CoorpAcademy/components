import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <path
      d="M18 7h-5V5h2V3H9v2h2v2H6v2h2v6.999c0 1.859 1.279 3.411 3 3.858v3.142h2v-3.142c1.721-.447 3-1.999 3-3.858V9h2V7zm-4 8.999c0 1.103-.896 2-2 2s-2-.897-2-2h2V14h-2v-1.001h2V11h-2V9h4v6.999z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
