import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 9V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h9V11c0-1.101.9-2 2-2h5zm-6-8l5 5h-5V1z" />
      <path d="M17 12v1c-.539 0-1.038.154-1.475.403L17.121 15H21v-2h-2v-1h-2zM21.986 19.865a2.99 2.99 0 0 0-2.851-2.851l2.851 2.851zM14.014 16.135a2.99 2.99 0 0 0 2.852 2.851l-2.852-2.851zM15 21v2h2v1h2v-1c.539 0 1.038-.154 1.475-.404L18.879 21H15zM12.293 13.705l1.414-1.414 9.998 10.002-1.414 1.413z" />
    </g>
  </svg>
);

export default SvgComponent;
