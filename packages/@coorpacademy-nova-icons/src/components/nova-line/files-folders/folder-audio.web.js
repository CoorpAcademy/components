import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.018 9.482l-5 1.63a.75.75 0 0 0-.518.713V15a1.5 1.5 0 1 0 1.5 1.5c0-.045-.009-.087-.013-.131H10v-4l3.5-1.141V14a1.5 1.5 0 1 0 1.5 1.5c0-.045-.009-.087-.013-.131H15v-5.174a.748.748 0 0 0-.982-.713z" />
      <path d="M20 7h-8.25L10.1 4.8A2.009 2.009 0 0 0 8.5 4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.102-.897-2-2-2zM4 19V6h4.5l1.65 2.2c.375.501.974.8 1.6.8H20l.001 10H4z" />
    </g>
  </svg>
);

export default SvgComponent;
