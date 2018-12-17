import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 9.001v-2h-3.42L12.868.504l-1.736.994 3.145 5.503H5.723l3.145-5.503L7.132.504 3.42 7.001H0v2zM18.58 10.001H1.42l1.604 7.217a.997.997 0 0 0 .976.783h8.079a6.994 6.994 0 0 1 6.043-5.94l.458-2.06zM19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293 1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
