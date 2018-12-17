import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.371 12c0-.621-.281-1.196-.772-1.578L7.228 5.466a2.043 2.043 0 0 0-2.107-.217A2.012 2.012 0 0 0 4 7.045v9.91c0 .758.44 1.463 1.121 1.797.692.338 1.506.25 2.107-.217l6.372-4.957c.49-.382.771-.957.771-1.578zM6 16.955v-9.91L12.372 12 6 16.955z" />
      <Path d="M20.625 11.22l-10-8-1.25 1.561L18.399 12l-9.024 7.22 1.249 1.562 10-8a1 1 0 0 0 .001-1.562z" />
    </G>
  </Svg>
);

export default SvgComponent;
