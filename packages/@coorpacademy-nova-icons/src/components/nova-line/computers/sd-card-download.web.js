import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <path
      d="M12 18H2V2h7.532L14 7.362V12h2V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h10v-2zM22.293 17.286L20 19.579v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.407l4.707-4.707z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
