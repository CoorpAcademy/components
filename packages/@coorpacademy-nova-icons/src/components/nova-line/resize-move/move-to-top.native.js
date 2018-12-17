import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .007h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 2.999h-1.586l1.293-1.293L16.293.292l-3.707 3.707 3.707 3.707 1.414-1.414-1.293-1.293H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6v2h6c2.205 0 4-1.795 4-4v-10c0-2.205-1.795-4-4-4zM9 16.999H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM9 8.999H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4H4v-2h4v2zM9 .999H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4H4v-2h4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
