import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M12 5h2v10h-2zM15 7h2v6h-2zM18 8h2v4h-2z" />
      <circle cx={22} cy={10} r={1} />
      <path d="M1 8v4c0 .689.348 1.296.878 1.655.646.439.978 1.214.85 1.984C2.437 17.385 2.017 19.909 2 20a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2l.706-3.881 1.437 2.396 1.715-1.029-1.968-3.279c.265-.129.559-.207.87-.207H11V6H3a2 2 0 0 0-2 2zm6 2H3V8h4v2z" />
    </g>
  </svg>
);

export default SvgComponent;
