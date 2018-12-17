import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.607 17.998c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.655-1.345-3-3-3zm0 4a1.001 1.001 0 1 1 1-1c0 .551-.449 1-1 1zM5.951 15.341l1.414 1.414a5.955 5.955 0 0 1 4.242-1.757 5.96 5.96 0 0 1 4.242 1.757l1.414-1.414c-1.511-1.511-3.52-2.343-5.656-2.343s-4.146.832-5.656 2.343zM11 5.026C6.955 5.177 3.17 6.805.293 9.684l1.414 1.414c2.5-2.5 5.782-3.921 9.293-4.071V5.026zM18 9.998c-1.077 0-2.064-.44-2.811-1.19L17 6.998h-5v5l1.764-1.763A6.034 6.034 0 0 0 18 11.998c3.309 0 6-2.692 6-6h-2c0 2.205-1.795 4-4 4zM22.239 1.758A5.935 5.935 0 0 0 18-.002c-3.309 0-6 2.691-6 6h2c0-2.207 1.795-4 4-4 1.078 0 2.065.44 2.81 1.188L19 4.998h5v-5l-1.761 1.76zM11 9.031c-2.867.145-5.693 1.296-7.878 3.48l1.414 1.413A9.953 9.953 0 0 1 11 11.03V9.031z" />
    </g>
  </svg>
);

export default SvgComponent;
