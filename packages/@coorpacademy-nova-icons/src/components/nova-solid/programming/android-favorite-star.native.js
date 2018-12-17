import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.96 4.96 0 0 0-.833-2.752l1.54-1.54L12.293.294l-1.54 1.54a4.956 4.956 0 0 0-5.505 0L3.708.294 2.293 1.707l1.54 1.54A4.974 4.974 0 0 0 3 6zM13 11.757V10h1v1.076a7.918 7.918 0 0 1 2-.816V9c0-.551-.448-1-1-1H1c-.552 0-1 .449-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h1.263A8.014 8.014 0 0 1 10 17.998a7.983 7.983 0 0 1 3-6.241z" />
      <Path d="M24 16.283h-4.286L18 11.998l-1.714 4.285H12l3.708 3.13-1.994 4.585L18 21.163l4.286 2.835-1.994-4.585z" />
    </G>
  </Svg>
);

export default SvgComponent;
