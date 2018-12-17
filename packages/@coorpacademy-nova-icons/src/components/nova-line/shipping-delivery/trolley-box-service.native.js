import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M22 5c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-3 1c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1zM19 8c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5zm3 7h-1a1 1 0 0 0-1 1v4h-2v-4a1 1 0 0 0-1-1h-1v-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2zM6 16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5zm-4-6h3v4H2v-4z" />
      <Circle cx={10} cy={20} r={2} />
      <Path d="M9.004 5.917L8.08 17H1v2h6.184A2.997 2.997 0 0 1 10 17c.029 0 .057.008.086.009L10.92 7H13V5h-3a.999.999 0 0 0-.996.917z" />
    </G>
  </Svg>
);

export default SvgComponent;
