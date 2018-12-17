import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M17.007 11.001l3 3v5l2 5h-5v-4l-3-3 1-1 2 1z"
    />
    <Path
      d="M14.007 23.001h-6c-1.103 0-2-.896-2-2v-10c0-1.104.897-2 2-2h6c1.103 0 2 .896 2 2v4.002h-2v-4.002h-6v10h6v-.996h2v.996c0 1.103-.898 2-2 2zM4.889 4.851l-1.53-1.289a9.99 9.99 0 0 1 7.653-3.563 9.988 9.988 0 0 1 7.64 3.547l-1.527 1.291a7.987 7.987 0 0 0-6.112-2.838 7.991 7.991 0 0 0-6.124 2.852z"
      fill="currentColor"
    />
    <Path
      d="M14.215 7.601c-.764-1.018-1.932-1.602-3.202-1.602s-2.437.584-3.2 1.601l-1.6-1.201A6.03 6.03 0 0 1 11.013 4a5.95 5.95 0 0 1 4.802 2.402l-1.6 1.199z"
      fill="currentColor"
    />
    <Circle cx={11} cy={18.001} r={1.25} fill="currentColor" />
    <Circle cx={11} cy={14.001} r={1.25} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
