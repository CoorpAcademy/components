import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M21.414 10.585l-7.999-7.98A1.987 1.987 0 0 0 12 2.019c-.534 0-1.036.208-1.413.585l-8.001 7.981a1.995 1.995 0 0 0-.433 2.18A1.996 1.996 0 0 0 4.001 14h1v8h14v-8h1a1.99 1.99 0 0 0 1.848-1.235 1.998 1.998 0 0 0-.435-2.18zM12 11a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 11zm-3 8c0-1.841 1.159-3 3-3s3 1.159 3 3H9z"
    />
  </svg>
);

export default SvgComponent;
