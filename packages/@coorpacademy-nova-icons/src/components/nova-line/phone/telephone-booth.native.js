import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M19 22V8h1V6h-1v-.414l-.293-.293c-4.37-4.37-9.044-4.37-13.414 0L5 5.586V6H4v2h1v14H3v2h18v-2h-2zM7 12h4v2H7v-2zm10 2h-4v-2h4v2zM7 16h4v2H7v-2zm6 0h4v2h-4v-2zm4-6h-4V8h4v2zm-.473-4H7.474c3.062-2.643 5.991-2.643 9.053 0zM11 8v2H7V8h4zM7 22v-2h10v2H7z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
