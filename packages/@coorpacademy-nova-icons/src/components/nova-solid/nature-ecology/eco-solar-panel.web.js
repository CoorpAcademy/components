import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 4h3v2h-3zM11.365 9.951l-1.414 1.414-2.122-2.122L9.243 7.83zM4 10h2v3H4zM2 2v6a6 6 0 0 0 6-6H2zM13 21h2v3h-2zM12.017 17h3.966l-.525-2h-2.916zM19.292 15.486a1.006 1.006 0 0 0-.858-.486h-1.942l.526 2H20.2l-.908-1.514zM11.754 18l-.525 2h5.542l-.525-2zM9.566 15a1 1 0 0 0-.857.486L7.8 17h3.183l.525-2H9.566zM21.091 18.486L20.8 18h-3.52l.525 2h2.429a.998.998 0 0 0 .857-1.514zM6.909 18.486A1 1 0 0 0 7.766 20h2.429l.526-2H7.2l-.291.486z" />
    </g>
  </svg>
);

export default SvgComponent;
