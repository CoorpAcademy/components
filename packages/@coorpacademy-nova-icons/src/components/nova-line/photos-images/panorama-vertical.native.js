import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20.506.998H3.494c3.353 7.972 3.403 13.913 0 22h17.012c-3.405-8.091-3.352-14.031 0-22zm-2.966 20H6.46a26.961 26.961 0 0 0 0-18h11.08a26.961 26.961 0 0 0 0 18z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
