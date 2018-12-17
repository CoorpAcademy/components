import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 11a2 2 0 0 1 2-2h4.713C17.486 7.737 18 6.38 18 5c0-2.757-2.243-5-5-5-1.594 0-3.07.837-4 2.08C8.07.837 6.594 0 5 0 2.243 0 0 2.243 0 5c0 5.491 8.124 10.632 8.471 10.848a.998.998 0 0 0 1.058 0c.044-.028.212-.133.471-.307V11z" />
      <path d="M12 11v7c0 3.812 3.797 5.579 5.804 5.98l.196.04.196-.039C20.203 23.579 24 21.812 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
