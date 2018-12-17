import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M21 10H11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8c.265 0 .52-.105.707-.294l2-2A.992.992 0 0 0 22 19v-8a1 1 0 0 0-1-1zm-3 11v-3h3l-3 3z" />
      <Path d="M2 2v20h6v-2H5v-2h3v-2H5v-2h3v-2H5v-2h3V8h2V5h2v3h2V5h2v3h2V5h2v3h2V2H2zm4 4H4V4h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
