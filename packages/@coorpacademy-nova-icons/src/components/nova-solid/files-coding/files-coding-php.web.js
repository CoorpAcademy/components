import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6.75 15.507H6v1.5h.75a.75.75 0 0 0 0-1.5zM17.25 15.507h-.75v1.5h.75a.75.75 0 0 0 0-1.5z" />
      <path d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-9.664 17.5H6v1.5H4.5v-6h2.25c1.24 0 2.25 1.009 2.25 2.25s-1.01 2.25-2.25 2.25zm7.5 1.5h-1.5v-2.25h-1.5v2.25h-1.5v-6h1.5v2.25h1.5v-2.25h1.5v6zm3-1.5h-.75v1.5H15v-6h2.25c1.24 0 2.25 1.009 2.25 2.25s-1.01 2.25-2.25 2.25zM15 7.007v-5l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
