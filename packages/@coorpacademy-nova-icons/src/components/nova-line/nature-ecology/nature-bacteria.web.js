import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.697 10.992l1.881-.873-.842-1.814-1.884.875a7.02 7.02 0 0 0-1.292-1.474l1.119-1.754-1.686-1.076-1.119 1.752A6.942 6.942 0 0 0 12 6.08V4h-2v2.079a6.942 6.942 0 0 0-2.097.65L6.727 5.013l-1.65 1.133 1.179 1.717a7.024 7.024 0 0 0-1.24 1.516l-1.917-.815-.78 1.841 1.915.813A6.89 6.89 0 0 0 3.994 13c0 .055.007.11.008.164l-2.049.346.332 1.972 2.045-.345c.203.632.492 1.227.855 1.766l-1.539 1.392 1.341 1.484 1.541-1.393a6.957 6.957 0 0 0 1.671 1.028l-.549 2 1.929.53.548-2.004a6.398 6.398 0 0 0 1.96-.034l.615 1.987 1.911-.593-.616-1.988a6.948 6.948 0 0 0 1.631-1.082l1.59 1.345 1.291-1.527-1.589-1.344a7.003 7.003 0 0 0 .799-1.79l2.059.277.267-1.982-2.056-.276a6.91 6.91 0 0 0-.292-1.941zM10.994 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <circle cx={11.494} cy={10.5} r={1.5} />
      <circle cx={19} cy={4} r={2} />
      <circle cx={22} cy={8} r={1} />
      <circle cx={12} cy={16} r={1} />
      <circle cx={7.994} cy={14} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
