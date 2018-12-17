import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M15 9.268l-3-5.252-3 5.25V11h6zM4.001 11h3V9c0-.173.045-.346.132-.496l3.103-5.429L3.401 8.2A1.002 1.002 0 0 0 3 9v1a1 1 0 0 0 1.001 1zM17 9.002V11h3a1 1 0 0 0 1-1V9a1 1 0 0 0-.4-.8l-6.834-5.125 3.103 5.432c.087.15.131.321.131.495zM11 12h2v10h-2zM20.03 14.758L19.219 18H16a1 1 0 0 0-1 1v3h2v-2h2v2h2v-2.877l.971-3.879-1.941-.486zM8 18H4.782l-.811-3.242-1.941.485.97 3.88V22h2v-2h2v2h2v-3a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
