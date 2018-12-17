import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7.005V5.003a2 2 0 0 0-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4.003a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      <circle cx={11} cy={14.006} r={2} />
      <path d="M2 8.005v10.998c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V8.005H2zm13.293 11.708l-2.274-2.273a3.959 3.959 0 0 1-2.019.566c-2.205 0-4-1.794-4-4 0-2.205 1.795-4 4-4s4 1.795 4 4c0 .739-.215 1.423-.566 2.018l2.273 2.274-1.414 1.415z" />
    </g>
  </svg>
);

export default SvgComponent;
