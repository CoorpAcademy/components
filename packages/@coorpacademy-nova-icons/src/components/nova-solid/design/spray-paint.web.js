import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M7 5h3v3H7zM4 21a2 2 0 0 0 1.999 2h5a2 2 0 0 0 2-2V10H4v11zm1.999-4h5v3h-5v-3z" />
      <circle cx={14} cy={7} r={1} />
      <circle cx={17} cy={5} r={1} />
      <circle cx={20} cy={3} r={1} />
      <circle cx={20} cy={7} r={1} />
      <circle cx={17} cy={9} r={1} />
      <circle cx={20} cy={11} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
