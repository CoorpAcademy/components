import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.994 8.89A1 1 0 0 0 19 8h-2V7h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2v1h-4V4a.998.998 0 0 0-1.448-.894L8 3.882l-1.553-.776A.998.998 0 0 0 5 4v4a1 1 0 0 0-.994.89L3.204 17h17.592l-.802-8.11zM7 5.619l.553.275a1 1 0 0 0 .895 0L9 5.619V8H7V5.619zM10 12H6v-2h4v2zm4-7V4h4v1h-4zm-1 10a1 1 0 1 1-.002-1.998A1 1 0 0 1 13 15zm0-3a1 1 0 1 1-.002-1.998A1 1 0 0 1 13 12zm3 3a1 1 0 1 1-.002-1.998A1 1 0 0 1 16 15zm0-3a1 1 0 1 1-.002-1.998A1 1 0 0 1 16 12zM21 18H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
