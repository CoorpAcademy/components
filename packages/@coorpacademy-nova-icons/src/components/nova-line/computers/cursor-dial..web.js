import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M23 22.001h-6a1 1 0 0 1-.949-.684l-2-6a.997.997 0 0 1 .138-.9.998.998 0 0 1 .811-.416h1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.279l2.316.771c.409.137.684.519.684.95v6a1 1 0 0 1-1 1zm-5.279-2H22v-4.279l-2.316-.771a1.002 1.002 0 0 1-.684-.95v-3h-1v4a1 1 0 0 1-1 1h-.613l1.334 4z"
      fill="currentColor"
    />
    <path
      d="M13 21.001H3c-1.103 0-2-.897-2-2v-13c0-1.104.897-2 2-2h16c1.103 0 2 .896 2 2v2h-2v-2H3v13h10v2z"
      fill="currentColor"
    />
    <circle cx={6} cy={9.001} r={1} fill="currentColor" />
    <circle cx={9} cy={9.001} r={1} fill="currentColor" />
    <circle cx={12} cy={9.001} r={1} fill="currentColor" />
    <circle cx={6} cy={13.001} r={1} fill="currentColor" />
    <circle cx={9} cy={13.001} r={1} fill="currentColor" />
    <circle cx={6} cy={16.001} r={1} fill="currentColor" />
    <circle cx={12} cy={13.001} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
