import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6.75 15.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75z" />
      <path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM9 17.75C9 18.992 7.99 20 6.75 20S4.5 18.992 4.5 17.75v-1.5C4.5 15.011 5.51 14 6.75 14S9 15.011 9 16.25v1.5zm5.25-2.25h-1.5V20h-1.5v-4.5h-1.5V14h4.5v1.5zm5.25 0h-3v.75h2.25v1.5H16.5V20H15v-4.5c0-.826.673-1.5 1.5-1.5h3v1.5zM15 7V2l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
