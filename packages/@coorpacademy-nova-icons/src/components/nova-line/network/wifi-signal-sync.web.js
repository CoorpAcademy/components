import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.607 18c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.345-3-3-3zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zM5.951 15.344l1.414 1.414A5.96 5.96 0 0 1 11.607 15c1.602 0 3.109.625 4.242 1.758l1.414-1.414C15.753 13.833 13.744 13 11.607 13s-4.146.833-5.656 2.344zM11 5.029C6.955 5.18 3.17 6.809.293 9.688l1.414 1.414c2.5-2.5 5.782-3.923 9.293-4.072V5.029zM18 0c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4s4 1.795 4 4c0 2.206-1.795 4-4 4a3.96 3.96 0 0 1-2.812-1.153l-.017-.018L17 7h-5v5l1.758-1.757A5.95 5.95 0 0 0 18 12c3.309 0 6-2.691 6-6s-2.691-6-6-6zM11 9.035c-2.867.145-5.693 1.295-7.878 3.479l1.414 1.414A9.951 9.951 0 0 1 11 11.035v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
