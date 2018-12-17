import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <circle cx={17} cy={18} r={2} />
      <path d="M8.965 15.173C8.976 15.115 9 15.061 9 15V8a1 1 0 0 0-1-1H6c-2.205 0-4 1.794-4 4v6a1 1 0 0 0 1 1h2c0-1.656 1.344-3 3-3 .34 0 .66.069.965.173zM7 12H4v-2h3v2z" />
      <circle cx={8} cy={18} r={2} />
      <path d="M20 4h-8c-1.104 0-2 .897-2 2v9.779c.609.549 1 1.336 1 2.221h3a3.001 3.001 0 0 1 6 0h1a1 1 0 0 0 1-1V6c0-1.103-.896-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
