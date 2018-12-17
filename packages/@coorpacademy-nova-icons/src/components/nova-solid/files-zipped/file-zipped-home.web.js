import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 10.059V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6.059A9.179 9.179 0 0 1 8 19c0-4.632 3.5-8.443 8-8.941zM6 12H4v-2h2V8H4V6h2V4H4V2h2v2h2v2H6v2h2v2H6v2zM17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.413L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.292 1.414-1.413-6-6zM18 22h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
