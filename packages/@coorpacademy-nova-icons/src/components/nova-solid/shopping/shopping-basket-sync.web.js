import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 9.001v-2h-3.42L12.868.504l-1.736.994 3.145 5.503H5.723l3.145-5.503L7.132.504 3.42 7.001H0v2zM18.58 10.001h-.56c.187.001.37.015.554.028l.006-.028zM17.98 10.001H1.42l1.604 7.217a.997.997 0 0 0 .976.783h6V18a8 8 0 0 1 7.98-7.999z" />
      <path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.188L17 19h-5v5l1.761-1.761A5.94 5.94 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
