import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={15} cy={5} r={2} />
      <path d="M8.791 16.795L8 17.586 2.414 12l10-10H18v5.586l-.209.209 1.415 1.413.501-.501A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l1.498-1.498-1.414-1.414z" />
      <path d="M12 10.98v7c0 3.813 3.797 5.578 5.804 5.98L18 24l.196-.039C20.203 23.559 24 21.793 24 17.98v-7H12zm10 7c0 2.762-3.154 3.756-3.998 3.973C17.176 21.736 14 20.729 14 17.98v-5h8v5z" />
      <path d="M17 19.98h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
