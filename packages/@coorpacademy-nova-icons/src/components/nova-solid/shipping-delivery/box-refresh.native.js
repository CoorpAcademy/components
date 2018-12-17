import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.448A1.001 1.001 0 0 0 15 .003h-4v6h8.535L15.832.448zM18 10c.691 0 1.359.097 2 .263v-2.26H0v11a1 1 0 0 0 1 1h9.264A7.97 7.97 0 0 1 10 18a8 8 0 0 1 8-8zM9 .003H5a1 1 0 0 0-.832.445L.465 6.003H9v-6zM18.001 22c-1.077 0-2.064-.44-2.811-1.19L17.001 19h-5v5l1.764-1.764A6.026 6.026 0 0 0 18.001 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4z" />
      <Path d="M22.24 13.761A5.937 5.937 0 0 0 18.001 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.812 1.189L19.001 17h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
