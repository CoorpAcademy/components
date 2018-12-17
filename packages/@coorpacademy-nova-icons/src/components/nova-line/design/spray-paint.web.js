import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M7 6h3v3H7z" />
      <circle cx={20} cy={3} r={1} />
      <circle cx={17} cy={5} r={1} />
      <circle cx={20} cy={7} r={1} />
      <circle cx={14} cy={7} r={1} />
      <circle cx={17} cy={9} r={1} />
      <circle cx={20} cy={11} r={1} />
      <path d="M4 21c0 1.103.897 2 2 2h5c1.103 0 2-.897 2-2V10H4v11zm2-9h5l.001 9H6v-9z" />
      <path d="M7 18h3v2H7z" />
    </g>
  </svg>
);

export default SvgComponent;
