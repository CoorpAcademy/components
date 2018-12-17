import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.585 17l-4.999 4.999h2.828L11 17.414v4.585h2v-4.585l4.586 4.585h2.828L15.415 17zM20 2H4c-1.103 0-2 .897-2 2v1.001h20V4c0-1.103-.896-2-2-2zM2 14c0 1.102.897 2 2 2h16c1.104 0 2-.898 2-2V6.001H2V14z" />
    </g>
  </svg>
);

export default SvgComponent;
