import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <path d="M19.457 9.502l-.718 2.926L18 9.502h-1.5l1.472 6h1.544l-.016-.06 1.5-5.94zM8.957 9.502l-.718 2.926L7.5 9.502H5.957l-.718 2.926L4.5 9.502H3l1.472 6h1.544L6 15.442l.739-2.927.733 2.987h1.544L9 15.442l1.5-5.94zM15 9.502h-3a.75.75 0 0 0-.75.75v5.25h1.5v-1.5h1.5v1.5h1.5v-5.25a.75.75 0 0 0-.75-.75zm-.75 3h-1.5v-1.5h1.5v1.5z" />
    </g>
  </svg>
);

export default SvgComponent;
