import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24V24H0z" />
    <g fill="currentColor">
      <path d="M12 10c.426-.248 4.831-2.738 4.831-6.148C16.831.849 12.816.213 12 2.661 11.185.214 7.169.85 7.169 3.852 7.169 7.015 12 10 12 10zM20.418 12c2.446-.814 1.811-4.831-1.192-4.831-3.163 0-6.148 4.831-6.148 4.831.249.426 2.738 4.83 6.148 4.83 3.003 0 3.638-4.015 1.192-4.83zM10.922 12S7.937 7.169 4.774 7.169c-3.003 0-3.639 4.017-1.192 4.831-2.446.815-1.811 4.83 1.192 4.83 3.411 0 5.9-4.404 6.148-4.83zM11 19c0 .551-.449 1-1 1H7v2h3c1.654 0 3-1.346 3-3v-5h-2v5z" />
    </g>
  </svg>
);

export default SvgComponent;
