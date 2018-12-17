import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.293 18.293L20 19.586V16h-2v3.586l-1.293-1.293-1.414 1.414L19 23.414l3.707-3.707zM14 11V8a1 1 0 0 0-1-1H8V6a1 1 0 0 0-1.447-.894l-4 2A.998.998 0 0 0 2 8v6a1 1 0 0 0 1 1h5a1 1 0 0 0 .949-.684L9.721 12H13a1 1 0 0 0 1-1zm-2-1H9a1 1 0 0 0-.949.684L7.279 13H4V8.619l2-1V8a1 1 0 0 0 1 1h5v1z" />
      <Path d="M19 9.5a7.463 7.463 0 0 0-5.808-7.308l-.449 1.949A5.472 5.472 0 0 1 17 9.5a5.473 5.473 0 0 1-4.257 5.36l.45 1.949A7.464 7.464 0 0 0 19 9.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
