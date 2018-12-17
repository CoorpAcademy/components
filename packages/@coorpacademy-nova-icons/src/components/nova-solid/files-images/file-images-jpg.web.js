import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 15.5h-.75V17H12a.75.75 0 0 0 0-1.5z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 17.75C9 18.991 7.99 20 6.75 20S4.5 18.991 4.5 17.75H6a.75.75 0 0 0 1.5 0V14H9v3.75zm3 .75h-.75V20h-1.5v-6H12c1.24 0 2.25 1.01 2.25 2.25 0 1.241-1.01 2.25-2.25 2.25zm7.5-3h-3v3H18v-.75h-.75v-1.5h2.25v2.25c0 .827-.673 1.5-1.5 1.5h-1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3v1.5zM15 7V2l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
