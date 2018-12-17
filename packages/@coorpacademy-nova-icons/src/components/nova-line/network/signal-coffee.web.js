import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 12H8c-1.104 0-2 .898-2 2v4c0 3.309 2.691 6 6 6 2.606 0 4.824-1.673 5.65-4H18c2.205 0 4-1.794 4-4 0-2.205-1.795-4-4-4zm-6 10c-2.205 0-4-1.794-4-4v-4h8v4c0 2.206-1.795 4-4 4zm6-4v-4a2 2 0 0 1 0 4zM8.465 9.465l1.414 1.414a3.003 3.003 0 0 1 4.242 0l1.414-1.415a5.007 5.007 0 0 0-7.07.001z" />
      <path d="M12 6c1.869 0 3.627.729 4.949 2.051l1.414-1.414A8.94 8.94 0 0 0 12 4a8.938 8.938 0 0 0-6.363 2.637l1.414 1.414A6.953 6.953 0 0 1 12 6z" />
      <path d="M12 2c2.938 0 5.7 1.145 7.777 3.223l1.414-1.414A12.913 12.913 0 0 0 12 0h-.001a12.913 12.913 0 0 0-9.191 3.807l1.414 1.414A10.931 10.931 0 0 1 12 2z" />
    </g>
  </svg>
);

export default SvgComponent;
