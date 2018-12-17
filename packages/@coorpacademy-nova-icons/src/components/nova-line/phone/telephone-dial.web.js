import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M21.9 6.758l-2.828-2.829C15.173.03 8.829.03 4.929 3.929L2.101 6.758c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l2.121 2.121c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l2.122-2.121c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414L7.099 4.685a8.01 8.01 0 0 1 9.803 0l-2.073 2.073c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l2.121 2.121c.378.378.88.586 1.415.586s1.037-.208 1.415-.586l2.12-2.121c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414zM5.637 10.293L3.515 8.172 5.636 6.05l2.122 2.122-2.121 2.121zm12.729 0l-2.123-2.121 2.122-2.121 2.121 2.121-2.12 2.121z"
      fill="currentColor"
    />
    <circle cx={8} cy={14} r={1.25} fill="currentColor" />
    <circle cx={12} cy={14} r={1.25} fill="currentColor" />
    <circle cx={16} cy={14} r={1.25} fill="currentColor" />
    <circle cx={8} cy={18} r={1.25} fill="currentColor" />
    <circle cx={12} cy={18} r={1.25} fill="currentColor" />
    <circle cx={16} cy={18} r={1.25} fill="currentColor" />
    <circle cx={8} cy={22} r={1.25} fill="currentColor" />
    <circle cx={12} cy={22} r={1.25} fill="currentColor" />
    <circle cx={16} cy={22} r={1.25} fill="currentColor" />
  </svg>
);

export default SvgComponent;
