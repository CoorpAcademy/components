import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="#767676"
      d="M21.385 8.979l-4.95-4.95a2 2 0 0 0-2.829 0L1.586 16.051a2 2 0 0 0 0 2.828L3.707 21h8.485l9.192-9.192a2 2 0 0 0 .001-2.829zM11.485 19H4.414L3 17.465l4.95-4.95 4.95 4.95L11.485 19z"
    />
  </Svg>
);

export default SvgComponent;
