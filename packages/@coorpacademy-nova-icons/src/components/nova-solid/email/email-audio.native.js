import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 11.133V4h12v7.133l2-1.142V2H4v7.991zM15.266 15H8.734L2 11.152V20c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2v-8.848L15.266 15z" />
      <Path d="M16 5.749a.743.743 0 0 0-.311-.606.74.74 0 0 0-.672-.106l-5 1.63a.748.748 0 0 0-.517.712v3.175a1.5 1.5 0 1 0 1.5 1.5c0-.045-.01-.087-.014-.131H11v-4l3.5-1.141v2.772a1.5 1.5 0 1 0 1.5 1.5c0-.045-.01-.087-.014-.131H16V5.749z" />
    </G>
  </Svg>
);

export default SvgComponent;
