import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 16.771l6.556-4.683A2.007 2.007 0 0 0 14 12H2c-.194 0-.378.037-.556.088L8 16.771z" />
      <Path d="M8.581 18.813a.993.993 0 0 1-1.162 0l-7.364-5.26A1.996 1.996 0 0 0 0 14v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-.154-.021-.303-.055-.446l-7.364 5.259zM22 8h-3V5h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
