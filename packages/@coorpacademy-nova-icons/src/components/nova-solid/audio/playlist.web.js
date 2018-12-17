import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.526 9.151a1.006 1.006 0 0 0-.973-.044l-6 3c-.339.17-.553.516-.553.896v4.051a2.5 2.5 0 1 0 2 2.449v-5.882l4-2v3.433a2.5 2.5 0 1 0 2 2.449v-7.5c0-.347-.18-.668-.474-.852zM2 2.003h17v2H2zM2 6.003h17v2H2zM2 10.003h9v2H2zM2 14.003h9v2H2z" />
    </g>
  </svg>
);

export default SvgComponent;
