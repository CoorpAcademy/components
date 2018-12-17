import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      fill="currentColor"
      d="M21 4h-3.278c-.347-.595-.985-1-1.722-1H8c-.737 0-1.375.405-1.722 1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 .375.781C9.548 17.52 9.04 17.578 11 17.911V20h-1a2 2 0 0 0-2 2v1h8v-1a2 2 0 0 0-2-2h-1v-2.089c2.048-.346 1.762-.639 8.625-6.129.237-.19.375-.478.375-.782V5a1 1 0 0 0-1-1zM11 7a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V7zm-7 3.519V6h2l.006 6.125L4 10.519zM9 10a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm3 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm2-5V8a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6 1.519l-2.006 1.606L18 6h2v4.519z"
    />
  </svg>
);

export default SvgComponent;
