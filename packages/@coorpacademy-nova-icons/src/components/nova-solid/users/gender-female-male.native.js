import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.001 11c0-2.757-2.243-5-5-5s-5 2.243-5 5a5.007 5.007 0 0 0 4 4.898V19h-2v2h2v2h2v-2h2v-2h-2v-3.102a5.007 5.007 0 0 0 4-4.898zm-8 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
      <Path d="M15.001 2v2h3.586l-2.833 2.833A4.974 4.974 0 0 0 13.001 6v2c1.654 0 3 1.346 3 3s-1.346 3-3 3v2c2.757 0 5-2.243 5-5a4.964 4.964 0 0 0-.833-2.753l2.833-2.833V9h2V2h-7z" />
    </G>
  </Svg>
);

export default SvgComponent;
