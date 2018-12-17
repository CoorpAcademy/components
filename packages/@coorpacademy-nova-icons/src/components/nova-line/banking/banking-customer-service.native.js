import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24 10h-7.102C16.435 7.72 14.414 6 12 6s-4.435 1.72-4.898 4H0v2h1v12h2V12h18v12h2V12h1v-2zM12 8c1.303 0 2.402.839 2.816 2H9.184A2.994 2.994 0 0 1 12 8z" />
      <Path d="M17 19h1a1 1 0 0 0 .555-1.832l-6-4a1 1 0 0 0-1.109 0l-6 4A1 1 0 0 0 6 19h1v3H5v2h14v-2h-2v-3zm-2 3h-2v-3h2v3zm-3-6.798L14.697 17H9.303L12 15.202zM9 19h2v3H9v-3zM15 3c0-1.654-1.346-3-3-3S9 1.345 9 3s1.346 3 3 3 3-1.346 3-3zm-3 1c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
