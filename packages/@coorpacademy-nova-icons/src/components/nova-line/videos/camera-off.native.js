import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 8h4.794l2-2H7c-1.103 0-2 .896-2 2v6.794l2-2V8zM20.526 8.15a1.003 1.003 0 0 0-.973-.044L17 9.382v-.931l4.726-4.726-1.414-1.414L2.708 19.916l1.414 1.415L7.452 18H15c1.103 0 2-.897 2-2v-1.381l2.553 1.275a.992.992 0 0 0 .973-.043c.294-.182.474-.504.474-.851V9a1 1 0 0 0-.474-.85zM9.452 16L15 10.451 15.001 16H9.452zM19 13.382l-2-1v-.763l2-1v2.763z" />
    </G>
  </Svg>
);

export default SvgComponent;
