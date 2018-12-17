import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 12H8c-1.103 0-2 .896-2 2v4c0 3.309 2.691 6 6 6 2.606 0 4.824-1.673 5.65-4H18c2.205 0 4-1.794 4-4 0-2.205-1.795-4-4-4zm0 6v-4a2 2 0 0 1 0 4zM8.465 9.465l1.414 1.414c1.131-1.133 3.107-1.134 4.242 0l1.414-1.414A4.97 4.97 0 0 0 12 8.001c-1.336 0-2.592.52-3.535 1.464z" />
      <path d="M12 6a6.95 6.95 0 0 1 4.949 2.051l1.414-1.414C16.664 4.937 14.404 4 12 4s-4.664.938-6.363 2.637l1.414 1.414A6.95 6.95 0 0 1 12 6z" />
      <path d="M19.777 5.223l1.414-1.414C16.123-1.261 7.876-1.26 2.808 3.808l1.414 1.414C6.299 3.145 9.062 2 12 2s5.7 1.145 7.777 3.223z" />
    </g>
  </svg>
);

export default SvgComponent;
