import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M20 12a1 1 0 0 0 1-1V9a1 1 0 0 0-.4-.8l-7.97-6a.999.999 0 0 0-1.2 0l-8.029 6A1.002 1.002 0 0 0 3 9v2a1 1 0 0 0 1 1h7.029v10H13V12h7zm-7.97-6.764l2 4.002V10h-4v-.764l2-4zm7 4.764h-3v-.998a.992.992 0 0 0-.105-.447L14.82 6.342 19.03 9.5v.5zm-14-.5l4.211-3.158-1.106 2.211A1.016 1.016 0 0 0 8.03 9v1h-3v-.5z" />
      <path d="M20.06 14.758L19.25 18h-3.22a1 1 0 0 0-1 1v3H17v-2h2.029v2H21v-2.877l1-3.879-1.94-.486zM8 18H4.811L4 14.758l-1.94.485.94 3.88V22h2v-2h2.03v2H9v-3a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
