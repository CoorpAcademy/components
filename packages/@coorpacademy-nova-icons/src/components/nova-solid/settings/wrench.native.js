import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19 9a6.992 6.992 0 0 0-4-6.317V8a3 3 0 1 1-6 0V2.682A6.994 6.994 0 0 0 5 9a6.987 6.987 0 0 0 3 5.74V22h3v-5h2v5h3v-7.26A6.987 6.987 0 0 0 19 9z"
    />
  </Svg>
);

export default SvgComponent;
