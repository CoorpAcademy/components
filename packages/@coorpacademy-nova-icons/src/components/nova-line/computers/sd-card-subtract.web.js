import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <path
      d="M14 18H2V2h7.532L14 7.362V18h2V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h12v-2zM17 20h6v2h-6z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
