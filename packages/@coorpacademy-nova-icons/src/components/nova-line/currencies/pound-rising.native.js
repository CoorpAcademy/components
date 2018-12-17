import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 7c.551 0 1 .449 1 1h2c0-1.654-1.346-3-3-3S7 6.347 7 8v1H6v2h1v2H6v2h7v-2H9v-2h2V9H9V8c0-.551.449-1 1-1z" />
      <Path d="M9.06 17.94C5.091 17.473 2 14.093 2 10c0-4.411 3.589-8 8-8s8 3.589 8 8c0 .34-.028.672-.069 1h2.019c.032-.329.05-.662.05-1 0-5.514-4.486-10-10-10S0 4.486 0 10c0 4.601 3.127 8.475 7.364 9.636L9.06 17.94zM18 13v2h2.586L17 18.586l-2.293-2.292a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L14 18.415l2.293 2.293a1 1 0 0 0 1.414 0L22 16.415V19h2v-6h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
