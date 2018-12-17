import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <path
      d="M22 9c0-2.757-2.243-5-5-5h-6c-1.104 0-2 .898-2 2H7a1 1 0 0 0-1 1v1H2v2h4v1a1 1 0 0 0 1 1h2c0 1.103.896 2 2 2h2v2a1 1 0 0 0 1 1h3.104l.57 2H16v2h3a1 1 0 0 0 .961-1.274l-1.688-5.91C20.411 13.248 22 11.314 22 9zM8 10V8h1v2H8zm3 2V6h2v6h-2zm4 3v-1h1.246l.285 1H15zm2-3h-2V6h2c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
