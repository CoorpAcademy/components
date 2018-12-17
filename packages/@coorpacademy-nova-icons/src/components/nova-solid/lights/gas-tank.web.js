import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M6 2h12v2H6zM18 19v-8a2.98 2.98 0 0 0-1-2.219V5h-2v3h-2V7h1V5h-4v2h1v1H9V5H7v3.781A2.98 2.98 0 0 0 6 11v8c0 .353.072.685.185 1H5v2h14v-2h-1.184c.112-.315.184-.647.184-1zm-6-1a2 2 0 0 1-2-2c0-1.104 2-4 2-4s2 2.896 2 4a2 2 0 0 1-2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
