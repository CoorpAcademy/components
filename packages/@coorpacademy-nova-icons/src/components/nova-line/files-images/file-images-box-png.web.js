import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6.001H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <path d="M12.875 12.236L10.978 9.39a.875.875 0 0 0-1.603.486v6.125h1.75v-3.235l1.897 2.846a.876.876 0 0 0 1.603-.485V9.001h-1.75v3.235zM5.875 9.001H3.25v7H5v-1.75h.875c1.447 0 2.625-1.178 2.625-2.625S7.322 9.001 5.875 9.001zm0 3.5H5v-1.75h.875a.876.876 0 0 1 0 1.75zM15.5 10.751v3.5c0 .965.785 1.75 1.75 1.75H19c.965 0 1.75-.785 1.75-1.75v-2.625h-2.625v1.75H19v.875h-1.75v-3.5h3.5v-1.75h-3.5c-.965 0-1.75.785-1.75 1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
