import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <path
      d="M12 18H2V2h7.532L14 7.362V15h2V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h10v-2zM18 23.434l-3.707-3.707 1.414-1.414L18 20.605l4.293-4.292 1.414 1.414z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
