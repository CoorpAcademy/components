import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.95 14.872l-4.907 5.013V13.87c-.328.047-.66.08-1 .08-.34 0-.672-.033-1-.08v6.103L6.05 14.872a3.588 3.588 0 0 0 0 5.071c1.4 1.4 2.908 1.008 5.95 1.008s4.55.393 5.95-1.008c1.4-1.4 1.4-3.672 0-5.071zM12.043 12.95a6 6 0 0 0 6-6v-4l-3 3-3-3-3 3-3-3v4a6 6 0 0 0 6 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
