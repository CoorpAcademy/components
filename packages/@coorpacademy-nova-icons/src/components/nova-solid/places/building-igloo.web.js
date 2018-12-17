import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M19 15h4.819A11.995 11.995 0 0 0 19 7.274V15zM17 6.106a11.865 11.865 0 0 0-4-1.055V11h4V6.106zM11 5.051a11.865 11.865 0 0 0-4 1.055V11h4V5.051zM5 15V7.274A11.995 11.995 0 0 0 .181 15H5zM19 17h5v3h-5zM0 17h5v3H0zM17 20v-7H7v7h3v-3a2 2 0 0 1 4 0v3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
