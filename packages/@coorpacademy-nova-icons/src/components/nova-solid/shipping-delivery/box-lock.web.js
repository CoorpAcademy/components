import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.832.446A1.001 1.001 0 0 0 15 .001h-4v6h8.535L15.832.446zM9 .001H5a1 1 0 0 0-.832.445L.465 6.001H9v-6zM19 8.998c.34 0 .672.034 1 .08V8.001H0v11a1 1 0 0 0 1 1h11v-4.003a7 7 0 0 1 7-7z" />
      <path d="M22.999 14.998c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={18.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
