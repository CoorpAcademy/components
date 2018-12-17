import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 8.586L9.707 7.293 8.293 8.707 11 11.415l4.707-4.708-1.414-1.414zM11 15.586l-1.293-1.293-1.414 1.414L11 18.415l4.707-4.708-1.414-1.414z" />
      <Path d="M18 2H6c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM6 20V4h12l.001 16H6z" />
    </G>
  </Svg>
);

export default SvgComponent;
