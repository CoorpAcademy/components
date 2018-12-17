import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={15} cy={5} r={2} />
      <path d="M8.295 17.291L8 17.586 2.414 12l10-10H18v5.586l-4.707 4.707 1.414 1.414 5-5A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l1.001-1.001-1.413-1.415zM21.5 19a2.49 2.49 0 0 0-1.986.998l-2.562-1.024c.03-.155.048-.312.048-.474s-.018-.319-.048-.473l2.562-1.025A2.492 2.492 0 0 0 21.5 18c1.379 0 2.5-1.121 2.5-2.5S22.879 13 21.5 13 19 14.121 19 15.5c0 .03.008.059.009.089l-2.78 1.112A2.49 2.49 0 0 0 14.5 16c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5c.672 0 1.278-.27 1.729-.701l2.78 1.112c-.001.03-.009.059-.009.089 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z" />
    </g>
  </svg>
);

export default SvgComponent;
