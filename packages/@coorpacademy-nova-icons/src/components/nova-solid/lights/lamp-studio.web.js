import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001.001H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M20 20v-7a6.955 6.955 0 0 0-3.316-5.945 4.467 4.467 0 0 1-.552 2.042A4.976 4.976 0 0 1 18 13v7h-4v2h8v-2h-2zM14.299 9.811l.367-.372a3.483 3.483 0 0 0 1.026-2.478c0-.934-.364-1.814-1.025-2.475-.627-.627-1.528-.986-2.474-.986-.946 0-1.848.359-2.476.986l-.37.37c-2.453-.438-4.514.275-5.994 1.751l-.706.706a.5.5 0 0 0-.002.706l8.486 8.489a.518.518 0 0 0 .707 0l.708-.708c1.45-1.451 2.197-3.491 1.753-5.989z" />
    </g>
  </svg>
);

export default SvgComponent;
