import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M20 7.001h-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1H8a1 1 0 0 0-1 1v2H5c-.459 0-.859.313-.971.758l-1 4a.998.998 0 0 0 .139.797l4 6c.186.278.498.445.832.445h9a1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .2-.6v-8a1 1 0 0 0-1-1zm-1 8.667l-2.5 3.333H8.535l-3.457-5.186.703-2.814H7v2h2v-5h1v4h2v-5h1v5h2v-4h1v5h2v-4h1v6.667z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
