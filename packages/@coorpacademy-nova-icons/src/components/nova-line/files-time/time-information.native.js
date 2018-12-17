import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill="currentColor" d="M8 4h2v4H8z" />
    <Path
      d="M2 9c0-3.86 3.14-7 7-7 3.519 0 6.432 2.613 6.919 6h2.021c-.5-4.493-4.316-8-8.94-8-4.962 0-9 4.038-9 9 0 4.624 3.507 8.442 8 8.941V15.92c-3.386-.488-6-3.4-6-6.92z"
      fill="currentColor"
    />
    <Circle cx={17} cy={15} r={1} fill="currentColor" />
    <Path
      d="M17 10c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M16 17h2v4h-2z" />
  </Svg>
);

export default SvgComponent;
