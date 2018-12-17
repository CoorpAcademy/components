import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <Path
      fill="currentColor"
      d="M14 14v-1h6.203C21.217 12.076 22 10.607 22 9c0-2.757-2.243-5-5-5H7C4.243 4 2 6.243 2 9c0 2.142 1.391 4.038 2.865 4.726l-.852 5.109A.997.997 0 0 0 5 20h14a1.001 1.001 0 0 0 .987-1.165L19.181 14H14zm-1-2a1.002 1.002 0 0 0-.987 1.165L12.819 18H6.181l.806-4.835A.998.998 0 0 0 6 12c-.597 0-2-1.266-2-3 0-1.654 1.346-3 3-3h5c1.654 0 3 1.346 3 3 0 1.734-1.403 3-2 3z"
    />
  </Svg>
);

export default SvgComponent;
