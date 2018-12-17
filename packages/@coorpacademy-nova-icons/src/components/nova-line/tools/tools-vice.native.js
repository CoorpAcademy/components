import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      d="M22 5c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.838 2.403 2 2.815V17h-2v-1a1 1 0 0 0 1-1v-2c0-3.309-2.691-6-6-6a1 1 0 0 0-1 1v7c0 .423.266.781.637.927L10.279 17H8.721l-.357-1.073A.999.999 0 0 0 9 15V8a1 1 0 0 0-1-1c-3.309 0-6 2.691-6 6v2a1 1 0 0 0 1 1v4H2v2h15v-2h-1v-1h2v1h2v-1h1v-2h-1V7.815A2.993 2.993 0 0 0 22 5zM12 9.126A4.01 4.01 0 0 1 15 13v1h-3V9.126zM4 13a4.01 4.01 0 0 1 3-3.874V14H4v-1zm1 7v-4h1.279l.771 2.316c.138.409.519.684.95.684h3a.998.998 0 0 0 .949-.684L12.721 16H14v4H5zM19 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
