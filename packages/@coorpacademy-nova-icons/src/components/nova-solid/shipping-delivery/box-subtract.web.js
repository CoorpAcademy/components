import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.832.446A1 1 0 0 0 15 .001h-4v6h8.535L15.832.446zM20 8H0v11a1 1 0 0 0 1 1h14v-.003a5 5 0 0 1 5-5V8zM9 .001H5a1 1 0 0 0-.832.446L.465 6.001H9v-6zM17 18.998h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
