import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M2 10v13a1 1 0 0 0 1 1h7v-2a2 2 0 0 1 4 0v2h7a1 1 0 0 0 1-1V10H2zm6 8H4v-2h4v2zm0-4H4v-2h4v2zm6 4h-4v-2h4v2zm0-4h-4v-2h4v2zm6 4h-4v-2h4v2zm0-4h-4v-2h4v2zM22.857 7.486l-2.566-3A1.003 1.003 0 0 0 19.434 4H18V2h-3v2H9V2H6v2H4.566c-.351 0-.676.186-.857.486l-2.566 3A.997.997 0 0 0 2 9h20a.998.998 0 0 0 .857-1.514z" />
    </g>
  </svg>
);

export default SvgComponent;
