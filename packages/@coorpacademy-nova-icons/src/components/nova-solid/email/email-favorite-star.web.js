import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M15.769 13.679l-7.188 5.135a1 1 0 0 1-1.162-.001l-7.364-5.26A2.003 2.003 0 0 0 0 14v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-.092-.016-.18-.027-.269-.068-.017-.136-.033-.204-.052z" />
      <path d="M8 16.771l5.67-4.05a7.964 7.964 0 0 1-.95-.721H2c-.193 0-.378.036-.555.088L8 16.771zM18 0l1.714 4.286H24l-3.708 3.13L22.285 12 18 9.166 13.714 12l1.994-4.584L12 4.286h4.285z" />
    </g>
  </svg>
);

export default SvgComponent;
