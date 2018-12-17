import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.095 11.929L12 12.882l-2.095 1.047L12 8.691l2.095 5.238zM4 12c0-4.314 3.438-7.835 7.717-7.985L6.287 17.59A7.975 7.975 0 0 1 4 12zm2.551 5.84L12 15.119l5.449 2.721a7.953 7.953 0 0 1-10.898 0zm11.162-.25l-5.43-13.575C16.563 4.165 20 7.686 20 12a7.975 7.975 0 0 1-2.287 5.59z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
