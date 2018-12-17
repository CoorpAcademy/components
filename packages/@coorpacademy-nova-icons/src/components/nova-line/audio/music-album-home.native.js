import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 18.5a1.5 1.5 0 0 0 3 0v-5.306a.753.753 0 0 0-.983-.712l-5 1.63a.75.75 0 0 0-.517.713V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.141V17A1.5 1.5 0 0 0 9 18.5z" />
      <Path d="M14.001 22H2V11h7V9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8h-2l.001 8zM19 10h-4V6l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8l-2-2v4z" />
      <Path d="M17.707.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L17 2.414l5.293 5.292 1.414-1.414-6-5.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
