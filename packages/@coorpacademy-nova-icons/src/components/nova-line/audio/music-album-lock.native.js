import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 18.5a1.5 1.5 0 0 0 3 0v-5.306a.753.753 0 0 0-.983-.712l-5 1.63a.75.75 0 0 0-.517.713V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.141V17A1.5 1.5 0 0 0 9 18.5z" />
      <Path d="M14 22H2V11h10V9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h-2v7z" />
      <Path d="M23 4c0-2.205-1.794-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6V6h6v5z" />
      <Circle cx={19} cy={8} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
