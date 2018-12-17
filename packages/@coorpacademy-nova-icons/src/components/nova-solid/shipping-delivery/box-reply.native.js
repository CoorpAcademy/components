import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.445A1.001 1.001 0 0 0 15 0h-4v6h8.535L15.832.445zM15 10c1.96 0 3.729.808 5 2.106V8H0v11a1 1 0 0 0 1 1h7.683A6.962 6.962 0 0 1 8 17a7 7 0 0 1 7-7zM9 0H5a1 1 0 0 0-.832.445L.465 6H9V0z" />
      <Path d="M18 16h-4.586l2.293-2.293-1.414-1.413L9.586 17l4.707 4.706 1.414-1.413L13.414 18H18c2.205 0 4 1.794 4 4v2h2v-2c0-3.309-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
