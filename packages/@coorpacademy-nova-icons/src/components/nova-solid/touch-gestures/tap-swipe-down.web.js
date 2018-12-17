import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 18.001v-2h-2v2h-2l3 3 3-3zM14 9.001H7v-3l-6 3v6h6l2-4h5z" />
      <path d="M13.936 3.666L12.071 5.53c.143-.016.285-.029.429-.029 2.481 0 4.5 2.018 4.5 4.5 0 2.481-2.019 4.5-4.5 4.5-.144 0-.286-.014-.429-.029l1.864 1.864C16.83 15.68 19 13.091 19 10.001s-2.17-5.678-5.064-6.335z" />
    </g>
  </svg>
);

export default SvgComponent;
