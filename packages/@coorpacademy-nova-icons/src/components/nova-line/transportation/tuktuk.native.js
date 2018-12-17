import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 14V6c0-1.654-1.346-3-3-3h-1l-1-2h-4L9 3H8C6.346 3 5 4.346 5 6v8c-1.654 0-3 1.346-3 3v3c0 1.654 1.346 3 3 3s3-1.346 3-3h1v1c0 1.654 1.346 3 3 3s3-1.346 3-3v-1h1c0 1.654 1.346 3 3 3s3-1.346 3-3v-3c0-1.654-1.346-3-3-3zM8 5h8c.551 0 1 .449 1 1v2H7V6c0-.551.449-1 1-1zM6 20c0 .551-.449 1-1 1s-1-.449-1-1v-3c0-.551.449-1 1-1v1c0 .883.391 1.67 1 2.22V20zm7 1c0 .551-.449 1-1 1s-1-.449-1-1v-4c0-.551.449-1 1-1s1 .449 1 1v4zm2-3v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3v1H8c-.551 0-1-.449-1-1v-7h10v7c0 .551-.449 1-1 1h-1zm5 2c0 .551-.449 1-1 1s-1-.449-1-1v-.78c.609-.55 1-1.337 1-2.22v-1c.551 0 1 .449 1 1v3z" />
      <Circle cx={9.5} cy={12.5} r={1.5} />
      <Circle cx={14.5} cy={12.5} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
