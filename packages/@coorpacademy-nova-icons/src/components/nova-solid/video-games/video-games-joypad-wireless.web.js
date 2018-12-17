import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <g fill="currentColor">
      <path d="M11.998 1.998a9.94 9.94 0 0 1 7.071 2.93l1.414-1.414a11.917 11.917 0 0 0-8.485-3.516 11.915 11.915 0 0 0-8.485 3.516l1.414 1.414a9.94 9.94 0 0 1 7.071-2.93z" />
      <path d="M17.655 6.342a7.946 7.946 0 0 0-5.657-2.344 7.94 7.94 0 0 0-5.656 2.344l1.414 1.414a5.958 5.958 0 0 1 4.242-1.759 5.96 5.96 0 0 1 4.243 1.759l1.414-1.414z" />
      <path d="M10.584 10.584c.78-.78 2.049-.78 2.829 0l1.414-1.414a4.006 4.006 0 0 0-5.657 0l1.414 1.414zM17.998 11.998c-1.17 0-2.3.345-3.289 1H9.287a5.926 5.926 0 0 0-3.289-1c-3.309 0-6 2.692-6 6 0 3.309 2.692 6 6 6 1.17 0 2.3-.344 3.289-1h5.422c.989.656 2.119 1 3.289 1 3.309 0 6-2.691 6-6 0-3.308-2.691-6-6-6zm-9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zm8.999-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-1.999 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1.999 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2.001-2a1 1 0 1 1-.002-2 1 1 0 0 1 .002 2z" />
    </g>
  </svg>
);

export default SvgComponent;
