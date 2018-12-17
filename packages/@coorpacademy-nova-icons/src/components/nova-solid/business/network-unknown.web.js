import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 2a2 2 0 1 0-2 2c.178 0 .348-.029.512-.074l3.281 3.282 1.414-1.414-3.281-3.282A2.01 2.01 0 0 0 4 2zM2 14a1.99 1.99 0 0 0 1.723-1H6v-2H3.723c-.347-.594-.985-1-1.723-1a2 2 0 0 0 0 4zM5.793 16.794l-3.281 3.281A1.967 1.967 0 0 0 2 20a2 2 0 1 0 2 2c0-.177-.031-.347-.074-.512l3.281-3.281-1.414-1.413zM22 10c-.738 0-1.376.406-1.723 1H18v2h2.277c.347.596.984 1 1.723 1a2 2 0 1 0 0-4zM18.207 7.207l3.281-3.282c.164.046.334.075.512.075a2 2 0 1 0-2-2c0 .178.031.348.074.512l-3.281 3.282 1.414 1.413zM22 20c-.178 0-.348.031-.512.075l-3.281-3.281-1.414 1.414 3.281 3.281A2.015 2.015 0 0 0 20 22a2 2 0 1 0 2-2zM12 5C9.795 5 8 6.795 8 9h2c0-1.102.896-2 2-2s2 .898 2 2c0 1.102-.896 2-2 2h-1v4h2v-2.127A4.007 4.007 0 0 0 16 9c0-2.205-1.795-4-4-4z" />
      <circle cx={12} cy={17.001} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
