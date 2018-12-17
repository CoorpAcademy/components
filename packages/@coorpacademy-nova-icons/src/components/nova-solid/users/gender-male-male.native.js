import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.001 2v2h3.586l-2.833 2.833A4.974 4.974 0 0 0 13.001 6v2c1.654 0 3 1.346 3 3s-1.346 3-3 3v2c2.757 0 5-2.243 5-5a4.964 4.964 0 0 0-.833-2.753l2.833-2.833V9h2V2h-7z" />
      <Path d="M9.001 18.586v-2.687a5.007 5.007 0 0 0 4-4.898c0-2.757-2.243-5-5-5s-5 2.243-5 5a5.007 5.007 0 0 0 4 4.898v2.687l-2.293-2.293-1.414 1.414 4.707 4.707 4.707-4.707-1.414-1.414-2.293 2.293zm-4-7.586c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
