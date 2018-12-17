import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M5 0L3 3h4zM19 0l-2 3h4zM3 4h4v2H3zM17 4h4v2h-4zM21 7h-4a1 1 0 0 0-1 1v2H8V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.012l3.996-3.931L16 17.06V22a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM8 14.884V12h2.931L8 14.884zm8 .056L13.061 12H16v2.94z" />
    </g>
  </svg>
);

export default SvgComponent;
