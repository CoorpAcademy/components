import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 4.001h2v3h-2zM21.193 7.394l1.414 1.414-2.121 2.121-1.415-1.414zM2.808 7.394L4.93 9.516 3.516 10.93 1.394 8.809zM21.899 14.759l-2.828-2.829c-3.899-3.899-10.243-3.899-14.143 0L2.1 14.759c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l2.121 2.121c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l2.122-2.121c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-2.073-2.073a8.01 8.01 0 0 1 9.803 0l-2.073 2.073c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l2.121 2.121c.378.378.88.586 1.415.586s1.037-.208 1.415-.586l2.121-2.121c.378-.378.586-.88.586-1.414s-.209-1.036-.587-1.414zM5.637 18.294l-2.122-2.121 2.121-2.122 2.122 2.122-2.121 2.121zm12.728 0l-2.123-2.121 2.122-2.121 2.121 2.121-2.12 2.121z" />
    </g>
  </svg>
);

export default SvgComponent;
