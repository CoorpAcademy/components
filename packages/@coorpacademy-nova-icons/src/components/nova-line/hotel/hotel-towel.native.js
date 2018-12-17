import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      d="M19 3H7C4.794 3 3 4.794 3 7v15h14v-6h4c1.103 0 2-.897 2-2V7c0-2.206-1.794-4-4-4zm-4 17h-1v-3h-2v3h-1v-3H9v3H8v-3H6v3H5V7c0-1.104.897-2 2-2h8.557A3.953 3.953 0 0 0 15 7v13zm2-6V7c0-1.104.897-2 2-2s2 .896 2 2l.001 7H17z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
