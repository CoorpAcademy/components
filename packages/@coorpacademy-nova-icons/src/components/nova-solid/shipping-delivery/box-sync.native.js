import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.448A1.001 1.001 0 0 0 15 .003h-4v6h8.535L15.832.448zM9 .003H5a1 1 0 0 0-.832.445L.465 6.003H9v-6zM18 10c.691 0 1.359.097 2 .263v-2.26H0v11a1 1 0 0 0 1 1h9.264A7.97 7.97 0 0 1 10 18a8 8 0 0 1 8-8z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.188L17 19h-5v5l1.761-1.761A5.94 5.94 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
