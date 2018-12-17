import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <g fill="currentColor">
      <path d="M16.849 3.245a2 2 0 1 1-3.851.753c0-.783.454-1.453 1.109-1.781a10.236 10.236 0 0 0-2.109-.219c-6 0-10 5-10 10 0 2.348 1.237 3.807 3 4.701v-3.53l.586-.585c.477-.478 2.057-1.586 6.414-1.586 4.358 0 5.937 1.109 6.414 1.586l.586.585v3.53c1.763-.895 3-2.353 3-4.701 0-3.481-1.944-6.958-5.149-8.753zM7.998 9.998a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm9 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      <path d="M11.998 11.998c-4.201 0-5.491 1.078-5.707 1.293a1 1 0 0 0-.293.707v4c0 2.205 1.795 4 4 4h4c2.205 0 4-1.795 4-4v-4a1 1 0 0 0-.293-.707c-.216-.216-1.506-1.293-5.707-1.293zm-2.5 6a1.5 1.5 0 1 1-.001-2.999 1.5 1.5 0 0 1 .001 2.999zm5 0a1.5 1.5 0 1 1-.001-2.999 1.5 1.5 0 0 1 .001 2.999z" />
    </g>
  </svg>
);

export default SvgComponent;
