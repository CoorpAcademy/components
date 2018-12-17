import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M19 9c-.943 0-1.816.277-2.57.731A4.94 4.94 0 0 1 17 12v6a4.958 4.958 0 0 1-.965 2.927C16.576 21.58 17.227 22 18 22c3 0 4-5.238 4-8s-1-5-3-5zM7 12c0-.821.218-1.584.57-2.269A4.963 4.963 0 0 0 5 9c-2 0-3 2.238-3 5s1 8 4 8c.773 0 1.424-.42 1.965-1.073A4.958 4.958 0 0 1 7 18v-6zM12 8a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0v-6a4 4 0 0 0-4-4zM11 5v2h2V5c0-1.654-1.346-3-3-3H8v2h2c.551 0 1 .449 1 1z" />
    </g>
  </svg>
);

export default SvgComponent;
