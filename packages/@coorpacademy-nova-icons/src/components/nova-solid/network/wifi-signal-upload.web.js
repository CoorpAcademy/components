import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.607 17.998c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.655-1.345-3-3-3zm0 4a1.001 1.001 0 1 1 1-1c0 .551-.448 1-1 1zM5.951 15.341l1.415 1.414a5.952 5.952 0 0 1 4.241-1.757c1.603 0 3.109.624 4.242 1.757l1.414-1.414c-1.511-1.511-3.52-2.343-5.656-2.343s-4.145.832-5.656 2.343z" />
      <path d="M3.122 12.512l1.414 1.413c3.899-3.898 10.243-3.898 14.142.001l1.414-1.414c-4.679-4.679-12.291-4.678-16.97 0zM12 7.016v-2c-.132-.003-.261-.02-.394-.02A15.89 15.89 0 0 0 .293 9.684l1.414 1.414a13.908 13.908 0 0 1 9.899-4.102c.133 0 .262.016.394.02zM19 .581L14.293 5.29l1.414 1.413L18 4.411v5.587h2V4.411l2.293 2.292 1.414-1.413z" />
    </g>
  </svg>
);

export default SvgComponent;
