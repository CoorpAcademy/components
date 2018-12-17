import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414.998H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.584L16.414.998zm-6.664 14.5h-3v.751H9v1.5H6.75v2.25h-1.5v-4.5c0-.827.673-1.5 1.5-1.5h3v1.499zm4.5 4.501H10.5v-6H12v4.5h2.25v1.5zm3.016 0h-1.543l-1.473-6h1.5l.739 2.927.718-2.927h1.543l-1.5 5.94.016.06zM15 6.998v-5l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
