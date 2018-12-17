import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.352 13.465C13.748 13.1 14 12.581 14 12a2 2 0 0 0-4 0c0 .58.252 1.1.648 1.465l-4.543 9.088A1 1 0 0 0 7 24h10a1.001 1.001 0 0 0 .895-1.448l-4.543-9.087zm.03 4.535h-2.764L12 15.237 13.382 18zm-4.764 4l1-2h4.764l1 2H8.618z" />
      <path d="M20.485 3.516C18.219 1.249 15.205.001 12 .001S5.781 1.249 3.515 3.516C1.248 5.782 0 8.795 0 12s1.248 6.219 3.515 8.486l1.414-1.414A9.935 9.935 0 0 1 2 12a9.928 9.928 0 0 1 2.929-7.07C6.818 3.041 9.329 2 12 2s5.182 1.04 7.071 2.93A9.932 9.932 0 0 1 22 12a9.93 9.93 0 0 1-2.929 7.07l1.414 1.414C22.752 18.219 24 15.206 24 12s-1.248-6.218-3.515-8.484z" />
      <path d="M12 5.001c-3.859 0-7 3.14-7 7 0 .891.17 1.766.504 2.6l1.857-.746A4.948 4.948 0 0 1 7 12c0-2.758 2.243-5 5-5s5 2.242 5 5c0 .635-.121 1.259-.359 1.854l1.855.746A6.962 6.962 0 0 0 19 12c0-3.86-3.141-6.999-7-6.999z" />
    </g>
  </svg>
);

export default SvgComponent;
