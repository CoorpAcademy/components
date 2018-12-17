import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <circle cx={16} cy={9} r={1} />
      <circle cx={20} cy={9} r={1} />
      <circle cx={18} cy={7} r={1} />
      <circle cx={20} cy={5} r={1} />
      <circle cx={18} cy={11} r={1} />
      <circle cx={20} cy={13} r={1} />
      <path d="M12.715 5.187A4.498 4.498 0 0 0 10.273 7H7c-1.1 0-2 .9-2 2v9a1 1 0 0 0 1 1v3h2v-3a1 1 0 0 0 1-1v-6h1.273a4.491 4.491 0 0 0 2.442 1.814A1.002 1.002 0 0 0 14 12.856v-6.71a1 1 0 0 0-1.285-.959zM2.895 17.447L4 15.236v-4.472l-2.895 5.789z" />
    </g>
  </svg>
);

export default SvgComponent;
