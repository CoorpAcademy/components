import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M5.18 2h-.36c-.95 0-1.775.677-1.962 1.607L2.02 7.804 2 22h6V8l-.859-4.39A2.004 2.004 0 0 0 5.18 2zM6 9v7H4V9h2zm-.82-5l.6 3H4.22l.6-3h.36zM4 20v-2h2v2H4zM12.18 2h-.36c-.95 0-1.775.677-1.962 1.607L9.02 7.804 9 22h6V8l-.859-4.39A2.004 2.004 0 0 0 12.18 2zM13 9v7h-2V9h2zm-.82-5l.601 3H11.22l.601-3h.359zM11 20v-2h2v2h-2zM21.141 3.61A2.004 2.004 0 0 0 19.18 2h-.36c-.95 0-1.775.677-1.962 1.607l-.838 4.197L16 22h6V8l-.859-4.39zM20 9v7h-2V9h2zm-.82-5l.601 3H18.22l.601-3h.359zM18 20v-2h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
