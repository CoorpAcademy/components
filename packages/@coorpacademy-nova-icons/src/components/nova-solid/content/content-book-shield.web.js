import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 20h4.365A5.814 5.814 0 0 1 10 18v-7a2 2 0 0 1 2-2h6V1a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20z" />
      <path d="M12 11v7c0 3.812 3.797 5.579 5.804 5.981l.196.039.196-.039C20.203 23.58 24 21.813 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
