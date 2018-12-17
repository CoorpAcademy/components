import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M8 9.999h8v2H8z" />
      <Path d="M18 1.999H6a4 4 0 1 0 4 4c0-.732-.211-1.409-.555-2h5.109a3.967 3.967 0 0 0-.554 2 4 4 0 1 0 4-4zm-12 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 21.999h2v-7h1v7h2v-7h1v7h2v-9H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
