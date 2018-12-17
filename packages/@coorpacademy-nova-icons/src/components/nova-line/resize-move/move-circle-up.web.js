import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .006h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 5.413v6.586h2V5.413l1.293 1.293 1.414-1.414L12 1.585 8.293 5.292l1.414 1.414z" />
      <path d="M16.242 9.757A5.963 5.963 0 0 1 18 13.999c0 1.604-.624 3.109-1.758 4.242s-2.641 1.758-4.243 1.758-3.108-.624-4.242-1.758A5.953 5.953 0 0 1 6 13.999c0-1.602.624-3.108 1.757-4.242L6.343 8.343A7.947 7.947 0 0 0 4 13.999c0 2.138.832 4.146 2.343 5.656 1.511 1.512 3.52 2.344 5.656 2.344s4.146-.832 5.657-2.344A7.937 7.937 0 0 0 20 13.999a7.944 7.944 0 0 0-2.344-5.656l-1.414 1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
