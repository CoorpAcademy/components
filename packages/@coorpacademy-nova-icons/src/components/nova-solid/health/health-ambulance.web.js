import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M14 3a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2zM9 17.184V10a1 1 0 0 0-1-1H6c-.266 0-.519.106-.707.293l-3 3A1 1 0 0 0 2 13v6a1 1 0 0 0 1 1h2a3 3 0 0 1 3-3c.352 0 .686.073 1 .184zM7 14H5v-2h2v2z" />
      <circle cx={8} cy={20} r={2} />
      <path d="M20 6h-8c-1.104 0-2 .898-2 2v9.778c.609.549 1 1.337 1 2.222h3a3 3 0 0 1 6 0h1a1 1 0 0 0 1-1V8c0-1.102-.896-2-2-2zm-1 7h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z" />
      <circle cx={17} cy={20} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
