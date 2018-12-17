import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M16.57 23a1 1 0 0 0 .419-1.908C15.471 20.392 13.782 20 12 20s-3.471.392-4.989 1.092A1 1 0 0 0 7.43 23h9.14zM20 5h-2v2h2v10H4V7h2V5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
      <path d="M12 3a4 4 0 0 0-4 4c0 2.209 4 7 4 7s4-4.791 4-7a4 4 0 0 0-4-4zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 9z" />
    </g>
  </svg>
);

export default SvgComponent;
