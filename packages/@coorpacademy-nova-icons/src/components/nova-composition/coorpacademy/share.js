import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.276 7.944c.282 0 .526.007.724.018V4.5a.5.5 0 01.818-.386l8.5 7a.502.502 0 010 .773l-8.5 7a.497.497 0 01-.531.065A.498.498 0 0114 18.5v-3.608a13.009 13.009 0 00-2.748-.292c-2.77 0-6.557.889-8.82 5.133a.492.492 0 01-.553.252.494.494 0 01-.37-.483c0-10.723 9.005-11.558 11.767-11.558z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
