import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M18 9.998c.691 0 1.359.098 2 .263v-2.26H0v11a1 1 0 0 0 1 1h9.263A8.016 8.016 0 0 1 10 17.998a8 8 0 0 1 8-8zM15.832.446A1.001 1.001 0 0 0 15 .001h-4v6h8.535L15.832.446zM9 .001H5a1 1 0 0 0-.832.445L.465 6.001H9v-6z" />
      <path d="M24 16.284h-4.286L18 11.998l-1.715 4.286H12l3.708 3.13-1.994 4.584L18 21.164l4.285 2.834-1.993-4.584z" />
    </g>
  </svg>
);

export default SvgComponent;
