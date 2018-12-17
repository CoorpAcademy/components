import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 6.001H2v15a1 1 0 0 0 1 1h15v-2H4v-14z" />
      <path d="M21 2.001H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1zm-1 14H8v-12h12v12z" />
      <path d="M12.75 14.251a2.25 2.25 0 0 0 2.25-2.25V7.62l1.447.723.895-1.789-2.895-1.447A.998.998 0 0 0 13 6.001v3.775c-.083-.009-.164-.025-.25-.025a2.25 2.25 0 1 0 0 4.5z" />
    </g>
  </svg>
);

export default SvgComponent;
