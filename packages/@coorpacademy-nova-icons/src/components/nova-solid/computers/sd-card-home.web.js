import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 19c0-4.633 3.5-8.443 8-8.941V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h6.059A9.164 9.164 0 0 1 8 19zM5 7H3V4h2v3zm1-3h2v3H6V4zM17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.293 1.414-1.414-6-6zM18 22h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
