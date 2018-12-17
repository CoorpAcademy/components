import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.618 3l-1-2H10v10h12V3h-5.382zM20 9h-8V3h2.382l1 2H20v4zM15.618 13H10v10h12v-8h-5.382l-1-2zM20 21h-8v-6h2.382l1 2H20v4z" />
      <circle cx={3} cy={3} r={1} />
      <circle cx={3} cy={7} r={1} />
      <circle cx={3} cy={11} r={1} />
      <circle cx={3} cy={15} r={1} />
      <circle cx={3} cy={19} r={1} />
      <circle cx={7} cy={19} r={1} />
      <circle cx={7} cy={7} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
