import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M16.107 16.777a.999.999 0 0 0-.962-.73h-6.29a1 1 0 0 0-.962.73c-.437 1.559-2.128 3.268-3.588 4.507a1.001 1.001 0 0 0 .648 1.763h14.095a1 1 0 0 0 .648-1.763c-1.46-1.239-3.152-2.948-3.589-4.507zM18 6h-1.773C15.602 4.241 13.915 3 12 3S8.398 4.241 7.773 6H6C4.346 6 3 7.346 3 9s1.346 3 3 3h4v3h4v-3h4c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
