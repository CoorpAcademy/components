import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21.685 11.502C20.575 7.188 16.66 4 12 4a9.954 9.954 0 0 0-7.052 2.922L7 10H2.835a9.83 9.83 0 0 0-.52 1.502 2.005 2.005 0 0 0 .357 1.724c.38.488.963.774 1.581.774h15.494a2 2 0 0 0 1.938-2.498zM13 17H9.677l-.8-2H6.723l1.6 4H10v4h2v-4h3v-4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
