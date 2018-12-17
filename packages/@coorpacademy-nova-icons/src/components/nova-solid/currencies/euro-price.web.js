import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 7.435V5.003c0-.551-.448-1-1-1H4c-.552 0-1 .449-1 1v2.432a4.99 4.99 0 0 0-3 4.568 4.988 4.988 0 0 0 3 4.568v2.432a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.432a4.99 4.99 0 0 0 3-4.568 4.99 4.99 0 0 0-3-4.568zm-7 1.568c-1.157 0-2.491.387-2.879 2H14v2h-2.879c.388 1.613 1.722 2 2.879 2v2c-2.183 0-4.494-1.078-4.923-4H8v-2h1.077c.429-2.921 2.74-4 4.923-4v2z"
    />
  </svg>
);

export default SvgComponent;
