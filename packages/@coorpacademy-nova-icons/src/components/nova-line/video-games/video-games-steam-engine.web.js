import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <g fill="currentColor">
      <path d="M17.998 3.998c-2.757 0-5 2.244-5 5 0 1.018.309 1.963.833 2.753l-.813.813a3.95 3.95 0 0 0-2.02-.567c-.611 0-1.184.149-1.703.396l-.727-.873c.267-.448.43-.963.43-1.523 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.655 1.346 3 3 3 .365 0 .712-.075 1.036-.195l.724.87a3.963 3.963 0 0 0-.76 2.325c0 2.206 1.795 4 4 4s4-1.794 4-4c0-.739-.215-1.423-.566-2.019l.813-.813c.79.525 1.735.833 2.753.833 2.757 0 5-2.243 5-5s-2.243-5-5-5zm-13 6c0-.55.449-1 1-1s1 .45 1 1c0 .551-.449 1-1 1s-1-.449-1-1zm6 8a2 2 0 1 1 .001-4.001 2 2 0 0 1-.001 4.001zm7-6c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3z" />
      <circle cx={17.998} cy={8.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
