import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 13.285V7.999h5.286l2-2H8v-2h8v1.286l1.895-1.896A1.995 1.995 0 0 0 16 1.999H8c-1.103 0-2 .896-2 2v11.286l2-2zM21.293 2.821L2.822 21.292l1.414 1.414 1.924-1.924A2.003 2.003 0 0 0 8 21.999h8c1.103 0 2-.896 2-2V8.942l4.707-4.707-1.414-1.414zM16 10.942v5.057h-5.058L16 10.942zm-8 9.057v-1.057l.943-.943h7.058v2H8z" />
    </g>
  </svg>
);

export default SvgComponent;
