import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 20h20v2H2zM6.292 18.707c.182.181.432.293.708.293h6c.276 0 .526-.112.708-.293L21 11.414c.78-.779.78-2.048 0-2.828L15.414 3a2.001 2.001 0 0 0-2.828 0L3 12.586c-.78.78-.78 2.049 0 2.828l3.292 3.293zM10 8.414L15.586 14l-3 3H7.414l-3-3L10 8.414z" />
    </g>
  </svg>
);

export default SvgComponent;
