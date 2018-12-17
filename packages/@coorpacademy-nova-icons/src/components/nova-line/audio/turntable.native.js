import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.196 17.98l4.021-.804c1-.2 1.783-1.156 1.783-2.176V2h-2v13c0 .075-.104.201-.177.216l-4.02.803.393 1.961z" />
      <Path d="M21 4h-1v2h1v14H3V6h13V4H3c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2z" />
      <Path d="M11 9c1.271 0 2.438.585 3.202 1.603l1.6-1.199A5.953 5.953 0 0 0 11 7c-3.309 0-6 2.691-6 6s2.691 6 6 6v-2c-2.206 0-4-1.794-4-4 0-2.205 1.794-4 4-4z" />
      <Circle cx={11} cy={13} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
