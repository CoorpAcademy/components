import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M9.5 14.998c-1.93 0-3.5 1.571-3.5 3.5C6 20.43 7.57 22 9.5 22s3.5-1.57 3.5-3.501c0-1.93-1.57-3.501-3.5-3.501z" />
      <Path d="M19 20V7c0-2.757-2.243-5-5-5S9 4.243 9 7v.998a1 1 0 0 0-1 1H7c-2.205 0-4 1.795-4 4V21a1 1 0 0 0 1 1h2.704C5.674 21.175 5 19.922 5 18.499c0-2.483 2.015-4.5 4.5-4.5.926 0 1.785.282 2.5.761V8.998a1 1 0 0 0-1-1V7c0-1.654 1.346-3 3-3s3 1.346 3 3v13h-2v2h6v-2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
