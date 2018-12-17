import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 11c0-.101-.995-8.025-1.008-8.125A1 1 0 0 0 16 2H8a1 1 0 0 0-.992.875C6.995 2.976 6 10.9 6 11c0 2.968 2.167 5.432 5 5.909V20H8v2h8v-2h-3v-3.09c2.833-.478 5-2.941 5-5.91zm-2.883-7l.375 3H8.508l.375-3h6.234zM8 11.06L8.258 9h7.484L16 11.06c-.032 2.178-1.814 3.94-4 3.94s-3.968-1.762-4-3.94z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
