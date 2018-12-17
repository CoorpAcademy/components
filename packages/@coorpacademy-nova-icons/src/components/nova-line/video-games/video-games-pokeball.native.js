import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.998 1.998c-5.514 0-10 4.487-10 10 0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10zm0 2c4.072 0 7.436 3.061 7.931 7h-3.032c-.465-2.279-2.484-4-4.898-4s-4.434 1.721-4.898 4H4.067c.496-3.939 3.859-7 7.931-7zm3 8c0 1.655-1.346 3-3 3s-3-1.345-3-3c0-1.654 1.346-3 3-3s3 1.346 3 3zm-3 8c-4.072 0-7.436-3.06-7.931-7H7.1c.465 2.28 2.484 4 4.898 4s4.434-1.72 4.898-4h3.032c-.494 3.94-3.858 7-7.93 7z" />
      <Circle cx={11.998} cy={11.998} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
