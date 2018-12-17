import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M9.364 20l-.149.821A1 1 0 0 0 10.198 22h6.707a1 1 0 0 0 .996-1.09l-.083-.91H9.364zM5 14h2.786L17 4.786V3c0-.96-1.224-1.369-1.8-.6l-4.08 5.44-6.141.877C3.891 8.873 3 9.9 3 11v1c0 1.1.9 2 2 2z" />
      <path d="M9.727 18h7.909c-.719-7.913-.636-6.689-.636-7.557l5.707-5.707-1.414-1.414L3.322 21.293l1.414 1.413 5.054-5.054-.063.348z" />
    </g>
  </svg>
);

export default SvgComponent;
