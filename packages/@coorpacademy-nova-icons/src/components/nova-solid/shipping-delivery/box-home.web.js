import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M9 .002H5a1 1 0 0 0-.832.446L.465 6.002H9v-6zM15.832.448A1 1 0 0 0 15 .002h-4v6h8.535L15.832.448zM17 10c1.054 0 2.06.19 3 .523v-2.52H0v11a1 1 0 0 0 1 1h7.06A8.974 8.974 0 0 1 8 19a9 9 0 0 1 9-9z" />
      <path d="M17.707 12.292a1 1 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.293 1.414-1.414-6-6.001zM18 22h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
