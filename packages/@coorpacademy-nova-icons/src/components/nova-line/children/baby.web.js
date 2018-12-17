import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M19.982 7.998c0-4.635-3.364-8-8-8s-8 3.365-7.998 7.946c-.01.176-.217 4.32 1.027 9.297 1.279 5.116 2.974 6.757 6.971 6.757s5.691-1.642 6.971-6.757c1.244-4.977 1.037-9.122 1.029-9.243zm-3.242 9.761l-3.26-1.63 3.981-1.492a29.094 29.094 0 0 1-.721 3.122zM5.982 7.998c0-3.476 2.523-6 6-6s6 2.524 6.002 6.053c.001.027.084 1.79-.196 4.327l-6.749 2.53-4.851-2.426c-.294-2.599-.208-4.421-.206-4.484zm6 14c-2.643 0-3.838-.474-5.029-5.241a30.107 30.107 0 0 1-.402-1.856l9.51 4.755c-.957 2.076-2.12 2.342-4.079 2.342z" />
      <path d="M11.982 12.998c2.757 0 5-2.243 5-5 0-2.756-2.243-5-5-5s-5 2.244-5 5c0 2.757 2.244 5 5 5zm0-8c1.654 0 3 1.346 3 3 0 1.655-1.346 3-3 3s-3-1.345-3-3c0-1.654 1.346-3 3-3z" />
      <circle cx={11.982} cy={8.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
