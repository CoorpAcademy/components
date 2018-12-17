import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 2H4c-1.104 0-2 .898-2 2v10c0 1.103.896 2 2 2h5.585l-5.999 5.999h2.828L11 17.414v4.585h2v-4.585l4.586 4.585h2.828L14.415 16H20c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zm0 2v2H4V4h16zM4 14V8h15.999l-.002 6H4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
