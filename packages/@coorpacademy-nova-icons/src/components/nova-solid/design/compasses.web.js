import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M12.002 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM11 0h2v2h-2zM19 11h-2c0 .982-.481 1.848-1.212 2.396l-1.183-3.144a4.983 4.983 0 0 1-1.915.681L13.786 14h-3.571l1.096-3.068a4.953 4.953 0 0 1-1.915-.683L5.502 20.602 7 23l2.5-7H14c.165 0 .321-.033.482-.049L17 23l1.499-2.398-1.994-5.3C17.989 14.434 19 12.841 19 11z" />
    </g>
  </svg>
);

export default SvgComponent;
