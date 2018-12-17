import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 11.134V4h12v7.134l2-1.143V2H4v7.991zM15.266 15H8.734L2 11.152V20c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2v-8.848L15.266 15z" />
      <Path d="M12 5L7 9h2v4h2v-2h2v2h2V9h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
