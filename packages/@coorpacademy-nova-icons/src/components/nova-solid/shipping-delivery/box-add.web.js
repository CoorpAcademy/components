import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.832.446A1.001 1.001 0 0 0 15 .001h-4v6h8.535L15.832.446zM9 .001H5a1 1 0 0 0-.832.446L.465 6.001H9v-6zM20 8H0v11a1 1 0 0 0 1 1h13v-.003a6 6 0 0 1 6-6V8zM21 18.998v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
