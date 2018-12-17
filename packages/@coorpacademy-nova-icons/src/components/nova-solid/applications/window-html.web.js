import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 19c0 1.104.898 2 2 2h16a2 2 0 0 0 2-2V8.002H2V19zm15.25-6.997h1.5v4.5H21v1.5h-3.75v-6zm-14.25 0h1.5v2.25H6v-2.25h6v.75a.75.75 0 0 1 .75-.75c.428 0 .25.033 1.5 1.851 1.25-1.817 1.072-1.851 1.5-1.851a.75.75 0 0 1 .75.75v5.25H15v-2.976l-.22.329a.636.636 0 0 1-1.06 0l-.22-.329v2.976H12v-4.5h-1.5v4.5H9v-4.5H7.5v4.5H6v-2.25H4.5v2.25H3v-6zM20 3H4c-1.102 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
