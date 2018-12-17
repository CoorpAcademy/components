import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM6.752 15.5h-1.5v-2.25h-1.5v2.25h-1.5V9.501h1.5v2.249h1.5V9.501h1.5V15.5zm5.25-4.5h-1.5v4.5h-1.5V11h-1.5V9.501h4.499V11zm5.249 4.5h-1.5v-2.773l-.127.189c-.277.417-.969.417-1.248 0l-.125-.189V15.5h-1.5v-5.249a.75.75 0 0 1 1.374-.416l.877 1.313.875-1.313a.75.75 0 0 1 1.374.416V15.5zm4.498 0h-3.748V9.501h1.5V14h2.249v1.5z"
    />
  </svg>
);

export default SvgComponent;
