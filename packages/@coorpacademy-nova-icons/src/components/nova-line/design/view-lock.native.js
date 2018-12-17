import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M9 16.994c0-1.104.897-2 2-2v-2c-2.206 0-4 1.794-4 4 0 2.205 1.794 4 4 4s4-1.795 4-4h-2c0 1.103-.897 2-2 2s-2-.897-2-2z" />
      <Path d="M20.65 15h-2.86a18.38 18.38 0 0 1 1.941 1.995c-1.179 1.426-4.552 4.999-8.731 4.999-4.166 0-7.549-3.576-8.731-5.002C3.448 15.566 6.82 11.994 11 11.994c.339 0 .672.032 1 .075v-2.015a9.403 9.403 0 0 0-1-.061C4.778 9.993.367 16.154.183 16.417a.996.996 0 0 0 0 1.151c.184.264 4.595 6.426 10.817 6.426s10.633-6.163 10.817-6.425a.996.996 0 0 0 0-1.151A16.741 16.741 0 0 0 20.65 15z" />
      <Path d="M23 4c0-2.205-1.794-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6V6h6v5z" />
      <Path d="M18.997 9h.006A.998.998 0 0 0 20 8c0-.552-.446-1-.997-1h-.006A.998.998 0 0 0 18 8c0 .553.446 1 .997 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
