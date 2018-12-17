import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M9 16.001a.998.998 0 0 1-.529-.152C8.124 15.633 0 10.492 0 5.001c0-2.757 2.243-5 5-5 1.594 0 3.07.837 4 2.08.93-1.243 2.406-2.08 4-2.08 2.757 0 5 2.243 5 5 0 5.491-8.124 10.632-8.471 10.848a.998.998 0 0 1-.529.152zm-4-14c-1.654 0-3 1.346-3 3 0 3.363 4.643 7.207 7 8.806 2.357-1.599 7-5.442 7-8.806 0-1.654-1.346-3-3-3-1.689 0-3 1.613-3 3a1 1 0 1 1-2 0c0-1.387-1.311-3-3-3zM21.5 19.001a2.49 2.49 0 0 0-1.986.998l-2.562-1.024c.03-.155.048-.312.048-.474s-.018-.319-.048-.473l2.562-1.025a2.489 2.489 0 0 0 1.986.998c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5-2.5 1.121-2.5 2.5c0 .03.008.059.009.089l-2.78 1.112a2.484 2.484 0 0 0-1.729-.701c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5c.672 0 1.278-.27 1.729-.701l2.78 1.112c-.001.03-.009.059-.009.089 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
