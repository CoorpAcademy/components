import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001.001H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M17 10c1.654 0 3-1.346 3-3 0-1.275-1.522-3.619-2.177-4.568-.374-.541-1.272-.541-1.646 0C15.523 3.381 14 5.725 14 7c0 1.654 1.346 3 3 3zm0-5.146c.576.97.991 1.84 1 2.146a1 1 0 0 1-2 .001c.009-.305.424-1.176 1-2.147z" />
      <path d="M10 13h10v-2h-9V2H6c-1.103 0-2 .898-2 2v5c0 1.102.897 2 2 2h4v2zM10 14v6c0 1.103.896 2 2 2h6c1.104 0 2-.897 2-2v-6H10z" />
    </g>
  </svg>
);

export default SvgComponent;
