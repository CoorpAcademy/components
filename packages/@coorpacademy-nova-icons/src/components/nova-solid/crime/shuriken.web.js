import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <path
      fill="currentColor"
      d="M17.145 12.002l4.729-8.516a1 1 0 0 0-1.36-1.36L12 6.858 3.486 2.126a1 1 0 0 0-1.36 1.36l4.73 8.516-4.73 8.515a.998.998 0 0 0 1.36 1.359L12 17.146l8.514 4.73a.995.995 0 0 0 1.193-.167.998.998 0 0 0 .167-1.192l-4.729-8.515zm-5.145 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
    />
  </svg>
);

export default SvgComponent;
