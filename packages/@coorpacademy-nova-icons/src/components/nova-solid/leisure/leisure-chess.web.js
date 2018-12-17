import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <circle cx={12} cy={4} r={3} />
      <path d="M9 12h6v-2h1V8H8v2h1zM15.895 13.553A1.001 1.001 0 0 0 15 13H9a.998.998 0 0 0-.894.553c-.202.404-1.101 2.045-1.101 2.447h9.99c.001-.402-.898-2.043-1.1-2.447zM18.895 19.553l-1-2A1.001 1.001 0 0 0 17 17H7c-.379 0-.725.214-.895.553l-1 2c-.154.311-.139.678.044.974.183.293.505.473.852.473h12c.347 0 .668-.18.851-.474.182-.296.197-.663.043-.973z" />
    </g>
  </svg>
);

export default SvgComponent;
