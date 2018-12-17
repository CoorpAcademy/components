import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M13 13c0-.551-.449-1-1-1s-1 .449-1 1v1h2v-1z" />
      <Circle cx={12} cy={17} r={1} />
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zM16 20H8v-6h1v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1h1v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
