import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <path
      d="M9 18H2V2h7.532L14 7.362V9h2V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h7v-2zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.001 1.001 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1a.991.991 0 0 0 .464-.264l7-7a.999.999 0 0 0 0-1.414zm-8.218 6.805l-2.114.528.528-2.114L17 16.414 18.586 18l-3.097 3.098zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
