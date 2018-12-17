import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M21 2.001h-4a1 1 0 0 0-1 1v.522l-3.629-1.451A.999.999 0 0 0 12 2.001H4c-.483 0-.897.346-.984.821l-2 11A1 1 0 0 0 2 15.001h6v4a1 1 0 0 0 1 1h3c.4 0 .762-.238.919-.606l2.74-6.394H16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1zm-6 9a1 1 0 0 0-.919.605l-2.74 6.395H10v-4a1 1 0 0 0-1-1H3.198l1.636-9h6.974L16 5.679v5.322h-1zm5 1h-2v-8h2v8z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
