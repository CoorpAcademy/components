import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M19.013 1.528A1 1 0 0 0 18.131 1H7.869a1 1 0 0 0-.832 1.554l2.667 4a.997.997 0 0 0 .831.446h4.93a1 1 0 0 0 .832-.445l2.667-4a1 1 0 0 0 .049-1.027zM13 19c-1.654 0-3-1.346-3-3s1.346-3 3-3h1V8h-2v3.102A5.007 5.007 0 0 0 8 16c0 2.757 2.243 5 5 5s5-2.243 5-5h-2c0 1.654-1.346 3-3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
