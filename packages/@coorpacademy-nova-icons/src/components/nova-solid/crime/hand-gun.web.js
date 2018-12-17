import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M2 11v1c0 .379.214.725.553.894l1.34.67-.879 5.271A.998.998 0 0 0 4 20h6v-2h-.819l.667-4H11v2h2v-2h7a1 1 0 0 0 1-1v-2H2zM21 7V4h-2v1H7V4H5v1C3.346 5 2 6.346 2 8v2h19V9h1V7h-1zm-8 1H7V6h6v2z" />
    </g>
  </svg>
);

export default SvgComponent;
