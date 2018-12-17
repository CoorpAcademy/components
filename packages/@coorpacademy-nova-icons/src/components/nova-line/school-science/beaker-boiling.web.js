import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 16.639V6h4V4H6a1 1 0 0 0-1 1v11.639L.232 22.36A1 1 0 0 0 1 24h10a.997.997 0 1 0 .768-1.639L7 16.639zM3.135 22L6 18.563 8.865 22h-5.73z" />
      <path d="M19 6.809V2h1V0h-8v2h1v4.809A5.999 5.999 0 0 0 10 12c0 3.309 2.691 6 6 6s6-2.691 6-6a5.999 5.999 0 0 0-3-5.191zM16 16c-2.206 0-4-1.794-4-4 0-1.586.942-3.022 2.401-3.662A1 1 0 0 0 15 7.422V2h2v5.422a1 1 0 0 0 .599.916A4.002 4.002 0 0 1 20 12c0 2.206-1.794 4-4 4z" />
      <circle cx={17} cy={11} r={1} />
      <circle cx={14} cy={13} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
