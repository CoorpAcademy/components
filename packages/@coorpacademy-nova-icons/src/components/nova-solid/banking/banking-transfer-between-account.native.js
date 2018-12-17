import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 6.999h-2V8.05c-1.14.233-2 1.242-2 2.45 0 1.378 1.121 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.05c1.14-.232 2-1.242 2-2.45 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15V8h-2V6.999zM17.707.294l-1.414 1.413L17.586 3H9v1.999h8.586l-1.293 1.295 1.414 1.413L21.414 4zM7.707 17.708l-1.414-1.414L2.586 20l3.707 3.708 1.414-1.414L6.414 21H15v-2H6.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
