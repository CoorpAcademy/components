import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 4c.178 0 .348-.031.512-.074l3.281 3.281 1.414-1.414-3.281-3.281A2.01 2.01 0 0 0 4 2a2 2 0 1 0-2 2zM2 14c.738 0 1.377-.405 1.723-1H6v-2H3.723A1.994 1.994 0 0 0 0 12a2 2 0 0 0 2 2zM5.793 16.793l-3.281 3.282A1.967 1.967 0 0 0 2 20a2 2 0 1 0 2 2c0-.177-.031-.348-.074-.512l3.281-3.282-1.414-1.413zM22 10c-.738 0-1.376.405-1.723 1H18v2h2.277c.346.595.984 1 1.723 1a2 2 0 0 0 0-4zM18.207 7.207l3.281-3.281c.164.043.334.074.512.074a2 2 0 1 0-2-2c0 .178.031.348.074.512l-3.281 3.281 1.414 1.414zM22 20c-.178 0-.348.031-.512.075l-3.281-3.282-1.414 1.414 3.281 3.282A2.002 2.002 0 0 0 20 22a2 2 0 1 0 2-2zM15 5c0-1.654-1.346-3-3-3S9 3.346 9 5s1.346 3 3 3 3-1.346 3-3zm-3 1a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zM17 13c0-2.757-2.243-5-5-5s-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3zm-2 2h-1a1 1 0 0 0-1 1v4h-2v-4a1 1 0 0 0-1-1H9v-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2z" />
    </g>
  </svg>
);

export default SvgComponent;
