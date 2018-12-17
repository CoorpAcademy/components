import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M18 10v4a2 2 0 0 0 0-4zM6 10a2 2 0 0 0 0 4v-4zM15.501 14H17v-4h-2.38A3.974 3.974 0 0 0 16 7a4 4 0 0 0-8 0c0 1.201.541 2.267 1.38 3H7v4h1.5l-1.398 4.498c-.329 1.054.26 2.174 1.315 2.502s2.177-.261 2.505-1.315L12 16.216l1.079 3.469a2 2 0 0 0 3.82-1.187L15.501 14zM10.25 7a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM12 15a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0-2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM13.75 7a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
