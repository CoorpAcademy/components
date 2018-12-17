import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 8.006h4V10h2V8.006h3.736c.166.639.263 1.305.264 1.994h2C19.996 4.488 15.512.006 10 .006c-5.514 0-10 4.486-10 10 0 5.513 4.486 10 10 10v-2a7.959 7.959 0 0 1-2-.264v-3.736h2v-2H8v-4zm6-4.918a8.051 8.051 0 0 1 2.918 2.918H14V3.088zM8 2.27c.641-.166 1.309-.263 2-.263s1.359.097 2 .263v3.737H8V2.27zM6 16.924a8.059 8.059 0 0 1-2.918-2.918H6v2.918zm0-4.918H2.264a7.959 7.959 0 0 1-.264-2c0-.692.098-1.36.264-2H6v4zm0-6H3.082A8.051 8.051 0 0 1 6 3.088v2.918zM18 22c-1.077 0-2.063-.44-2.811-1.189L17 19h-5v5l1.764-1.764A6.024 6.024 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.205-1.795 4-4 4z" />
      <path d="M22.239 13.761A5.94 5.94 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4 1.078 0 2.064.44 2.811 1.19L19 17h5v-5l-1.761 1.761z" />
    </g>
  </svg>
);

export default SvgComponent;
