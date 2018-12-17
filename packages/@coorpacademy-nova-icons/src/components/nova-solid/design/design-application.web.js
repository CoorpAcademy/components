import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M20 2H4c-1.103 0-2 .898-2 2v2h20V4c0-1.102-.897-2-2-2zM6 5a1 1 0 1 1-.002-1.998A1 1 0 0 1 6 5zm3 0a1 1 0 1 1-.002-1.998A1 1 0 0 1 9 5zM2 20c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7H2v13zm16-2h-5v-2h5v2zM8 15c.178 0 .347.031.512.075l3.563-3.564A1.953 1.953 0 0 1 12 11c0-1.102.897-2 2-2s2 .898 2 2c0 1.102-.897 2-2 2-.178 0-.347-.03-.512-.074l-3.563 3.563c.044.164.075.334.075.511 0 1.103-.897 2-2 2s-2-.897-2-2c0-1.102.897-2 2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
