import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.996 9.082c0-.028.004-.055.004-.082 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a8.954 8.954 0 0 0 3.003-.526V16c0-3.523 2.605-6.43 5.993-6.918zm-6.551 2.75L8 9.535V4h2v4.465l2.555 1.703-1.11 1.664z" />
      <Path d="M23.003 15c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.898-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19.003} cy={19} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
