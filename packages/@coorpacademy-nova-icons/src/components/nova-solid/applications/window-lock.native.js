import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 3H4c-1.103 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM12 12.003c-.551 0-1 .448-1 1h2c0-.552-.449-1-1-1z" />
      <Path d="M2 19c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V8.002H2V19zm6-4.997a1 1 0 0 1 1-1c0-1.654 1.346-3 3-3s3 1.346 3 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5z" />
      <Circle cx={12} cy={17.003} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
