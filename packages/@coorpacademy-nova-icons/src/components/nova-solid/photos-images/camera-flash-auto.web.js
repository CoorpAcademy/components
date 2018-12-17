import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.798 12A9.976 9.976 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10c0 5.515 4.486 10 10 10a9.929 9.929 0 0 0 4-.84V14c0-1.099.9-2 2-2h3.798zM9 17v-6H5l6-8v6h4l-6 8z" />
      <path d="M22 14h-5c-.552 0-1 .449-1 1v9h2v-3h3v3h2v-9c0-.551-.448-1-1-1zm-4 5v-3h3v3h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
