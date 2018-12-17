import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8.002 16.006c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.794 4-4 4zm0-6a2 2 0 1 0 .001 4.001 2 2 0 0 0-.001-4.001zM16.002 24.006h-16v-1c0-3.533 3.289-6 8-6s8 2.467 8 6v1zm-13.841-2h11.684c-.599-1.808-2.834-3-5.842-3s-5.244 1.192-5.842 3z"
      fill="currentColor"
    />
    <g fill="currentColor">
      <path d="M18.002 4.168l4.23-2.115c-.076-.02-.148-.047-.23-.047h-8c-.082 0-.154.027-.23.047l4.23 2.115z" />
      <path d="M18.338 5.677a.747.747 0 0 1-.672 0l-4.664-2.332v4.661a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3.345l-4.664 2.332z" />
    </g>
  </svg>
);

export default SvgComponent;
