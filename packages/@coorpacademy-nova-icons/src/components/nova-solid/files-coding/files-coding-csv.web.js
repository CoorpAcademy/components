import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9 15.507H6.75a.75.75 0 0 0-.75.75v1.5c0 .413.336.75.75.75H9v1.5H6.75a2.253 2.253 0 0 1-2.25-2.25v-1.5c0-1.241 1.01-2.25 2.25-2.25H9v1.5zm5.25 0h-2.625a.375.375 0 0 0 0 .75h.75c1.034 0 1.875.841 1.875 1.875a1.878 1.878 0 0 1-1.875 1.875H9.75v-1.5h2.625a.375.375 0 0 0 0-.75h-.75a1.877 1.877 0 0 1-1.875-1.875c0-1.034.841-1.875 1.875-1.875h2.625v1.5zM18 19.946l.016.06h-1.543l-1.473-6h1.5l.739 2.926.718-2.926H19.5l-1.5 5.94zM15 7.007v-5l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
