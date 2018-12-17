import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <circle cx={17} cy={20} r={2} />
      <circle cx={8} cy={20} r={2} />
      <path d="M20 7h-2.543l2.254 6.763-1.423.475L15.876 7h-2.752l2.587 7.763-1.423.475L11.543 7H7v2h3l2.312 6.938c-.446.089-.773.062-1.312.062l-1.772-5.316A1 1 0 0 0 8.279 10H5.566a1 1 0 0 0-.857.486l-2.566 4.277a.991.991 0 0 0-.143.514V20h3a3 3 0 0 1 6 0h3a3 3 0 0 1 6 0 2 2 0 0 0 2-2v-6l-2-5zM8 15H4l2-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
