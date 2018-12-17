import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <path
      d="M14 18H2V2h7.532L14 7.362V10h2V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h12v-2zM21 21h-2v-3h1c1.103 0 2-.897 2-2 0-1.104-.897-2-2-2s-2 .896-2 2h-2c0-2.205 1.794-4 4-4s4 1.795 4 4a4.007 4.007 0 0 1-3 3.873V21z"
      fill="currentColor"
    />
    <circle cx={20} cy={23} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
