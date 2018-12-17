import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M21 7.657L16.415 3.07c-.754-.754-2.074-.754-2.828 0L3 13.657a2.002 2.002 0 0 0 0 2.827l4.586 4.586c.377.378.879.585 1.414.585s1.037-.207 1.414-.585L21 10.484a2 2 0 0 0 0-2.827zM9.003 19.654L9 19.655v.002L4.415 15.07 9 10.484l4.586 4.587-4.583 4.583zM15 13.657L10.415 9.07 15 4.484l4.586 4.586L15 13.657z" />
      <circle cx={17} cy={9.07} r={1} />
      <circle cx={13} cy={9.07} r={1} />
      <circle cx={9} cy={15.07} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
