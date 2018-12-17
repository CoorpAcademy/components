import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M4.415 21.8L3 20.385l8.485-8.484 1.414 1.414z" />
      <Path d="M19.088 8.19l2.296-4.776-4.775 2.296L12.899 2l.822 5.064L8.72 9.586l5.605.888.887 5.604 2.522-5.001 5.064.822z" />
    </G>
  </Svg>
);

export default SvgComponent;
