import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.832.446A1.001 1.001 0 0 0 15 .001h-4v6h8.535L15.832.446zM9 .001H5a1 1 0 0 0-.832.446L.465 6.001H9v-6zM20 8H0v11a1 1 0 0 0 1 1h17v-6.003c0-1.1.9-2 2-2V8zM20 13.998h2v6h-2z" />
      <circle cx={21} cy={21.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
