import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 9.535V4h2v4.465l2.354 1.57a6.955 6.955 0 0 1 5.631-.745c.003-.098.015-.192.015-.29 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9c.099 0 .195-.012.293-.014a6.973 6.973 0 0 1 1.466-6.613L8 9.535z" />
      <Path d="M20.17 18.753c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833l3.247 3.247L23.417 22l-3.247-3.247zM16.003 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
