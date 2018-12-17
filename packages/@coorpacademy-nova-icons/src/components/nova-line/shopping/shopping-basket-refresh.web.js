import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3.247 9h13.507l-.223 1h2.049l.222-1H20V7h-3.42L12.868.504l-1.736.992L14.277 7H5.724l3.145-5.504L7.132.504 3.42 7H0v2h1.198l1.826 8.217A1 1 0 0 0 4 18h6v-2H4.803L3.247 9zM18 22c-1.077 0-2.063-.44-2.811-1.189L17 19h-5v5l1.764-1.763A6.03 6.03 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4z" />
      <path d="M22.239 13.761A5.936 5.936 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.795-4 4-4 1.078 0 2.065.44 2.812 1.189L19 17h5v-5l-1.761 1.761z" />
    </g>
  </svg>
);

export default SvgComponent;
