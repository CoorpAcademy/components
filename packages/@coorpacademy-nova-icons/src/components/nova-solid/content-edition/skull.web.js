import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M12.001 22c1.04 0 1.96-.54 2.5-1.34.54.8 1.46 1.34 2.5 1.34 1.65 0 3-1.35 3-3v-3l1.32-1c.4-.141.68-.52.68-.951V12c0-5.511-4.49-9.996-10-10.002C6.49 2.004 2 6.488 2 12v2.049c0 .431.28.81.68.951L4 16v3c0 1.65 1.35 3 3 3 1.04 0 1.96-.54 2.5-1.34.54.8 1.46 1.34 2.5 1.34h.001zM8 13a2 2 0 1 1 .001-4.001A2 2 0 0 1 8 13zm2 4l2-3 2 3h-4zm6-4a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 13z"
    />
  </svg>
);

export default SvgComponent;
