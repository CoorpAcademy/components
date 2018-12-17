import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 6.002c0 .551.448 1 1 1h8c.552 0 1-.449 1-1a4.972 4.972 0 0 0-.833-2.754l1.54-1.54L12.293.294l-1.54 1.54a4.963 4.963 0 0 0-5.505 0L3.708.294 2.293 1.708l1.54 1.54A4.98 4.98 0 0 0 3 6.002zM13 11.758v-1.756h1v1.075a7.96 7.96 0 0 1 2-.818V9.002a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6c0 .551.448 1 1 1h1v3h2v-3h2v3h1.263A8.036 8.036 0 0 1 10 17.998a7.982 7.982 0 0 1 3-6.24z" />
      <Path d="M18 11.996c-3.309 0-6 2.694-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.306-2.692-6-6-6zm1 10h-2v-4h2v4zm-1-4.998a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
