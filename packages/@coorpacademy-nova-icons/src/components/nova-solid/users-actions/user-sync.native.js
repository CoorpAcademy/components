import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 17.007c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6zM8.205 8.027c-.07-.003-.135-.02-.205-.02-2.206 0-4 1.795-4 4s1.794 4 4 4a3.995 3.995 0 0 0 3.611-2.309 9.985 9.985 0 0 1-3.406-5.671zM18 .007c-3.309 0-6 2.691-6 6h2c0-2.205 1.794-4 4-4 2.205 0 4 1.795 4 4s-1.795 4-4 4a3.96 3.96 0 0 1-2.812-1.154l-.017-.018L17 7.007h-5v5l1.757-1.757A5.958 5.958 0 0 0 18 12.007c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
