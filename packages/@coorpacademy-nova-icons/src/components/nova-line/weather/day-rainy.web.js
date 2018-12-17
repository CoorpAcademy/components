import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6.051 2h2v2h-2zM2.794 3.308l1.414 1.416-1.415 1.413L1.38 4.721zM0 8h2v2H0zM3 9c0 .391.061.779.17 1.141A6.974 6.974 0 0 1 7 9c.17 0 .33.01.5.02a9.045 9.045 0 0 1 2.58-2.569A3.999 3.999 0 0 0 3 9zM15 7a6.961 6.961 0 0 0-6.437 4.254A4.959 4.959 0 0 0 7 11c-2.757 0-5 2.243-5 5 0 1.785.962 3.446 2.511 4.337l.997-1.734A3.012 3.012 0 0 1 4 16c0-1.654 1.346-3 3-3 .569 0 1.129.167 1.619.482a.998.998 0 0 0 1.516-.614A4.975 4.975 0 0 1 15 9c2.757 0 5 2.243 5 5a5.02 5.02 0 0 1-2.505 4.334l1 1.732A7.025 7.025 0 0 0 22 14c0-3.859-3.14-7-7-7zM11.279 3.38l1.414 1.415-1.415 1.413-1.414-1.414z" />
      <path d="M5.857 21.614l3-5 1.287.771-3 5zM14.145 22.385l-1.286-.771 2.998-5.001 1.286.77zM9.357 21.614l3-5 1.287.771-3 5z" />
    </g>
  </svg>
);

export default SvgComponent;
