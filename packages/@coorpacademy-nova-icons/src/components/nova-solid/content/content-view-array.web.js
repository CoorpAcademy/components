import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.5 3.001h-9c-.827 0-1.5.673-1.5 1.5v15c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5zM2 7.001v10c0 1.103.897 2 2 2h1v-14H4c-1.103 0-2 .897-2 2zM20 5.001h-1v14h1c1.104 0 2-.897 2-2v-10c0-1.103-.896-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
