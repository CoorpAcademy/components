import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M14 8h5.799A10.013 10.013 0 0 0 14 .838V4h-3v3h3v1zM9 16l-5-3V7l3-2V.46C2.943 1.734 0 5.523 0 10c0 5.461 4.381 9.894 9.818 9.991C9.322 19.115 9 18.121 9 17v-1zM11 10v7c0 3.812 3.797 5.579 5.804 5.98l.196.04.196-.039C19.203 22.579 23 20.812 23 17v-7H11zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
