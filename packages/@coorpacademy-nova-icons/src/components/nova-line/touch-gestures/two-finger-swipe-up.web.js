import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.358 5.015H20v-2h-5v5h2V6.523a9.968 9.968 0 0 1 2 5.991 9.976 9.976 0 0 1-3.636 7.715l1.273 1.542A11.966 11.966 0 0 0 21 12.515c0-2.762-.948-5.39-2.642-7.5z" />
      <path d="M16.993 15.007v-2H11.38l.333-1h4.279v-2h-7v-1c0-.347-.18-.668-.474-.851a1.004 1.004 0 0 0-.972-.044l-4 2c-.339.17-.553.516-.553.895v6a1 1 0 0 0 1 1h5a1 1 0 0 0 .949-.684l.772-2.316h6.279zm-8.721 1H4.993v-4.382l2-1v.382a1 1 0 0 0 1 1h1.613l-1.334 4z" />
    </g>
  </svg>
);

export default SvgComponent;
