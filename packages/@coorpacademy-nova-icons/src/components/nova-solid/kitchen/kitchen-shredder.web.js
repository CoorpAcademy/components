import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <path
      fill="currentColor"
      d="M19.773 18.902L18.215 4.878C18.039 3.291 16.597 2 15 2H9C7.403 2 5.961 3.291 5.785 4.877L4.227 18.902a2.804 2.804 0 0 0 .682 2.182A2.8 2.8 0 0 0 7 22h10c.809 0 1.57-.334 2.092-.916.522-.584.77-1.379.681-2.182zM9 19.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3-8a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm1.5.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-1.5 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-1.5-.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm-1.5-2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm1.5 3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm1.5 2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm1.5-2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm1.5 2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0-4a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0-4a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM7.562 7l.211-1.902C7.838 4.514 8.411 4 9 4h6c.589 0 1.162.514 1.227 1.098L16.438 7H7.562z"
    />
  </svg>
);

export default SvgComponent;
