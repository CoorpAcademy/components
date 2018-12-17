import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M2 3h4v4H2zM8 3h4v4H8zM2 9h4v4H2zM8 9h4v4H8zM2 15h4v4H2zM8 15h4v4H8zM14 3h4v4h-4zM22 21h-6c-.409 0-.776-.249-.929-.629l-2-5A.999.999 0 0 1 14 14h1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.279l2.316.772A1 1 0 0 1 23 15v5a1 1 0 0 1-1 1zm-5.323-2H21v-3.28l-2.316-.772A.998.998 0 0 1 18 14v-3h-1v4a1 1 0 0 1-1 1h-.523l1.2 3z"
    />
  </Svg>
);

export default SvgComponent;
