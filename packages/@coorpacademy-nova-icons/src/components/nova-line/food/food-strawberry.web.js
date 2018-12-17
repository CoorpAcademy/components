import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M12 5c-5.559 0-9 4.153-9 8 0 4.244 4.914 11 9 11s9-6.756 9-11c0-3.847-3.441-8-9-8zm0 17c-2.682 0-7-5.551-7-9 0-2.885 2.676-6 7-6s7 3.115 7 6c0 3.449-4.318 9-7 9zM12 4C12 0 9.042.042 5 0c.854 3.271 3.133 3.988 7 4zM20 0c-4.041.042-7 0-7 4 3.867-.012 6.146-.729 7-4z" />
      <circle cx={10} cy={10} r={1} />
      <circle cx={14} cy={10} r={1} />
      <circle cx={10} cy={16} r={1} />
      <circle cx={14} cy={16} r={1} />
      <circle cx={12} cy={13} r={1} />
      <circle cx={12} cy={19} r={1} />
      <circle cx={16} cy={13} r={1} />
      <circle cx={8} cy={13} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
