import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M14.25 13H13v5h3.125v-1.25H14.25zM3 14.563c0 .862.701 1.563 1.563 1.563h.625a.313.313 0 0 1 0 .626H3V18h2.188c.861 0 1.563-.701 1.563-1.563s-.701-1.563-1.563-1.563h-.625a.313.313 0 1 1 0-.626H6.75V13H4.563C3.701 13 3 13.701 3 14.563zM6.25 10.125h1.875v-1.25H6.25V8.25h2.5V7h-2.5C5.561 7 5 7.561 5 8.25V12h1.25v-1.875zM13.75 10.125v-1.25C13.75 7.841 12.909 7 11.875 7S10 7.841 10 8.875v1.25c0 1.034.841 1.875 1.875 1.875s1.875-.841 1.875-1.875zm-1.25 0a.625.625 0 0 1-1.25 0v-1.25a.626.626 0 0 1 1.25 0v1.25zM17.303 12h1.447l-.895-1.533c.535-.331.895-.918.895-1.592A1.877 1.877 0 0 0 16.875 7H15v5h1.25v-1.25h.324l.729 1.25zM16.25 8.25h.625a.626.626 0 0 1 0 1.25h-.625V8.25z" />
      <path d="M22 4H2C.897 4 0 4.896 0 6v13c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2zM2 19V6h20l.001 13H2z" />
      <path d="M17 13.625v3.75c0 .345.28.625.625.625h3.125v-1.25h-2.5v-.625h1.875v-1.25H18.25v-.625h2.5V13h-3.125a.626.626 0 0 0-.625.625zM11.125 13h-2.5a.626.626 0 0 0-.625.625V18h1.25v-1.25h1.25V18h1.25v-4.375a.626.626 0 0 0-.625-.625zm-.625 2.5H9.25v-1.25h1.25v1.25z" />
    </g>
  </svg>
);

export default SvgComponent;
