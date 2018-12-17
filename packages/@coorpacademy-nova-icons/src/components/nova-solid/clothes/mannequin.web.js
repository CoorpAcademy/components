import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M13 3.382V2h-2v1.382L3.553 7.106l.895 1.788 3.105-1.553L8.882 10l-2.776 5.553A1.001 1.001 0 0 0 7 17h10a1.003 1.003 0 0 0 .895-1.448L15.118 10l1.329-2.658 3.105 1.553.895-1.788L13 3.382zM13 18h-2v2H6v2h12v-2h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
