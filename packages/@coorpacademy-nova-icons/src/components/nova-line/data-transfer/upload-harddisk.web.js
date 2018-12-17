import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 14.001H4a2 2 0 0 0-2 2v4c0 1.102.896 2 2 2h16c1.104 0 2-.898 2-2v-4c0-1.103-.896-2-2-2zm-.003 6H4v-4h16l-.003 4zM11 6.416v6.585h2V6.416l2.293 2.292 1.414-1.414L12 2.587 7.293 7.294l1.414 1.414z" />
      <circle cx={15} cy={18.001} r={1} />
      <circle cx={18} cy={18.001} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
