import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.583 9.568a3.812 3.812 0 1 0 1.294-7.396c.148.404.23.838.23 1.294A3.812 3.812 0 0 1 2 7.05a3.813 3.813 0 0 0 3.583 2.518z" />
      <path d="M15 7.172a6.961 6.961 0 0 0-6.437 4.254A4.959 4.959 0 0 0 7 11.172c-2.757 0-5 2.243-5 5 0 1.047.32 2.05.925 2.898l1.629-1.161A2.966 2.966 0 0 1 4 16.172c0-1.654 1.346-3 3-3 .569 0 1.129.167 1.619.482a.998.998 0 0 0 1.516-.614 4.976 4.976 0 0 1 4.866-3.868c2.757 0 5 2.243 5 5 0 1.293-.492 2.52-1.385 3.454l1.446 1.382A6.971 6.971 0 0 0 22 14.172c0-3.86-3.14-7-7-7z" />
      <path d="M7.798 18.642l-.884.884-.884-.884-1.06 1.06.884.884-.884.884 1.06 1.06.884-.884.884.884 1.06-1.06-.883-.884.883-.884zM12.798 18.642l-.884.884-.884-.884-1.06 1.06.884.884-.884.884 1.06 1.06.884-.884.884.884 1.06-1.06-.883-.884.883-.884zM17.47 18.642l-.884.884-.884-.884-1.06 1.06.883.884-.883.884 1.06 1.06.884-.884.884.884 1.06-1.06-.884-.884.884-.884z" />
    </g>
  </svg>
);

export default SvgComponent;
