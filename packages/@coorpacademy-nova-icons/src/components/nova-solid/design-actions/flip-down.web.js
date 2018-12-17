import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 7.227V8h-2l3 3 3-3h-2v-.773C20 3.954 18.131 2 15 2h-1v2h1c.742 0 3 0 3 3.227zM9 16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6z" />
      <path d="M19 13h-6v2h6v5H5v-2H3v2c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5c0-1.102-.897-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
