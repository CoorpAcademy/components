import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 9V8h4v1h3V6H0v8c0 1.102.896 2 2 2h8v-5a2 2 0 0 1 2-2h1zm-5 4H3v-2h5v2zm2-3H3V8h7v2zM20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h20V2z" />
      <path d="M12 11v7c0 3.813 3.797 5.58 5.804 5.981l.196.039.196-.039C20.203 23.58 24 21.813 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
