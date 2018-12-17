import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M9 13c0 1.142.637 2.14 1.593 2.643L9.699 19h4.602l-.894-3.357A2.979 2.979 0 0 0 15 13c0-1.654-1.346-3-3-3s-3 1.346-3 3zm4 0c0 .498-.332.928-1 .995-.67-.068-1-.5-1-.995 0-.551.449-1 1-1s1 .449 1 1z" />
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h2a1 1 0 0 0 .707-1.707zM18 12a1 1 0 0 0-1 1v8H7v-8a1 1 0 0 0-1-1h-.586L12 5.414 18.586 12H18z" />
    </G>
  </Svg>
);

export default SvgComponent;
