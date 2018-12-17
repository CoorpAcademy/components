import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.94 10.002c.037-.33.06-.664.06-1.004 0-4.961-4.037-9-9-9s-9 4.039-9 9c0 4.963 4.038 9 9 9 .34 0 .675-.021 1.005-.059a7.996 7.996 0 0 1 7.935-7.937zM8 9.535V3.999h2v4.466l2.555 1.703-1.109 1.664L8 9.535z" />
      <path d="M24.004 18.999v-2h-1.102a5 5 0 0 0-.733-1.753l.784-.784-1.414-1.414-.785.784a4.939 4.939 0 0 0-1.751-.729V12h-2v1.103a4.94 4.94 0 0 0-1.753.73l-.783-.783-1.414 1.414.783.783a4.964 4.964 0 0 0-.732 1.752h-1.102v2h1.102c.13.638.385 1.229.732 1.754l-.783.784 1.415 1.414.782-.785a4.968 4.968 0 0 0 1.754.733V24h2v-1.102a4.963 4.963 0 0 0 1.753-.733l.784.783 1.413-1.415-.784-.782a4.957 4.957 0 0 0 .732-1.752h1.102zm-6.002 1A2 2 0 1 1 18.001 16 2 2 0 0 1 18.002 20z" />
    </g>
  </svg>
);

export default SvgComponent;
