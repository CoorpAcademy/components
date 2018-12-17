import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <circle cx={9} cy={22} r={2} />
      <path d="M20 11h-2a1 1 0 0 0-1 1v7c0 .062.024.115.035.173.305-.105.625-.173.965-.173 1.656 0 3 1.344 3 3h2a1 1 0 0 0 1-1v-6c0-2.206-1.795-4-4-4zm2 5h-3v-2h3v2z" />
      <circle cx={18} cy={22} r={2} />
      <path d="M6 14c3.309 0 6-2.691 6-6S9.309 2 6 2 0 4.691 0 8s2.691 6 6 6zM6 4c2.205 0 4 1.794 4 4s-1.795 4-4 4-4-1.794-4-4 1.795-4 4-4z" />
      <path d="M8 7H7V5H5v4h3zM0 17h3v2H0zM1 20h2v2H1zM16 10c0-1.102-.896-2-2-2a8 8 0 0 1-8 8 8.004 8.004 0 0 1-2-.262V21a1 1 0 0 0 1 1h1a3.001 3.001 0 0 1 6 0h3c0-.885.391-1.672 1-2.221V10z" />
    </g>
  </svg>
);

export default SvgComponent;
