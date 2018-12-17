import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M18 15c-.173 0-.342-.016-.513-.025L18 16H4l2-4h5.761a7.995 7.995 0 0 1-1.174-2H5l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-1.255-2.197A7.963 7.963 0 0 1 18 15zM8 20H3v-2h5v2zm11 0h-5v-2h5v2z" />
      <path d="M18 1c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm-4 6c0-2.206 1.794-4 4-4 .739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 14 7zm4 4a3.959 3.959 0 0 1-2.019-.566l5.452-5.452C21.785 5.576 22 6.261 22 7c0 2.206-1.794 4-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
