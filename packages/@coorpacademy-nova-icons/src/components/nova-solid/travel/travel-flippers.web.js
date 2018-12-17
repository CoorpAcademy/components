import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21.472 3l-.729 5.106-1.485-.212L19.956 3h-3.913l.699 4.894-1.485.212L14.528 3H13l1.739 16.995A3.286 3.286 0 0 0 18 23c1.696 0 3.111-1.321 3.259-3.013L23 3h-1.528zM20 19a2 2 0 0 1-4 0v-3a2 2 0 0 1 4 0v3zM8 2a3.287 3.287 0 0 0-3.261 3.005L3 22h1.528l.729-5.106 1.485.212L6.043 22h3.913l-.699-4.894 1.485-.212.73 5.106H13L11.259 5.013C11.111 3.321 9.696 2 8 2zm2 7a2 2 0 0 1-4 0V6a2 2 0 0 1 4 0v3z" />
    </g>
  </svg>
);

export default SvgComponent;
