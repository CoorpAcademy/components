import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.463 17C20.983 14.412 23 10.352 23 7c0-3.308-2.691-6-6-6s-6 2.692-6 6c0 3.352 2.018 7.412 3.537 10h4.926zM17 4.999A2 2 0 1 1 16.999 9 2 2 0 0 1 17 5z" />
      <path d="M19.924 18.617A1 1 0 0 0 19 18h-8.586l.293-.293a.999.999 0 0 0 0-1.414l-1-1a1 1 0 0 0-1.078-.222L5 16.521V23h11c.266 0 .52-.105.707-.293l3-3c.286-.287.371-.716.217-1.09zM3 15H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
