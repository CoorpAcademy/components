import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 16.001H2c-1.104 0-2-.897-2-2v-12c0-1.103.896-2 2-2h16c1.104 0 2 .897 2 2v3h-2v-3H2v12h8v2z" />
      <path d="M10 13.001H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1H5v6h5v2z" />
      <circle cx={18} cy={13.001} r={2} />
      <path d="M24 13.001c0-3.309-2.691-6-6-6s-6 2.691-6 6a5.994 5.994 0 0 0 2.703 5.008l-.693 4.851a1 1 0 0 0 1.545.973L18 22.203l2.445 1.63a.998.998 0 0 0 1.088.015c.334-.211.513-.598.457-.988l-.693-4.851A5.994 5.994 0 0 0 24 13.001zm-6 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </g>
  </svg>
);

export default SvgComponent;
