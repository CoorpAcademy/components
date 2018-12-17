import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.285 11.518C20.6 9.351 17.331 7.712 14 6.804V4l3 2V1l-3 2V1h-2v2L9 1v5l3-2v2.348C10.774 6.122 9.58 6 8.5 6A5.506 5.506 0 0 0 3 11.5c0 .842.196 1.638.536 2.353A4.013 4.013 0 0 0 2 17c0 2.205 1.794 4 4 4h9v-2H6c-1.103 0-2-.896-2-2a2 2 0 0 1 .716-1.518A5.478 5.478 0 0 0 8.5 17h11.103a3.42 3.42 0 0 0 3.052-1.904 3.418 3.418 0 0 0-.37-3.578zm-1.427 2.699a1.408 1.408 0 0 1-1.255.783H8.5C6.57 15 5 13.43 5 11.5S6.57 8 8.5 8c4.112 0 9.998 1.907 12.206 4.744.325.419.385.996.152 1.473z" />
      <Circle cx={18} cy={13} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
