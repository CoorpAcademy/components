import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.707 12.295l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14.002h2v8h5v-5h4v5h5v-8h2a1 1 0 0 0 .707-1.707zM11 14.002v-4H8l4-5v4h3l-4 5z"
    />
  </Svg>
);

export default SvgComponent;
