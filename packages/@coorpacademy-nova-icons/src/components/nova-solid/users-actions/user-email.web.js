import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.002 4.168l4.231-2.115c-.076-.02-.148-.047-.231-.047h-8c-.082 0-.154.027-.23.047l4.23 2.115z" />
      <path d="M18.338 5.677a.747.747 0 0 1-.672 0l-4.664-2.332v4.661a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3.345l-4.664 2.332z" />
      <g>
        <path d="M8.002 16.006c2.205 0 4-1.795 4-4s-1.795-4-4-4-4 1.795-4 4 1.795 4 4 4zM8.002 17.006c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6z" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
